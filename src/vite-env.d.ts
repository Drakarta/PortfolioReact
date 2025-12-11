/// <reference types="vite/client" />

declare module "*.md" {
  const content: string
  export default content
}

declare module "*.mdx" {
  const MDXContent: (props: any) => JSX.Element
  export default MDXContent
}
