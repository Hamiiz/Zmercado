import "../assets/loginView.css";
import { NavLink, useFetcher } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Form from "../components/Form";
import Auths from "../components/authLinks";
import Copyright from "../components/Copyright";

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
    <section className="login-container ">
      <div className="login dark:bg-card">
        <h2
        className="text-2xl md:text-3xl font-bold mt-3"
         style={{ marginBottom: "2rem" }}>Login</h2>
        <Form route={'login'} fetcher={fetcher}>
          <div className="loginform">
            <input
              className={`forminput usename required`}
              // style={errors?.username&&{marginBottom:'-.5rem'}}
              type="text"
              placeholder="Enter your Email or Username"
              name="username"
              required
            />

            <input
              type="password"
              name="password"
              className="forminput password required"
              placeholder="Enter Password"
              required
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

            <LogOrSign>Signup</LogOrSign>

        </div>
      </div>
    </section>
  );
}

export function LogOrSign({ children }) {
  return (
    <>
      <NavLink
      className="log2sign bg-background px-2 py-2 hover:bg-card"
        style={{

          color: "mediumseagreen",
          textDecoration: "none",
        }}
        to={`/auth/${children}`}
      >
        <p className="m-1">{children}</p>
      </NavLink>
    </>
  );
}
