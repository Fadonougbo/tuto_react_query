import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from "react"
import { createRoot } from "react-dom/client"
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import { Create, createAction } from "../components/Create";
import { deleteAction } from "../components/Delete";
import { Home, homeLoader } from "../components/Home";
import { NotFound } from "../components/NotFound";
import { Root } from "../components/Root";
import { Update, updateAction, updateLoader } from "../components/Update";

const client=new QueryClient()

  const router = createBrowserRouter([
    {
       path:'/',
       element:<QueryClientProvider client={client} >
                  <Root/>
                  <ReactQueryDevtools initialIsOpen={false} />
               </QueryClientProvider>,
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

