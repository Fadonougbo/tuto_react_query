import { useRouteError } from "react-router-dom"


export const ErrorPage=()=> {

    const err=useRouteError()

    console.log(err);

    return <h1> Error {err.statusText} // {err.status} </h1>
}