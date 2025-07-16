import { z } from 'zod'

const AssetSchema = z.object({
  fields: z.object({
    file: z.object({
      url: z.string(),
      fileName: z.string(),
      contentType: z.string(),
    }),
  }),
})

export const PolicyDocumentSchema = z.object({
  internalTitle: z.string(),
  documentTitle: z.string(),
  policyFile: AssetSchema,
})

export type PolicyDocument = z.infer<typeof PolicyDocumentSchema>
