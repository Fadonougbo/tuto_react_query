import ky from "ky";
import React, { useEffect, useRef } from "react" 
import { Form, redirectDocument } from "react-router-dom";

export const Create=()=> {

/*     const inpref=useRef<HTMLElement>(null)
  useEffect(()=> {
    console.log(inpref?.current);
  }) */

    return (
        <div className="p-3 w-full" >
            <form  className="flex flex-col w-full" method="POST">
                <section className="flex flex-col items-center w-full b" >
                    <div  className="flex flex-col m-4 w-3/4" >
                        <label htmlFor="username">User name</label>
                        <input type="text"  name="username" minLength={2} id="username" className="" />
                    </div>
                    <div className="flex flex-col m-4 w-3/4" >
                        <label htmlFor="userphone">Phone number</label>
                        <input type="tel" name="userphone" minLength={1} id="userphone" className="" />
                    </div>
                    <div className="flex flex-col m-4 w-3/4" >
                        <label htmlFor="usermail">Email</label>
                        <input type="email" name="usermail" id="usermail" className="" />
                    </div>
                    <div className="w-3/4 text-2xl" >
                        <label htmlFor="active">Active?</label>
                        <input type="checkbox" name="active" value={1} id="active" className="mx-4" />
                    </div>
                </section>
                <section className="flex justify-center" >
                    <button type="submit" className="bg-green-400 p-2 rounded w-1/4 text-2xl text-white" >Add</button>
                </section>
            </form>
        </div>
    )
}


export const createAction=async ({request})=> {

    const formdata=await request.formData()

    let data=Object.fromEntries(formdata)

    if(!Object.hasOwn(data,'active')) {
      data={...data,active:'0'}  
    }

     ky.post('http://localhost:3000/data',{
        json:data,
    
    })
 
    return redirectDocument('/');

}