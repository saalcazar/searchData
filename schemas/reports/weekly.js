import z from 'zod'

const weeklySchema = z.object({
  numWeekly: z.string(),
  dateWeekly: z.date(),
  linkWeekly: z.string().url()
})

export function validateWeekly (object) {
  return weeklySchema.safeParse(object)
}

export function validatePartialWeekly (object) {
  return weeklySchema.partial().safeParse(object)
}
