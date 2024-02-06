
import React from "react" 
import { Link } from "@tanstack/react-router"

export const Show=()=> {

    return (
        <h1>Show 
            <Link to={'/'}>Home</Link> 
            <Link to={'/update/$id'} params={{id:'3'}}  search={{query:'ok'}} >About</Link>  
        </h1>
    )
}