import React from "react"
import {createRoot} from "react-dom/client"
import Home from "./Home"


const App=()=> {
 
    return <Home/>
}

createRoot(document.querySelector('#root') as HTMLDivElement).render(<App/>)