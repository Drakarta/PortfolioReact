import React from "react"
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

import KonamiCode from "../components/KonamiCode"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  KonamiCode(() => {
    window.location.href =
      "https://www.youtube.com/embed/v=dQw4w9WgXcQ?autoplay=1&mute=1"
  })
  return (
    <>
      <HeadContent />
      <React.Fragment>
        <TanStackRouterDevtools />
        <Outlet />
      </React.Fragment>
    </>
  )
}
