import { createFileRoute } from "@tanstack/react-router"
import MarkdownRenderer from "@/components/about/MarkdownRenderer"
import Layout from "@/components/about/PDLayout"
import MD from "../../../assets/pd3/4-LinkedIn_&_CV.mdx"

export const Route = createFileRoute("/about/pd/linkedin-en-cv")({
  head: () => ({
    meta: [
      {
        title: "🐜🍯 | PD - LinkedIn & CV",
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout>
      <MarkdownRenderer>
        <MD />
      </MarkdownRenderer>
    </Layout>
  )
}