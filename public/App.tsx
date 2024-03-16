import React from "react"
import { createRoot } from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Root } from "../components/Root";
import { Create, createAction } from "../components/Create";
import { Home, homeLoader } from "../components/Home";
import { Update, updateAction, updateLoader } from "../components/Update";
import { deleteAction } from "../components/Delete";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client=new QueryClient()
  const router = createBrowserRouter([
    {
       path:'/',
       element:<QueryClientProvider client={client} ><Root/></QueryClientProvider>,
       children:[
        {
          index:true,
          element:<Home/>,
          loader:homeLoader
        },
        {
          path:'create',
          element:<Create/>,
          action:createAction
        },
        {
          path:'update/:id',
          element:<Update/>,
          loader:updateLoader,
          action:updateAction
        },
        {
          path:'delete/:id',
          action:deleteAction
        }
       ]
    }
  ]);

  

createRoot(document.querySelector('#root') as HTMLDivElement).render(

  
    <RouterProvider router={router} />
  
  
  )

