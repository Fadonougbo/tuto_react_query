import ky from "ky"
import React from "react" 
import { Form, redirectDocument, useLoaderData } from "react-router-dom"
import { DataType } from "./Home"

export const Update=()=> {

    const {active,usermail,username,userphone}=useLoaderData() as DataType

    return (
        <div className="p-3 w-full" >
            <h1 className="text-4xl text-center" >Update Data</h1>
            <Form  className="flex flex-col w-full" method="POST">
                <section className="flex flex-col items-center w-full b" >
                    <div className="flex flex-col m-4 w-3/4" >
                        <label htmlFor="username">User name</label>
                        <input type="text" name="username" minLength={2} id="username" defaultValue={username} />
                    </div>
                    <div className="flex flex-col m-4 w-3/4" >
                        <label htmlFor="userphone">Phone number</label>
                        <input type="tel" name="userphone" minLength={1} id="userphone" defaultValue={userphone} />
                    </div>
                    <div className="flex flex-col m-4 w-3/4" >
                        <label htmlFor="usermail">Email</label>
                        <input type="email" name="usermail" id="usermail" defaultValue={usermail} />
                    </div>
                    <div className="w-3/4 text-2xl" >
                        <label htmlFor="active">Active?</label>
                        <input type="checkbox" name="active" value={1} id="active" defaultChecked={active==='1'} className="mx-4" />
                    </div>
                </section>
                <section className="flex justify-center" >
                    <button type="submit" className="bg-green-400 p-2 rounded w-1/4 text-2xl text-white" >update</button>
                </section>
            </Form>
        </div>
    )
}

export const updateAction=async ({request,params})=> {

    const formdata=await request.formData()

    let data=Object.fromEntries(formdata)

    if(!Object.hasOwn(data,'active')) {
      data={...data,active:'0'}  
    }

     ky.put(`http://localhost:3000/data/${params.id}`,{
        json:data,
    })
 
    return redirectDocument('/');

}

export const updateLoader=async ({request,params})=> {

    
    const [data]=await ky.get(`http://localhost:3000/data?id=${params.id}`).json<DataType[]>()


    return data

}