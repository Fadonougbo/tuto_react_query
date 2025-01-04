import { useCallback, useState } from "react"

export type ToastType={
    body:string|undefined,
    id:number
}

export const useToast=( {duration=2000}:{duration?:number}={} )=> {

    const [toasts,setToast]=useState<ToastType[]>([])

     /* const removeToast= (id:number)=> {
       const newToastList=toasts.filter((toast)=>toast.id!==id) 
        setToast((old)=>{
            return old.filter((toast)=>toast.id!==id)
        })

        } */


    /* const myf=useCallback((id:number)=> {

        setTimeout(()=> {
            removeToast(id)
            setToast( (toasts)=>([...toasts,{body:"test",id:Date.now()*Math.random()}]) )
        },2000)
    },[toasts]) */

    const pushToast=useCallback((toast:ToastType)=>{

        setToast( (toasts)=>([toast,...toasts]) )

        setTimeout(()=> {
            removeToast(toast.id)
        },6000) 

    },[toasts])
 
    const removeToast= (id:number)=> {
        /*  const newToastList=toasts.filter((toast)=>toast.id!==id) */
         setToast((old)=>{
             return old.filter((toast)=>toast.id!==id)
         })
 
     }

  
    return {toasts,pushToast,removeToast}
}