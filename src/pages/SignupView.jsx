import "../assets/loginView.css";
import Form from "../components/Form";
import Auths from "../components/authLinks";
import Copyright from "../components/copyright";
import { LogOrSign } from "./loginView";
import { useFetcher, } from "react-router-dom";
import { useEffect, } from "react";
import { ToastContainer,toast } from "react-toastify";



export default function SignUp() {

  // const [username, setUsername] = useState('')
  // const [email,setEmail]= useState('')
  // const [password, setPassword] = useState('')
  
 


  let fetcher = useFetcher() 




  useEffect(() => {
    if (fetcher.data?.errors) {
      const errorMsg = fetcher.data.errors.message;
      if (!toast.isActive(errorMsg)) {
        toast.error(errorMsg, { toastId: errorMsg });
      }
    }
  }, [fetcher.data]);
  




  return (
    <section className="login-container">
      <div className="login">
        <h2 style={{ marginBottom: "2rem" }}>Sign Up</h2>

        <Form route={"signup"} fetcher={fetcher}>
          <div className="signupform">

            <input
              // onInput= {(e)=>{setEmail(e.target.value)}}
              className={`forminput email `}
              type="email"
              placeholder="Enter your Email"
              name="email"
              required
            />
            <input
              // onInput={(e)=>setUsername(e.target.value)}
              // style={{marginBottom:errors?.username||usernameStatus=='taken'?-0.5+'rem':''}}
              className={`forminput usename`}
              type="text"
              placeholder="Enter your Username"
              name="username"
              required
            />

            <input
              // onInput={(e)=>setPassword(e.target.value)}
              type="password"
              name="password"
              className={`forminput password `}
              placeholder="Enter Password"
              required
            />

            <input
              type="password"
              name="cpassword"
              // style={{marginBottom:errors?.password?-0.5+'rem':0}}

              className={`forminput cpassword `}
              placeholder="Confirm Password"
              required
            />
            {/* {errors?.password&&<p style={{margin:0,color:'red',marginRight:'auto'}}>{errors?.password}</p>} */}

          </div>
        </Form>

        <Copyright />

        
      </div>
      <div className="sidebar">
        <div className="overlayer">
          <div>
            <Auths />
          </div>
          <div className="log2sign">
            <LogOrSign>Login</LogOrSign>
          </div>
        </div>
      </div>
      
    </section>
  );
}
