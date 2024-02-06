import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__layout')({
  component: () => <div>Hello /__layout!</div>
})