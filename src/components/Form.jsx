import { useState, useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'
import '../assets/form.css'

export default function Form({isLogin}){
    let fetcher = useFetcher() 
    let errors = fetcher.data?.errors
    const [email,setEmail]= useState('') 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameStatus,setUsernameStatus]= useState(null)
    const debounceTimeout= useRef(null)
    const initRender = useRef(true)

useEffect(()=>{
    if (initRender.current){
        initRender.current = false;
            return;
        }
    if(isLogin){return;}
    username.length==0?setUsernameStatus(null):'';
    setUsernameStatus(null)
    if (username.length < 4){ return }
   
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    const newTimeout = setTimeout(() => {
        console.log("Searching for username:", username);
        // Call your API or database search function here
        if (username == 'hamiiz'){
            setUsernameStatus('taken')
        }else{
            setUsernameStatus('possible')
        }
    }, 3500); 

    debounceTimeout.current = (newTimeout);

    
    
    },[username,isLogin])


useEffect(()=>{
    
    if(fetcher.data == undefined){
        ''
    }
    else if(fetcher.data.isLogged) {
        console.log(fetcher.data)
        console.info('successful signup')

    }
    

},[fetcher.data])

    

  
    return (
        <fetcher.Form method='post' action={isLogin?'/login':'/signup'}
         style={{margin:'.5rem'}}>
        {isLogin && (
            <div className="signupform">
                <input 
                className={`forminput usename`} 
                type="text"
                onInput={(e)=>setUsername(e.target.value)}
                placeholder="Enter your Email or Username"
                name='username'/> 

                <input type="password"
                onInput={e=>setPassword(e.target.value)}
                name="password" className="forminput password"
                placeholder="Enter Password" />
            </div>
        )}
        
        {!isLogin && (
            <div className="signupform">
                <input
                onInput= {(e)=>{setEmail(e.target.value)}}
                className={`forminput email `} 
                type="email"
                placeholder="Enter your Email"
                name='email' required/> 
                <input
                    onInput={(e)=>setUsername(e.target.value)} 
                    className={`forminput usename `}
                    type="text"
                    placeholder="Enter your Username"
                    name='username' required/> 
                {usernameStatus=='taken'&& <p style={{color:'red',margin:0,padding:0,marginRight:'auto'}}>{username} taken!</p> }
                {usernameStatus=='possible'&& <p style={{color:'mediumseagreen',margin:0,padding:0,marginRight:'auto'}}>{username} is Possible</p> }
        
                
                <input
                onInput={(e)=>setPassword(e.target.value)} 
                type="password"
                name="password"
                className={`forminput password `}
                placeholder="Enter Password" 
                required
                />

                
                <input
                type="password" 
                name="cpassword" 
                style={{marginBottom:'0'}}
                className={`forminput cpassword `}
                placeholder="Confirm Password" required/>
                {errors?.password && (<p style={{color:'red',alignSelf:'self-start',
                    margin:'0'
                }}>{errors.password}</p>) }
            </div>
        )}
        <input type="submit"
         value={isLogin?'Login':'Signup'} disabled={password.length>=6&&username.length>=4?false:true} />
        

        </fetcher.Form>
    )

}

