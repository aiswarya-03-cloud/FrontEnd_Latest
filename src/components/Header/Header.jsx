import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Header.css'
import Root from '../../pages/root'
import { Link, useNavigate } from 'react-router-dom';
import PlaceOrder from '../../pages/PlaceOrder/Place Order';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//const navigate = useNavigate();
//import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

import DealsOffers from '../../pages/Deals & Offers/DealsOffers';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Feedback from '../../pages/Feedback/Feedback';
import ViewMenu from '../../pages/ViewMenu/ViewMenu';
import Home from '../../pages/Home/Home';
import Navbar from '../Navbar_1/Navbar';



const Header = ({setShowLogin}) => {

  const navigate = useNavigate();

  const handleViewMenuClick = () => {
    console.log('---------Navigating to /viewmenu');
    navigate('/viewmenu'); // Navigates to the ViewMenu page
};

  return (


    <>
    
   <div className="banner">
     
     <div className='slider'>
         <img src ="\public\Milkshake_resize_final.jpg" id="slideImg" />
     </div>

     <div className ="overlay">

       

         <div className="navbar">
             <div>
                 <img src= "\public\Sizzler_Bytes_latest.png" class="logo" alt="" />
             </div>

  
        
         <ul className='navbar-menu'>

                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/place-order"}>PlaceOrder</Link>
                    </li>
                    <li>
                        <Link to={"/deals-offers"}>Deals Offers</Link>
                    </li>
                    <li>
                        <Link to={"/contactus"}>ContactUs</Link>
                    </li>
                    <li>
                        <Link to={"/feedback"}>Feedback</Link>
                    </li>
                    <li>
                        <Link to={"/admin/login"}>Admin Login</Link>
                    </li>
 
</ul>
                      
      

        <div className='navbar-right'>
         <img src ="\src\assets\assets\frontend_assets\search_icon.png" alt="" />
           <div className='navbar-search-icon'>
             <img src="\src\assets\assets\frontend_assets\basket_icon.png" alt = ""/>
             <div className='dot'>
 
             </div>
           </div>
           <button type="button" onClick={()=>setShowLogin(true)}>Sign In </button>
       </div>

       

     </div>


     {/* <Navbar /> */}

     <div className="content">
       <h1>Sizzle Bite – Where Every Order Sizzles with Flavor!</h1>
       <h3>At Sizzle Bite, we bring the freshest, most delicious meals straight to your door. Every dish is crafted with care, bursting with flavor to satisfy your cravings. Whether you're in the mood for something spicy, savory, or sweet, we’ve got something sizzling just for you!</h3>
   </div>


   <div className="btn">
   <button type="button" onClick={handleViewMenuClick}>VIEW MENU</button>
   </div>


  </div>

  </div>
    </>


  )
}

export default Header
