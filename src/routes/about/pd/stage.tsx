import { createFileRoute } from "@tanstack/react-router"
import MarkdownRenderer from "@/components/about/MarkdownRenderer"
import Layout from "@/components/about/PDLayout"
import MD from "../../../assets/pd3/2-Stage.mdx"

export const Route = createFileRoute("/about/pd/stage")({
  head: () => ({
    meta: [
      {
        title: "🐜🍯 | PD - Stage",
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