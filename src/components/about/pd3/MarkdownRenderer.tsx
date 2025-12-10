import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { makeMDComponents } from './mdComponents'

type Props = {
  md: string
  mdUrl: string
}

export default function MarkdownRenderer({ md, mdUrl }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={makeMDComponents(mdUrl)}
    >
      {md}
    </ReactMarkdown>
  )
}
