import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import KonamiCode from '../components/KonamiCode'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  KonamiCode()
  return (
    <React.Fragment>
      <TanStackRouterDevtools />
      <Outlet />
    </React.Fragment>
  )
}
