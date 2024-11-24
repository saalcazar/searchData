import z from 'zod'

const ngoWeeklySchema = z.object({
  numNgoWeekly: z.string(),
  dateNgoWeekly: z.date(),
  linkNgoWeekly: z.string().url()
})

export function validateNgoWeekly (object) {
  return ngoWeeklySchema.safeParse(object)
}

export function validatePartialNgoWeekly (object) {
  return ngoWeeklySchema.partial().safeParse(object)
}
