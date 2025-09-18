import { BsGoogle, BsFacebook, BsTwitterX, BsGithub } from "react-icons/bs";
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
        
            provider: String(providerName),
            callbackURL:`${import.meta.env.VITE_BASE_URL}/add_info`
  
        })
        console.log(data)
      } catch(error){
        console.log(error)
          toast.error(error)

      }

    }

  

  return (
    <div className="authlinks  " style={authLinkstyles}>
      <div
      id="google"
      
        onClick={signIn}  
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
        className={isHovered ==1? "authHover" : "bg-background dark:bg-card"}
        style={authStyle}
      >
        <BsGoogle style={{pointerEvents:'none'}} />
      </div>
      <div
        id="facebook"
        onMouseEnter={() => setIsHovered(2)}
        onMouseLeave={() => setIsHovered(0)}
        className={isHovered==2 ? "authHover" : "bg-background dark:bg-card"}
        style={authStyle}
      >
        <BsFacebook style={{pointerEvents:'none' }} />
      </div>
      <div
        id="github"
        onClick={signIn}
        className={isHovered ==3? "authHover" : "bg-background dark:bg-card"}
        onMouseEnter={() => setIsHovered(3)}
        onMouseLeave={() => setIsHovered(0)}
        style={authStyle}
      >
        <BsGithub style={{pointerEvents:'none'}}  />
      </div>
    </div>
  );
}
