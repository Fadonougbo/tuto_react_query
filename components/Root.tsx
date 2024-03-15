import React from "react"
import { NavLink, Outlet, useNavigation } from "react-router-dom"


export const Root=()=> {

    const {state}=useNavigation()


    return (
        <>
            <header className="flex justify-center p-4 w-full" >
                <nav className="flex justify-center bg-fuchsia-500 p-2 rounded w-1/2 text-white" >
                    <NavLink to={'/'} className={({})=>{
                        
                        return `mx-4 text-xl hover:text-white/40 capitalize `
                    }} >
                        home {state==='loading'?<span className="animate-pulse" >loading</span>:''}
                    </NavLink>
                    <NavLink to={'/create'} className='mx-4 text-xl hover:text-white/40 capitalize' >
                        create
                    </NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}


