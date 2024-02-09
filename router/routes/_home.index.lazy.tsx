import { createLazyFileRoute } from '@tanstack/react-router'

const HomeContent=()=> {

  return (
    <h1>essai</h1>
  )

}

export const Route = createLazyFileRoute('/_home/')({
  component: HomeContent
})