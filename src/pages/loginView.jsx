import '../assets/loginView.css'
import { NavLink } from 'react-router-dom'
import Form from "../components/Form"
import Auths from '../components/authLinks'
import Copyright from '../components/copyright'
export default function Login(){
    // let bodyStyle ={
    //     height: '100vh',
    //     display: 'grid',
    //     placeItems: 'center',
    // }
    return(
        <section className="login-container">
            <div className="login">
                <h2 style={{marginBottom:'2rem'}}>Login</h2>
                <Form isLogin={true}/>
                <Copyright/>
            </div>
            <div className="sidebar">
                <div className="overlayer">

                <div>
                    <Auths/>
                </div>
                <div className='log2sign'>
                 <LogOrSign>Signup</LogOrSign>

                </div>
                </div>
                
            </div>
        </section>
    )
}

export function LogOrSign({children}){


    return (
        <>
        <NavLink style={{
            color:'mediumseagreen'
            ,textDecoration:'none'
        }} to={`/${children}`}>

            <p>{children}</p>
        </NavLink>
        </>
    )

}

