import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import MarkdownRenderer from "@/components/about/MarkdownRenderer"
import Layout from "@/components/about/PDLayout"

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

const mdUrl = new URL(
  "../../../assets/pd3/4-LinkedIn_&_CV.md",
  import.meta.url,
).href

function RouteComponent() {
  const {
    data: md,
    isLoading,
    error,
  } = useQuery<string, Error>({
    queryKey: ["markdown", "linkedin-en-cv"],
    queryFn: async () => {
      const res = await fetch(mdUrl)
      if (!res.ok) throw new Error("Failed to fetch markdown")
      return res.text()
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load content.</div>

  return (
    <Layout>
      <MarkdownRenderer md={md ?? ""} mdUrl={mdUrl} />
    </Layout>
  )
}
