import React from "react"
import {createRoot} from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { allRoutes, notFound } from "../functions/routes.tsx";
import { Home } from "../components/Home.tsx";
import { TestComponent } from "../components/TestComponent.tsx";

import {routeTree} from '../src/routeTree.gen.ts'
import { RouterProvider, createRouter } from "@tanstack/react-router";


const App=()=> {

    const query=new QueryClient()
  
    return (
        <QueryClientProvider client={query} >
            
        </QueryClientProvider>
        
    )
}

/* const rootRoute=new RootRoute({
    component:App
})

const routes=allRoutes(rootRoute)
const errRoute=notFound(rootRoute)

const routeTree = rootRoute.addChildren(routes)



const x=new Route({
    getParentRoute:()=>,
    path:'/essai',
    component:Home
})

const router = new Router({ routeTree,notFoundRoute:errRoute }) */



// Create a new router instance
const router = createRouter({ routeTree })

createRoot(document.querySelector('#root') as HTMLDivElement).render(<RouterProvider router={router} />)

