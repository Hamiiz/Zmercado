import { SunIcon,MoonIcon } from "lucide-react"
import { useEffect,useState } from "react"

export default function ThemeToggle(){
    let [ theme,setTheme ]= useState('light')
    
    let storedTheme = localStorage.getItem('theme')
    useEffect(()=>{
        storedTheme =='light'?
        document.documentElement.classList.remove('dark'):
        document.documentElement.classList.add('dark');

        
    },[storedTheme])
    const handleTheme = ()=>{
        if (theme == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        localStorage.setItem('theme', theme)
        
    }

    return(
        <div
        onClick={handleTheme}
        className="toggler border-lg px-2 py-1 rounded-lg bg-background shadow-lg hover:bg-foreground hover:text-background transition delay-150 duration-300 ease-in-out w-max sticky bottom-[2rem] float-right mr-[1rem]">

           {storedTheme=='dark'? <SunIcon className="pointer-events-none"/>: <MoonIcon className="pointer-events-none"/>}
        </div>
    )
}