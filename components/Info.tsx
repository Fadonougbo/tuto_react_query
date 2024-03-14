import React from "react"
import { redirect } from "react-router-dom";

const lock=new Promise((res,rej)=> {

    setTimeout(()=> {
        res('okok')
    },5000)

})

export const Info=()=> {


    return (
        <>
            {/* <Form  method="POST">
                <input type="number" name="number"  />
                <button>send number</button>
            </Form> */}
            <h1>page home/info</h1>
        </>
    )
}

export  const   infoAction= async ()=> {
    //const x= await lock
    console.log('okokA');

    //return redirect('/home');

    return {seache:'essai search'}
    
}

export const infoLoader=async ()=> {

    //const x= await lock

    console.log('loader info'); 

    return 'infoloader'
} 