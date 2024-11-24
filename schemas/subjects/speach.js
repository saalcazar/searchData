import z from 'zod'

const speachsSchema = z.object({
  speach: z.string()
})

export function validateSpeach (object) {
  return speachsSchema.safeParse(object)
}
