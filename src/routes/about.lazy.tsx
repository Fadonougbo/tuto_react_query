import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About
})

function About() {

  console.log('okok')
  
  return <div className="p-2">Hello from About!</div>
}