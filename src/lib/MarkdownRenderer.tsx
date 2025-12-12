import { MDXProvider } from "@mdx-js/react"
import { MDComponents } from "./mdComponents"

// MDX-ready renderer: pass compiled MDX as children (from importing .mdx files)
// and optional mdUrl for resolving relative asset links in markdown.
export default function MarkdownRenderer({ children }: {children: React.ReactNode}) {
  return (
    <MDXProvider components={MDComponents()} >
      {children}
    </MDXProvider>
  )
}
