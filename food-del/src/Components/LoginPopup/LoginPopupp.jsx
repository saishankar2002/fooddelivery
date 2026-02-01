import React from 'react'
import './Loginpopup.css';
import { assets } from '../../assets/assets';
import  { useState } from 'react';

const LoginPopupp = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("sign Up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currentState==="Login"?<></>:<input type="text " placeholder='your name' required />}
                
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}> Click here</span></p>
            :<p>Already have an account ? <span onClick={()=>setCurrentState("Login")}> Login here</span></p>
            }
        </form>

    </div>
  )
}

export default LoginPopupp;