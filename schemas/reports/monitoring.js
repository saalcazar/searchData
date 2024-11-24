import z from 'zod'

const monitoringSchema = z.object({
  typeMonitoring: z.string(),
  priorityMonitoring: z.string(),
  confideltialityMonitoring: z.string(),
  numMonitoring: z.string(),
  dateMonitoring: z.date(),
  linkMonitoring: z.string().url()
})

export function validateMonitoring (object) {
  return monitoringSchema.safeParse(object)
}

export function validatePartialMonitoring (object) {
  return monitoringSchema.partial().safeParse(object)
}
