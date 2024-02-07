import { createRootRoute, Link, MatchRoute, notFound, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="">
          home
        </Link>{' '}
        <Link to="/about" preload='intent' preloadDelay={2000} className="">
          about
        
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})