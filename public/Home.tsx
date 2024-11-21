import { motion } from "motion/react"
import React, {
	lazy,
	Suspense,
	useEffect,
	useState,
} from "react";

const variant={
  n1:{opacity:1},
  n2:{opacity:0}
}

const Home = ({ children }) => {
	console.log("home render");

	const Data = lazy(() => import("./Data"));

  const [toggle,setToggle]=useState(false)

  const handleClick=()=> {
    setToggle((value)=>!value)
  }

	return (
		<div>
      
			<h1>Home</h1>
      <motion.span variants={variant} animate={toggle?'n1':'n2'}>
        HELLOOOO!
      </motion.span>	
      <br />	
    
    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
    <button onClick={handleClick} >click me</button>
		</div>
	);
};

export default Home;

/* type X=keyof JSX.IntrinsicElements;

type  u={
  name:string,
  age:number
}
const y:u[keyof u]=""; */

/* type CompoType = {
	As:HTML;
  children:never
};
 */


const Compo = ({ As = "input",children, ...props }:{As:any,children?:any}) => {
  
	// biome-ignore lint/style/useSelfClosingElements: <explanation>
  	return <As {...props} />; 
};

export const User = () => {
	console.log("User render");

	useEffect(() => {}, []);

	return <h1>User </h1>;
};
