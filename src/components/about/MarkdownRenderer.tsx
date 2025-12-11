import ReactMarkdown from "react-markdown"
// import remarkGfm from "remark-gfm"
// import { makeMDComponents } from "./mdComponents"

export default function MarkdownRenderer({ md  }: { md: string }) {
  return (
    <ReactMarkdown
      // remarkPlugins={[remarkGfm]}
      // components={makeMDComponents(mdUrl)}
    >
      {md}
    </ReactMarkdown>
  )
}
