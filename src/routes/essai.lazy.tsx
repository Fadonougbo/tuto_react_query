import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/essai')({
  component: () => <div>Hello /essai!</div>,
})