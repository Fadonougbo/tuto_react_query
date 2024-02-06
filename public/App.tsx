import React from "react"
import {createRoot} from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools";
import {Outlet, RootRoute,Router,RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { allRoutes, notFound } from "../functions/routes.tsx";


const App=()=> {

    const query=new QueryClient()
  
    return (
        <QueryClientProvider client={query} >
            <Outlet/>
            {/* <ReactQueryDevtools  /> */}
            <TanStackRouterDevtools />
        </QueryClientProvider>
        
    )
}

const rootRoute=new RootRoute({
    component:App
})

const routes=allRoutes(rootRoute)
const errRoute=notFound(rootRoute)

const routeTree = rootRoute.addChildren(routes)
console.log(routeTree.fullPath);
const router = new Router({ routeTree,notFoundRoute:errRoute })

createRoot(document.querySelector('#root') as HTMLDivElement).render(<RouterProvider router={router} />)

