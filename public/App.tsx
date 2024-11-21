import React, { lazy, Suspense } from "react"
import {createRoot} from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import Home, { User } from "./Home"

const App=()=> {
 
    return <Home></Home>
}

createRoot(document.querySelector('#root') as HTMLDivElement).render(<App/>)