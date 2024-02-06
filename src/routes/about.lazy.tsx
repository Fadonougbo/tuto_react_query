import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: () => <div>Hello /about!</div>
})

function About() {
  return <div className="p-2">Hello from About!</div>
}