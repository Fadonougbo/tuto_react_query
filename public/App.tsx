import React, { lazy, Suspense } from "react"
import {createRoot} from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import Home, { User } from "./Home"
import { ThemeController } from "./context"

const App=()=> {
 
    return <Home>
            <ThemeController>
                <User />
                <User />
            </ThemeController>
                
            </Home>
}

createRoot(document.querySelector('#root') as HTMLDivElement).render(<App/>)