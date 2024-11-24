import z from 'zod'

const alertSchema = z.object({
  typeAlert: z.string(),
  priorityAlert: z.string(),
  confideltialityAlert: z.string(),
  numAlert: z.string(),
  dateAlert: z.date(),
  issueAlert: z.string(),
  linkAlert: z.string().url()
})

export function validateAlert (object) {
  return alertSchema.safeParse(object)
}

export function validatePartialAlert (object) {
  return alertSchema.partial().safeParse(object)
}
