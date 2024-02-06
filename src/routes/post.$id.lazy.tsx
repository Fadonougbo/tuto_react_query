import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/post/$id')({
  component: () => <div>Hello /post/$id!</div>
})