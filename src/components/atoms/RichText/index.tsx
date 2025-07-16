import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { Document } from '@contentful/rich-text-types'

interface RichTextProps {
  content: Document
}

const RichText = ({ content }: RichTextProps) => {
  if (!content) {
    return null
  }
  return <>{documentToReactComponents(content)}</>
}

export default RichText
