import z from 'zod'

const diarySchema = z.object({
  typeDiary: z.string(),
  priorityDiary: z.string(),
  confideltialityDiary: z.string(),
  numDiary: z.string(),
  dateDiary: z.date(),
  issueDiary: z.string(),
  linkDiary: z.string().url()
})

export function validateDiary (object) {
  return diarySchema.safeParse(object)
}

export function validatePartialDiary (object) {
  return diarySchema.partial().safeParse(object)
}
