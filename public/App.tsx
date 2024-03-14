import React from "react"
import { createRoot } from "react-dom/client"
import {createBrowserRouter,Link,Outlet,RouterProvider} from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { rootAction, rootLoader, Root } from "../components/Root";
import { Info, infoAction, infoLoader } from "../components/Info";

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Root/>,
      errorElement:<NotFound/>,
      loader:rootLoader,
      action:rootAction,
      children:[
        {
            path:'info',
            element:<Info/>,
            action:infoAction,
            loader:infoLoader

        }
      ]
    },
    {
        path:'/user/:id',
        element:<div>User page </div>
    }
  ]);

createRoot(document.querySelector('#root') as HTMLDivElement).render(<RouterProvider router={router} />)

