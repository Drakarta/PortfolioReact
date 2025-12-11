import { MDXProvider } from "@mdx-js/react"
import { MDComponents } from "./mdComponents"

type Props = {
  children: React.ReactNode
  mdUrl?: string
}

// MDX-ready renderer: pass compiled MDX as children (from importing .mdx files)
// and optional mdUrl for resolving relative asset links in markdown.
export default function MarkdownRenderer({ children }: Props) {
  return (
    <MDXProvider components={MDComponents()}>
      {children}
    </MDXProvider>
  )
}
