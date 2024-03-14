import React from "react"
import { Form, Link, NavLink, Outlet, useActionData, useFetcher, useLoaderData, useNavigate, useNavigation, useSubmit } from "react-router-dom"


export const Root=()=> {

    const x=useLoaderData()

    const {state} = useNavigation();

    const actionData=useActionData()

    console.log(actionData,'act');

    const x2=useNavigation()

    //const navigate=useNavigate()

    const submit=useSubmit()

    const fetcher=useFetcher()

   console.log(fetcher.state);
  
   /*  const change=(e)=> {
        console.log(e.currentTarget.form);
        submit(e.currentTarget.form)
    } */



    return (
        <>
            <Form method="POST">
                <input type="search" name="search" />
                <button>search {state==='submitting'?'submitting':''} </button>
            </Form>

            <Form  method="GET" role="search">
                <input type="number" name="number"  />
                <button>send number</button>
            </Form>

         {/*  <fetcher.Form> */}
            <p>okok {actionData?.test} </p>
          {/* </fetcher.Form> */}
            

            <div>
                Hello world! 
                <Outlet/>
                <a href="/user/2">go to user page1</a> <br />
                <Link to="/user/2">go to user page2</Link> <br />

                <NavLink to={'/home/info'} className={({isActive,isPending,isTransitioning})=>{
                   //console.log(isActive,isPending,isTransitioning);
                   return ''
                }} >go to home info  {state==='loading'?'loading...':''} </NavLink>

            </div>
        </>
    )
}

export async function rootAction(e) {
    const data=await e.request.formData()
    const value = Object.fromEntries(data);
  //console.log('get');
    return { test:Date.now() };
  }

export async function rootLoader({request}) {

    const url = new URL(request.url);
    const number = url.searchParams.get("number");

    //console.log(number);
    return [{name:'doe'},{name:'john'},{name:'gaut'}];
  }