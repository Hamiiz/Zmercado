import "../assets/hero.css";
import { NavLink} from 'react-router-dom'

export default function Hero() {
  let herostyle = {
    backgroundImage: "url(heroimg.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
 
  };
  return (
    <div className="hero relative flex justify-center 
    items-center flex-wrap text-emerald-800 w-full  py-8 font-(verdana) font-bold
     " style={herostyle}>
        <div className="contner m-4 z-3">
          <h1 className="text-[2rem] ">ZMERCADO</h1>
          <p className="text-[1.5rem]">Zapping deals</p>
          <div className="heroBtns mt-2">
            <NavLink className="btn1" to={'/auth/signup'}>
            SignUp
              
            </NavLink>
            <NavLink className="btn2" to={'/auth/login'}>
            SignIn

            </NavLink>
          </div>
        </div>
      <div className="overly flex justify-center absolute m-0
      backdrop-blur-[2.5px] w-full h-full">
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features w-2/3 
    shadow-lg text-center">
      <h1
        style={{
          marginBottom: "3rem",
        }} 
        className="text-[1.5rem] md:text-[1.7rem]
        m-3 text-center"
      >
        What Do we do?
      </h1>

      <div className="cards w-5/6  flex-wrap">
        <div className="card">
          <i className="fa-solid fa-truck" title="Fast Delivery"></i>
          <h4>Fast delivery</h4>
          <p>Get your items delivered within an incredible amount of time.</p>
        </div>
        <div className="card">
          <i className="fa-solid fa-truck" title="Fast Delivery"></i>
          <h4>Fast delivery</h4>
          <p>Get your items delivered within an incredible amount of time.</p>
        </div>
        <div className="card">
          <i className="fa-solid fa-truck" title="Fast Delivery"></i>
          <h4>Fast delivery</h4>
          <p>Get your items delivered within an incredible amount of time.</p>
        </div>
      </div>
    </div>
  );
}

function Sponsors() {
  const sponsors = [
    "sal.png",
    "sal.png",
    "sal.png",
    "sal.png",
    "sal.png",
    "sal.png",
    "sal.png",
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors]; // Duplicate for infinite scroll

  return (
    <div className=" py-10  w-5/6 mx-auto overflow-hidden">
      <h1 className="text-black text-3xl font-semibold text-center mb-6">
        Our Sponsors
      </h1>

      <div className="whitespace-nowrap  overflow-hidden">
        <div className="flex animate-scrollLoop">
          {duplicatedSponsors.map((src, index) => (
            <div key={index} className="mx-6 flex-shrink-0 sp-img">
              <img src={src} alt="Sponsor" className="w-28 logo-img h-auto" />
            </div>
          ))}
        </div>
      </div>
     
    </div>

    
  );
}

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "2rem 0",
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.5rem",
        }}
        className="footer"
      >
        <h1>ZMERCADO</h1>
        <p>All rights reserved &copy; 2023</p>
      </div>
    </>
  );
}
export { Features, Sponsors, Footer };
