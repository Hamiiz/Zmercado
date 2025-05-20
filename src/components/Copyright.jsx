 import { FaCopyright } from "react-icons/fa"
 export default function Copyright(){
    let year =new Date().getFullYear()
    

    return(
        <>
        <p  style={{fontSize:'11px',color:'gray'}}><FaCopyright className="inline" /> Cybernova Inc. {year} </p>
        </>
    )
}