import React from "react"
import { createRoot } from "react-dom/client"
import { routeTree } from '../router/routeTree.gen.ts'
import { RouterProvider, createRouter } from "@tanstack/react-router";


// Create a new router instance
const router = createRouter({ routeTree })

createRoot(document.querySelector('#root') as HTMLDivElement).render(<RouterProvider router={router} />)

