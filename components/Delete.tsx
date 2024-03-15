import ky from "ky";
import { redirectDocument } from "react-router-dom";


export const deleteAction=async ({params})=>{
    
    ky.delete(`http://localhost:3000/data/${params.id}`)
 
    return redirectDocument('/');
}

