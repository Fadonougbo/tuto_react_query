import { Link, Outlet, createLazyFileRoute } from '@tanstack/react-router'

const Home=()=> {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={'/dashboard'} >Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  )

}

export const Route = createLazyFileRoute('/_home')({
  component: Home
})