import '../assets/loginView.css'
import Form from "../components/Form"
import Auths from '../components/authLinks'
import Copyright from '../components/copyright'
import { LogOrSign } from './loginView'
export default function SignUp(){
    return(
        <section className="login-container">
            <div className="login">
                <h2 style={{marginBottom:'2rem'}}>Sign Up</h2>
                <Form isLogin={false}/>
                <Copyright/>
            </div>
            <div className="sidebar">
                <div className="overlayer">

                <div>
                    <Auths/>
                </div>
                <div className='log2sign'>
                 <LogOrSign>Login</LogOrSign>

                </div>
                </div>
                
            </div>
        </section>
    )
}



