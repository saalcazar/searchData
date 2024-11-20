import http from 'node:http'

const PORT = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  console.log('request')
  res.end('Hola mundo')
})

server.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})