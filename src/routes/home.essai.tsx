import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/essai')({
  component: () => <div>Hello <Outlet/>  /home/essai!</div>
})