
import  { Features,Sponsors,Footer } from '../components/Hero'
import CustomButton from '../components/customButton'
import Hero from '../components/Hero'
import { NavLink } from 'react-router-dom'
// import '../assets/HomeView.css'



export default function Homepage(){
    const button_style={
        backgroundColor: 'mediumseagreen',
        color: 'white',
        // margin: '1.5rem',
        padding: '10px 100px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }
    return(
        <>
            <Hero />
            <Features />
            <Sponsors />
         
            <NavLink to={'/signup'} ><CustomButton text="Join us" className={button_style}/></NavLink>
            <Footer/>

        </>
    )
}