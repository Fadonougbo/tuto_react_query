import { createContext, useState } from "react";
import React from "react";

export const ThemeContext=createContext('light')

export const ThemeController=({children})=> {

    const [theme,setTheme]=useState('dark')

    const handleClick=()=> {
        setTheme((s)=>s==='light'?'dark':'light')
    }

    return <ThemeContext.Provider value={theme}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button onClick={handleClick} >change theme</button>
                {children}
            </ThemeContext.Provider>
}