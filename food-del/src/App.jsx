import React, { useState } from 'react'
import NavBar from './Components/Navbar/NavBar'
import {Route , Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import './Components/LoginPopup/LoginPopupp';
import LoginPopupp from './Components/LoginPopup/LoginPopupp'


const App = () => {
  const[showLogin,setShowLogin]= useState(false)
  
  return (
    <>
    {showLogin?<LoginPopupp setShowLogin={setShowLogin} />:<> </>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>}/>

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App