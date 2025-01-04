import React, { createContext, memo, type PropsWithChildren, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { type ToastType, useToast } from "./mytoast";

type ToastContext={
    toasts?:ToastType[],
    removeToast:(id:number)=>void,
	pushToast:(t:ToastType)=>void

}
const toastcontext=createContext<ToastContext>({
    toasts:[],
    removeToast(id) {
        
    },
	pushToast(){

	}
})

export const PushButton = () => {
	console.log("home push button");

	const { toasts,pushToast,removeToast } = useToast();

	const inputRef = useRef<HTMLInputElement>(null);

	const pRef=useRef(null)
	
	
	return (
		<>
			
			<toastcontext.Provider value={{removeToast,pushToast}}>
			<Button input={inputRef} pushToast={pushToast}/>
			<input type="text" name="test" id="" ref={inputRef} />
			<Toasts toasts={toasts} />
			</toastcontext.Provider>
		</>
	);
};

type Toasts = PropsWithChildren<{
	toasts: ToastType[];
}>;
const Toasts = ({toasts}) => {
    console.log('render Toasts');


	const toastList = toasts?.map((toast) => {
		return <Toast toast={toast}  key={toast.id} />;
	});

	return createPortal(<div id="toasts">{toastList}</div>, document.body);
};

const Toast = memo(({ toast }:{toast:ToastType}) => {
    console.log('toast---');
	const {removeToast}=useContext(toastcontext)

   /*  useEffect(()=> {
        setTimeout(()=> {
            removeToast(toast.id)
        },3000)
    },[]) */

    const handleClick=()=> {
        removeToast(toast.id)
    }

	return <section className="toast" onClick={handleClick}  >{toast.body}</section>;
});
