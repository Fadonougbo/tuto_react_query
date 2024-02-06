import React from "react"
import { NotFoundRoute, Route } from "@tanstack/react-router"
import type {RootRoute} from "@tanstack/react-router"
import { Home } from "../components/Home"
import { Show } from "../components/Show"
import { Create } from "../components/Create"
import { Update } from "../components/Update"
import { Delete } from "../components/Delete"


export const allRoutes=(rootRoute:RootRoute)=> {

        const indexRoute = new Route({ 
            getParentRoute: () => rootRoute, 
            path: '/',
            component:Home
            
        })
    
        const showRoute = new Route({ 
    
            getParentRoute: () => rootRoute, 
            path: 'show/$id',
            component:Show
        
        })
    
        const createRoute = new Route({ 
    
            getParentRoute: () => rootRoute, 
            path: '/create',
            component:Create
        })
    
        const updateRoute = new Route({ 
    
            getParentRoute: () => rootRoute, 
            path: '/update/$id',
            component:Update
        
        })
    
        const deleteRoute = new Route({ 
    
            getParentRoute: () => rootRoute, 
            path: '/delete/$id',
            component:Delete
        
        })

    return [
        indexRoute,
        showRoute,
        updateRoute,
        createRoute,
        deleteRoute
    ]

}


export const notFound=(rootRoute:RootRoute)=> {

     return new NotFoundRoute({
        getParentRoute: () => rootRoute,
        component: () => <h1>Page not found</h1>
    })
}

