import z from 'zod'

const associationsSchema = z.object({
  association: z.string()
})

export function validateAssociation (object) {
  return associationsSchema.safeParse(object)
}
