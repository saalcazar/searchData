import jwt from 'jsonwebtoken'
import { validateLogin } from '../../schemas/login/login.js'
import { SECRET_JWT_TOKEN } from '../../config.js'

export class LoginSuperController {
  constructor ({ loginSuperModel }) {
    this.loginSuperModel = loginSuperModel
  }

  login = async (req, res) => {
    const result = validateLogin(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
      const user = await this.loginSuperModel.login({ input: result.data })
      const token = jwt.sign(
        {
          userNick: user[0].validate_super_user.name,
          idUser: user[0].validate_super_user.id
        },
        SECRET_JWT_TOKEN,
        { expiresIn: '8h' }
      )
      res
        .status(200)
        .cookie('acces_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60 * 8
        })
        .send({ user, token })
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  }

  authorized = async (req, res) => {
    const token = req.cookies.acces_token
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      const user = jwt.verify(token, SECRET_JWT_TOKEN)
      res.status(200).send({ user })
    } catch (e) {
      res.status(401).json({ error: 'Unauthorized' })
    }
  }

  logOut = async (req, res) => {
    res
      .clearCookie('acces_token')
      .send({ message: 'LogOut' })
  }
}
