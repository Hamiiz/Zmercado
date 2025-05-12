import "../assets/hero.css";
import { NavLink} from 'react-router-dom'

export default function Hero() {
  let herostyle = {
    backgroundImage: "url(heroimg.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "20vh",
    width: "100%",
  };
  return (
    <div className="hero py-3 " style={herostyle}>
      <div className="overly">
        <div className="contner m-4">
          <h1 className="text-red">ZMERCADO</h1>
          <p>Zapping deals</p>
          <div className="heroBtns">
            <NavLink className="btn1" to={'/auth/signup'}>
            SignUp
              
            </NavLink>
            <NavLink className="btn2" to={'/auth/login'}>
            SignIn

            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features">
      <h1
        style={{
          marginBottom: "3rem",
        }}
      >
        What Do we do?
      </h1>

      <div className="cards">
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
    <div className="bg-black py-10 overflow-hidden">
      <h1 className="text-white text-3xl font-semibold text-center mb-6">
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
