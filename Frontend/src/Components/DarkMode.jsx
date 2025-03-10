import React, { useEffect, useState } from 'react'
import LightButton from "../assets/light.png"
import DarkButon from "../assets/dark.png"
export const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("item") : "light"
    );

const element = document.documentElement;
// console.log(element);

useEffect(()=>{
    if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else{
        element.classList.remove("dark");
        localStorage.setItem("theme","light")
    }
},[theme,])

  return (
    <div className="relative top">
        <img  src={LightButton} alt="" 
        onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12
        cursor-pointer drop-shadow transition-all duration-300
         absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}` }/>
        <img src={DarkButon} alt="" 
         onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className="w-12" />
    </div>
  )
}
