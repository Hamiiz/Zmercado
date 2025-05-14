import "../assets/loginView.css";
import Form from "../components/Form";
import Auths from "../components/authLinks";
import Copyright from "../components/copyright";
import { LogOrSign } from "./loginView";
import { useFetcher, } from "react-router-dom";
import { useEffect,useState,useRef } from "react";



export default function SignUp() {

  const [username, setUsername] = useState('')
  // const [email,setEmail]= useState('')
  // const [password, setPassword] = useState('')
  
  const initRender = useRef(true)
  const [usernameStatus,setUsernameStatus]= useState(null)
  const debounceTimeout= useRef(null)


  let fetcher = useFetcher() 
  let errors = fetcher.data?.errors 



 useEffect(()=>{
      if (initRender.current){
          initRender.current = false;
              return;
          }

      username.length==0?setUsernameStatus(null):'';
      setUsernameStatus(null)
      if (username.length < 4){ return }

      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      const newTimeout = setTimeout(() => {
          console.log("Searching for username:", username);
          // Call your API or database search function here
          if (username == 'hamiiz'){
              setUsernameStatus('taken')
          }else{
              setUsernameStatus('possible')
          }
      }, 3500);

      debounceTimeout.current = (newTimeout);

  },[username])





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
              onInput={(e)=>setUsername(e.target.value)}
              style={{marginBottom:errors?.username||usernameStatus=='taken'?-0.5+'rem':''}}
              className={`forminput usename`}
              type="text"
              placeholder="Enter your Username"
              name="username"
              required
            />
            {errors?.username&&<p style={{margin:0,color:'red',marginRight:'auto'}}>{errors?.username}</p>}
            {usernameStatus=='taken'&&<p style={{margin:0,color:'red',marginRight:'auto'}}>{username} is taken!</p>}

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
              style={{marginBottom:errors?.password?-0.5+'rem':0}}

              className={`forminput cpassword `}
              placeholder="Confirm Password"
              required
            />
            {errors?.password&&<p style={{margin:0,color:'red',marginRight:'auto'}}>{errors?.password}</p>}

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
