import { Link,Outlet,useLoaderData, useNavigate, useNavigation } from "react-router-dom"


type DataType={
    name:string,
    age:number
}

const Waiter=new Promise((resolve,reject)=> {

    setTimeout(()=> {
        
        resolve('okok');
    },3000)

})

export const HomeLoader=async ()=> {



    return {name:'doe',age:13}
}

export const Home=()=> {

    const data=useLoaderData() as DataType


    const state=useNavigation()

    

    return <>
        <h1>Home</h1>
        <nav>
            <Link to={'/about/1'} >about</Link>
        </nav>
        <ul>
            <li> {data.name} {data.age} </li>
        </ul>
        <Outlet />
    </>
}