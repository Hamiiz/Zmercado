import { BsGoogle, BsFacebook, BsTwitterX } from "react-icons/bs";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import { authClient } from "../utils/authClient";
import { useState } from "react";

export default function Auths() {
  let [isHovered, setIsHovered] = useState(0);
  let authLinkstyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContents: "center",
  };
  let authStyle = {
    backgroundColor: "white",
    padding: ".2rem",
    width: "2rem",
    height: "2rem",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

    const signIn = async (e) => {
     let providerName = e.target.id
      try{

        const data = await authClient.signIn.social({
            provider: String(providerName)
        })
        console.log(data)
      } catch(error){
          toast.error(error)

      }

    }

  

  return (
    <div className="authlinks" style={authLinkstyles}>
      <div
      id="google"
        onClick={signIn}  
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
        className={isHovered ==1? "authHover" : ""}
        style={authStyle}
      >
        <BsGoogle />
      </div>
      <div
        id="facebook"
        onMouseEnter={() => setIsHovered(2)}
        onMouseLeave={() => setIsHovered(0)}
        className={isHovered==2 ? "authHover" : ""}
        style={authStyle}
      >
        <BsFacebook style={{ color: "blue" }} />
      </div>
      <div
            id="twitter"

        className={isHovered ==3? "authHover" : ""}
        onMouseEnter={() => setIsHovered(3)}
        onMouseLeave={() => setIsHovered(0)}
        style={authStyle}
      >
        <BsTwitterX />
      </div>
    </div>
  );
}
