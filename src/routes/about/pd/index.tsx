import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/pd/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/pd"!</div>
}
