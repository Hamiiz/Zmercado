
import  { Features,Sponsors,Footer } from '../components/Hero'
import CustomButton from '../components/customButton'
import Hero from '../components/Hero'
import { NavLink } from 'react-router-dom'
import {useSession} from '../hooks/useSession'

// import '../assets/HomeView.css'



export default function Homepage(){
    //eslint-disable-next-line
    let {session,isPending} = useSession()
  
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
            <Hero session={session} />
            <Features />
            <Sponsors />
            <NavLink to={'/auth/signup'} ><CustomButton text="Join us" className={button_style}/></NavLink>
            <Footer/>
       
            

        </>
    )
}