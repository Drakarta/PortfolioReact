import { createFileRoute } from "@tanstack/react-router"
import MarkdownRenderer from "@/lib/MarkdownRenderer"
import Layout from "@/components/about/PDLayout"
import MD from "../../../assets/pd3/1-HBO-I_Event.mdx"

export const Route = createFileRoute("/about/pd/hboi-event")({
  head: () => ({
    meta: [
      {
        title: "🐜🍯 | PD - HBO-I Event",
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