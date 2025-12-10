import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import Markdown from "react-markdown"

export const Route = createFileRoute("/about/pd/hboi-event")({
  component: RouteComponent,
})

const mdUrl = new URL(
  "../../../components/about/pd3/1-HBOI-Event.md",
  import.meta.url,
).href

function RouteComponent() {
  const {
    data: md,
    isLoading,
    error,
  } = useQuery<string, Error>({
    queryKey: ["markdown", "hboi-event"],
    queryFn: async () => {
      const res = await fetch(mdUrl)
      if (!res.ok) throw new Error("Failed to fetch markdown")
      return res.text()
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load content.</div>

  return (
    <div className="text-yellow-100">
      <Markdown
        components={{
          img: (props: any) => {
            try {
              const src = props.src || ""
              const isAbsolute =
                /^(https?:)?\/\//i.test(src) || src.startsWith("data:")
              const resolved = isAbsolute ? src : new URL(src, mdUrl).href
              return <img {...props} src={resolved} />
            } catch (e) {
              return <img {...props} />
            }
          },
        }}
      >
        {md}
      </Markdown>
    </div>
  )
}
