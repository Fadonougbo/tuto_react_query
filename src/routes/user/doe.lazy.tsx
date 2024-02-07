import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/user/doe')({
  component: () => <div>Hello /user/doe!</div>
})