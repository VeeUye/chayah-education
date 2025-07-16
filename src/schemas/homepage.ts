import { z } from 'zod'

export const HomepageSchema = z.object({
  internalTitle: z.string(),
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  heroCtaButton: z.string(),
  heroCtaButtonLink: z.string(),
  introductoryContent: z.any(),
  seoTitle: z.string(),
  seoDescription: z.string(),
})

export type Homepage = z.infer<typeof HomepageSchema>
