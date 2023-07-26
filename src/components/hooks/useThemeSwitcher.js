import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefers-color-scheme: dark)"
    const [mode, setMode] = useState("")

    useEffect(() => {

        const preferDarkQuery = "(prefers-color-scheme: dark)"
      
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme")
        // const userPref = "dark"
        // const userPref = "light"
        
        let check
         

        const handleChange = () => {
            if(userPref){
                check = userPref === "dark" ? "dark" : "light"
                setMode(check)
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }else{
                check = mediaQuery.matches ? "dark" : "light"
                setMode(check)
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange()

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
        

    }, [])
    
    useEffect(() => {
        if(mode === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } 

        if(mode === "light") {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [mode])
    

  return [mode, setMode]

}
// window.localStorage.setItem('theme', newMode)
export default useThemeSwitcher