import { redirect } from "react-router-dom";
import { authClient } from "../utils/authClient";

export default async function LoginAction({ request }) {
  const formData = await request.formData();
  const emailRusername = formData.get("username");
  const password = formData.get("password");

  let email = null;
  let username = null;
  let errors = {};

  if (emailRusername?.includes("@")) {
    email = emailRusername;
  } else if (emailRusername?.length > 0) {
    username = emailRusername;
  } else {
    return { errors: { message: "No Email or username entered" } };
  }

  let response;

  if (email) {
    response = await authClient.signIn.email({
      email,
      password,
      rememberMe: false,
    });
  } else {
    response = await authClient.signIn.username({
      username,
      password,
      rememberMe: false,
    });
  }

  const { data, error } = response;

  if (error) {
    return { errors: { message: error.message || "Server Error Occurred" } };
  }

  // success case
  return redirect("/add_info");
}
