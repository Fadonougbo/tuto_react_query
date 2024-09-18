import React, { memo, useContext, useEffect, useRef, useState } from "react"
import { ThemeContext, ThemeController } from "./context";


  const Home=({children})=> {
    //console.log([].includes(''));
    const [count,setCount]=useState(0)

    const userRef=useRef(null);

    const countRef=useRef(count)

    countRef.current=count

    const handleClick=()=> {
        setCount((c)=>c+1)
      
        //throw new Error('test error')
    }

    console.log('render','home');



    return <div>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <h1 onClick={handleClick} >home {count} </h1>
          <User/>
        </div>
}

export default Home
 
export  const User=memo(()=> {
  console.log('render','user');

  const theme=useContext(ThemeContext)

    return <><h1  >User {theme} </h1></>
})