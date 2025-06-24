import "../assets/hero.css";
import { NavLink} from 'react-router-dom'
import Profile from "./Profile";
import Logout from "./logout";
import ProductBox from "./product";


export default function Hero({session}) {
  let herostyle = {
    backgroundImage: "url(heroimg.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  
 
  };

  return (
    <div className="hero relative flex justify-center 
    items-center flex-wrap w-full  py-20 font-(verdana) font-bold
     " style={herostyle}>
      { 
        session&&
        <div>
            <Profile user={session?.user}></Profile>
            <Logout session={session}/>
        </div>
      }
        <div className="contner m-4 z-3">
          <h1 className="text-[2rem] z-3 dark:text-accent text-emerald-800 
          md:text-6xl rowdies-bold m-3  stroke-4 ">ZMERCADO</h1>
          <p className="text-[1.5rem] m-3 text-transparent font-bold bg-clip-text bg-linear-90 from-amber-300 to-amber-600 gloria-regular">Zapping deals</p>
          <div className="heroBtns mt-2">
            <NavLink className="btn1 bg-accent text-background hover:bg-emerald-900  dark:text-foreground"  to={'/auth/signup'}>
            SignUp
              
            </NavLink>
            <NavLink className="btn2 bg-background text-accent hover:bg-emerald-950 dark:text-foreground" to={'/auth/login'}>
            SignIn

            </NavLink>
          </div>
        </div>
      <div className="overly flex  dark:brightness-50 justify-center absolute m-0
      backdrop-blur-[2.5px] w-full h-full">
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features w-2/3 
    shadow-lg dark:shadow-emerald-950 text-center">
      <h1
        style={{
          marginBottom: "3rem",
        }} 
        className="text-[1.5rem]  md:text-[1.7rem]
        m-3 text-center"
      >
        What Do we do?
      </h1>

      <div className="cards  w-5/6  flex-wrap">
        <div className="card hover:scale-105 hover:shadow-amber-400 hover:shadow-2xs delay-sm transition-all shadow-md bg-card">
          <i className="fa-solid fa-truck" title="Fast Delivery"></i>
          <h4>Fast delivery</h4>
          <p>Get your items delivered within an incredible amount of time.</p>
        </div>
        <div className="card hover:scale-105 hover:shadow-amber-400 hover:shadow-2xs delay-sm transition-all shadow-md bg-card">
          <i className="fa-solid fa-truck" title="Fast Delivery"></i>
          <h4>Fast delivery</h4>
          <p>Get your items delivered within an incredible amount of time.</p>
        </div>
        <div className="card hover:scale-105 hover:shadow-amber-400 hover:shadow-2xs delay-sm transition-all shadow-md bg-card">
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
      <h1 className="text-3xl font-semibold text-center mb-6">
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





        <div>

          <ProductBox product={{title:'title',desc:'lorem ipsum dolor sit amet constrecteur'}} />

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
