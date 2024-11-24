import z from 'zod'

const regionsSchema = z.object({
  regionArea: z.string()
})

export function validateArea (object) {
  return regionsSchema.safeParse(object)
}
