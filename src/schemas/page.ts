import { z } from 'zod'

export const PageSchema = z.object({
  internalTitle: z.string(),
  pageTitle: z.string(),
  slug: z.string(),
  bodyContent: z.any(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
})

export type Page = z.infer<typeof PageSchema>
