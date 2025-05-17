import "../assets/loginView.css";
import { NavLink, useFetcher } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Form from "../components/Form";
import Auths from "../components/authLinks";
import Copyright from "../components/copyright";
export default function Login() {

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
        <h2 style={{ marginBottom: "2rem" }}>Login</h2>
        <Form route={'login'} fetcher={fetcher}>
          <div className="loginform">
            <input
              className={`forminput usename`}
              // style={errors?.username&&{marginBottom:'-.5rem'}}
              type="text"
              placeholder="Enter your Email or Username"
              name="username"
            />

            <input
              type="password"
              name="password"
              className="forminput password"
              placeholder="Enter Password"
            />

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
