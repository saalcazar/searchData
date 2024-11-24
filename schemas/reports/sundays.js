import z from 'zod'

const sundaySchema = z.object({
  typeSunday: z.string(),
  prioritySunday: z.string(),
  confideltialitySunday: z.string(),
  numSunday: z.string(),
  dateSunday: z.date(),
  issueSunday: z.string(),
  linkSunday: z.string().url()
})

export function validateSunday (object) {
  return sundaySchema.safeParse(object)
}

export function validatePartialSunday (object) {
  return sundaySchema.partial().safeParse(object)
}
