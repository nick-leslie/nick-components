import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/whatsup/_layout')({
  component: () => <div>
      Hello /test/layout
      <Outlet/>
  </div>
})