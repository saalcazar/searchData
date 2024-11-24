import z from 'zod'

const workSchema = z.object({
  work: z.string()
})

export function validateWork (object) {
  return workSchema.safeParse(object)
}
