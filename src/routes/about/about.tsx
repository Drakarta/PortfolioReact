import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about/about")({
  // Adjusted path to match existing routes
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
