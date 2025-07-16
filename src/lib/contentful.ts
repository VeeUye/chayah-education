import { createClient } from 'contentful'
import type { Entry } from 'contentful'
import type { Page } from '../schemas/page'

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
