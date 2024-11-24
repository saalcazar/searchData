import z from 'zod'

const collectiveSchema = z.object({
  nameCollective: z.string({
    invalid_type_error: 'Name Collective must be a string',
    required_error: 'Name collective is required'
  }),
  originCollective: z.string({
    invalid_type_error: 'origin Collective must be a string',
    required_error: 'origin indivudual is required'
  }),
  typeCollective: z.string(),
  headquartersCollective: z.string(),
  descriptionCollective: z.string(),
  missionCollective: z.string(),
  visionCollective: z.string().url(),
  networksCollective: z.array(z.string().url()),
  infAreaCollective: z.string(),
  financingCollective: z.string(),
  personalCollective: z.record(z.string())
})

export function validateCollective (object) {
  return collectiveSchema.safeParse(object)
}

export function validatePartialCollective (object) {
  return collectiveSchema.partial().safeParse(object)
}
