import { createLazyFileRoute } from '@tanstack/react-router'

import MainSection from '../components/MainSection'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <MainSection />
    </>
  )
}
