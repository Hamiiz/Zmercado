import "../assets/loginView.css";
import {  useEffect } from "react";
import { NavLink, useFetcher } from "react-router-dom";
import Form from "../components/Form";
import Auths from "../components/authLinks";
import Copyright from "../components/copyright";
export default function Login() {

  let fetcher = useFetcher() 
  let errors = fetcher.data?.errors 


  useEffect(()=>{

      if(fetcher.data == undefined){
          ''
      }
      else if(fetcher.data.isLogged) {
          console.info('successful signup')
      }

  },[fetcher.data])

  return (
    <section className="login-container">
      <div className="login">
        <h2 style={{ marginBottom: "2rem" }}>Login</h2>
        <Form route={'login'} fetcher={fetcher}>
          <div className="loginform">
            <input
              className={`forminput usename`}
              style={errors?.username&&{marginBottom:'-.5rem'}}
              type="text"
              placeholder="Enter your Email or Username"
              name="username"
            />
            {errors?.username && <p style={{color:'red',margin:'0',marginRight:'auto'}} >{errors.username}</p>}

            <input
              type="password"
              style={errors?.username&&{marginBottom:'-.5rem'}}
              name="password"
              className="forminput password"
              placeholder="Enter Password"
            />
            {errors?.password && <p style={{color:'red',margin:'0',marginRight:'auto'}} >{errors.password}</p>}

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
            <LogOrSign>Signup</LogOrSign>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogOrSign({ children }) {
  return (
    <>
      <NavLink
        style={{
          color: "mediumseagreen",
          textDecoration: "none",
        }}
        to={`/auth/${children}`}
      >
        <p>{children}</p>
      </NavLink>
    </>
  );
}
