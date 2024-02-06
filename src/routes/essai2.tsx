import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/essai2')({
  component: () => <div>Hello /essai2!</div>
})