import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/pd/$pdId')({
  loader: async ({ params }) => { 
    return params.pdId
  },
  component: RouteComponent,
})

function RouteComponent() {
  const pdId = Route.useParams()
  return <div>Hello "/about/pd/$pd"!</div>
}
