import {createRoot} from "react-dom/client"
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import { About, AboutAction, AboutLoader } from "./About"
import { ErrorPage } from "./Error"
import { Home, HomeLoader } from "./Home"

const router=createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
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
    <RouterProvider router={router} />
)