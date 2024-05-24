import { Form, useActionData, useParams } from "react-router-dom"

const Waiter=new Promise((resolve,reject)=> {

    setTimeout(()=> {
        
        resolve('okok');
    },3000)

})

export const AboutLoader=(x)=> {

    const s=new URL(x.request.url)
    console.log(s.searchParams.get('name'));
    return ['gaut']
}

export const AboutAction=async (x)=> {

    //await Waiter
    
    

    const d=await x.request.formData()

    console.log(d);

    //console.log(Object.fromEntries(d));

    //console.log('action');

    return ['gaut']
}

export const About=()=> {



    return (
        <>
            <h1>About</h1>
            <Form  method="GET" >
                <input type="text" name="name" id="" />
                <button type="submit" >send name</button>
            </Form>

        </>
    )
}