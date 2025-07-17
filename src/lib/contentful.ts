import { createClient } from 'contentful'
import type { Entry } from 'contentful'
import type { Page } from '../schemas/page'

// 1. Client Setup
const spaceId = import.meta.env.CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful space ID and access token must be defined in .env'
  )
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})

// 2.Transform the raw data
function toPage(entry: Entry<any>): Page {
  return {
    internalTitle: String(entry.fields.internalTitle || ''),
    pageTitle: String(entry.fields.pageTitle || ''),
    slug: String(entry.fields.slug || ''),
    bodyContent: entry.fields.bodyContent || null,
    seoTitle: String(entry.fields.seoTitle || ''),
    seoDescription: String(entry.fields.seoDescription || ''),
  }
}

// 3. Fetch a single page by its slug
export async function getPageBySlug(slug: string): Promise<Page | null> {
  const response = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  })

  const item = response.items?.[0]

  if (!item) {
    return null
  }

  return toPage(item as Entry<any>)
}

// 4. Fetch all page slugs for static site generation
export async function getAllPageSlugs(): Promise<{ slug: string }[]> {
  const response = await client.getEntries({
    content_type: 'page',
    select: ['fields.slug'],
  })

  return (
    response.items?.map((item) => ({ slug: String(item.fields.slug || '') })) ||
    []
  )
}
