import React, { FormEvent } from "react" 

export const Create=()=> {

    const submit=(e:FormEvent)=> {
        e.preventDefault();
        console.log('okok');
        
    }

    return (
        <div className="p-3" >
            <form  className="w-full flex flex-col " onSubmit={submit}>
                <section className="w-full flex flex-col  items-center border-solid border-2 border-green-900" >
                    <div className="flex flex-col m-4  border-solid border-2 w-3/4  border-blue-600" >
                        <label htmlFor="username">User name</label>
                        <input type="text" name="username" id="username" className="" />
                    </div>
                    <div className="flex flex-col m-4 border-solid border-2 w-3/4  border-blue-600" >
                        <label htmlFor="userphone">Phone number</label>
                        <input type="tel" name="userphone" id="userphone" className="" />
                    </div>
                    <div className="flex flex-col m-4 border-solid border-2 w-3/4  border-blue-600" >
                        <label htmlFor="usermail">Email</label>
                        <input type="email" name="usermail" id="usermail" className="" />
                    </div>
                    <div className="w-3/4 text-2xl text-blue-800" >
                        <label htmlFor="active">Active?</label>
                        <input type="checkbox" name="active" id="active" className="" />
                    </div>
                </section>
                <section className=" flex justify-center" >
                    <button type="submit" className="p-2 bg-green-400 w-1/4 text-white" >Add</button>
                </section>
            </form>
        </div>
    )
}