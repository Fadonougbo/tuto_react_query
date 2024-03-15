import React from "react"
import {useRouteError } from "react-router-dom"

export const NotFound=()=> {

    const error=useRouteError()

    console.log(error);

    return <h1>404</h1>
}