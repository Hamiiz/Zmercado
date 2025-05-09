import { BsGoogle, BsFacebook, BsTwitterX } from "react-icons/bs";
import { IconContext } from "react-icons";
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

  return (
    <div className="authlinks" style={authLinkstyles}>
      <div
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
        className={isHovered ==1? "authHover" : ""}
        style={authStyle}
      >
        <BsGoogle />
      </div>
      <div
        onMouseEnter={() => setIsHovered(2)}
        onMouseLeave={() => setIsHovered(0)}
        className={isHovered==2 ? "authHover" : ""}
        style={authStyle}
      >
        <BsFacebook style={{ color: "blue" }} />
      </div>
      <div
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
