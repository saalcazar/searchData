import z from 'zod'

const associationsSchema = z.object({
  association: z.string(),
  idIndividual: z.preprocess((val) => (val === '' ? null : val), z.string().nullable()),
  idCollective: z.preprocess((val) => (val === '' ? null : val), z.string().nullable()),
  idUser: z.string()
})

export function validateAssociation (object) {
  return associationsSchema.safeParse(object)
}
