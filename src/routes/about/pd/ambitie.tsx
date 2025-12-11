import { createFileRoute } from "@tanstack/react-router"
import MarkdownRenderer from "@/components/about/MarkdownRenderer"
import Layout from "@/components/about/PDLayout"
import MD from "../../../assets/pd3/3-Ambitie.mdx"

export const Route = createFileRoute("/about/pd/ambitie")({
  head: () => ({
    meta: [
      {
        title: "🐜🍯 | PD - Ambitie",
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
