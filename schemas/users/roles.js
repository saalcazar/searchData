import z from 'zod'

const rolesSchema = z.object({
  nameRole: z.string()
})

export function validateArea (object) {
  return rolesSchema.safeParse(object)
}
