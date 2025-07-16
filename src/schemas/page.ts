import { z } from 'zod'

export const PageSchema = z.object({
  internalTitle: z.string(),
  pageTitle: z.string(),
  slug: z.string(),
  bodyContent: z.any(),
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
})

export type Page = z.infer<typeof PageSchema>
