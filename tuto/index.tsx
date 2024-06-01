/* import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {createRoot} from "react-dom/client"
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import { About, AboutAction, AboutLoader } from "./About"
import { ErrorPage } from "./Error"
import { Home, HomeLoader } from "./Home"

import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const client=new QueryClient()

const router=createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
            loader:HomeLoader,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:'/about/:id',
                    element:<About />,
                    action:AboutAction,
                    loader:AboutLoader
                }
            ]
            
        }
])

const root=createRoot(document.querySelector("#root") as HTMLDivElement).render(

    <QueryClientProvider client={client} >
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
    
) */

window.addEventListener('online',()=>console.log('online'))

window.addEventListener('offline',()=>{
    console.log('offline')
})



/* const button=document.querySelector('button')
const abord=new AbortController()



button?.addEventListener('click',()=> {
    abord.abort("J'ai coupé le abord")
})

const intervale=setInterval(()=> {

    fetch('../db.json',{signal:abord.signal})
    .then((res)=>res.json())
    .then(data=>console.log(data))
    .catch((err)=> {
        console.log(err);
    })

    if(abord.signal.aborted) {
        clearInterval(intervale)
    }

},4000) */






