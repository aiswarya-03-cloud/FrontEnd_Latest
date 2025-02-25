// import React from 'react'
// import Navbar from './components/Navbar/navbar'
// import { Route, Router, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// //import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


// import LoginPopUp from './components/LoginPopup/LoginPopUp'
// import Header from './components/Header/Header'
// import { useState } from 'react'
// import Userlayout from './pages/UserLayout/UserLayout'
// import ErrorPage from './pages/ErrorPage/ErrorPage'
// import DealsOffers from './pages/Deals & Offers/DealsOffers'
// //import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import ContactUs from './pages/ContactUs/ContactUs'
// import Feedback from './pages/Feedback/Feedback'
// import ViewMenu from './pages/ViewMenu/ViewMenu'


// export default function App (){

 

// const [showLogin,setShowLogin] =useState(false)
//   return (
//    <>

   
//    {/* {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}  */}
//    {showLogin && <LoginPopUp setShowLogin={setShowLogin} />} 


//     {/* {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>} */}




//  {/* <Header setShowLogin={setShowLogin}/> */}

// {/* <Routes>
//     <Route path='/' element={<Userlayout/>}/>
    
//     <Route path='/' element={<Home/>}/>
//     <Route path='/cart' element={<Cart/>}/>


// </Routes> */}




//  <Routes>


     
//      <Route path="/" element={<Userlayout setShowLogin={setShowLogin} />}>
                
//        </Route>        

//       <Route index element = {<Home />}/>
//         {/* <Route path="/place-order" element={<PlaceOrder />} /> */} */
//         <Route path="/deals-offers" element={<DealsOffers />} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/viewmenu" element={<ViewMenu />} />
 

//  </Routes>

 
  
//  </>




   





    
//   )
// }

// //export default App













import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from './pages/UserLayout/UserLayout'; // User layout includes Header and Footer
import Home from './pages/Home/Home';
//import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import DealsOffers from './pages/Deals & Offers/DealsOffers';
import ContactUs from './pages/ContactUs/ContactUs';
import Feedback from './pages/Feedback/Feedback';
import ViewMenu from './pages/ViewMenu/ViewMenu';
//import LoginPopUp from './components/LoginPopup/LoginPopUp';
import MenuScroller from './components/Scrollbar/Scrollbar';
import Burger from './pages/FoodItemsPageLayout/Burger';
//import Profile from './pages/User/UserProfile';
import LoginPopUp from './components/LoginPopup/LoginPopup';
import AdminLayout from './components/Admin/AdminLayout';
import PrimarySearchAppBar from './components/Admin/AdminHeader';
import Restaurant from './pages/Restaurant/Restaurant';
import UserProfile from './pages/User/UserProfile';
import RestaurantMenuItems from './pages/RestaurantMenuItemsLayout/RestaurantMenuItems';
//import Burger from './pages/FoodItems/Burger';
import UserProfileLayout from './pages/User/UserProfileLayout';
import UpdateProfileCard from './pages/User/UpdateProfileCard';
//import addToCart from './pages/Cart/addToCart';
import CartPage from './components/Cart/CartPage';
import RestaurantHeader from './components/Restaurants/RestaurantHeader'
import PaymentCancel from './pages/Payment/PaymentCancel';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
// import AdminLogin from './components/Admin/AdminLogin';
// import AdminDashboard from './components/Admin/AdminDashboard';
// //import AdminSignup from './components/Admin/AdminSignUp';
import AdminSignIn from './components/Admin/AdminLogin';

import Add from './pages/Admin/Add'
import List from './pages/Admin/List'
import Orders from './pages/Admin/Orders'


export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  const url = "http://localhost:3000"
  

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      
       {/* {showLogin && <LoginPopUp setShowLogin={setShowLogin}/>} */}
    
      {/* Main routing structure */}
      <Routes>
        {/* All routes should be wrapped inside UserLayout */}
        <Route path="/" element={<UserLayout setShowLogin={setShowLogin} />}>
          {/* <Route index element={<Home />} /> */}
          
          {/* <Route path="place-order" element={<PlaceOrder />} /> */}
          <Route path="deals-offers" element={<DealsOffers />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="viewmenu" element={<ViewMenu />} />
          <Route path="food/:foodName" element={<Burger />} />
          <Route path="profile" element={<UserProfileLayout />} />
          <Route path="update-profile" element={<UpdateProfileCard />} />
          // <Route path="user/restaurant" element={<Restaurant />} />
          <Route path="user/all-restaurants" element={<Restaurant />} /> 
          <Route path="admin/login" element={<AdminLayout />} />
          <Route path="menuItem/all-items/:restaurantId" element={<RestaurantMenuItems />} />
          {/* <Route path="cart" element={<RestaurantHeader />} /> */}
          <Route path="cart" element={<CartPage />} />
          <Route path="user/payment/success" element={<PaymentSuccess />} />
          <Route path="user/payment/cancel" element={<PaymentCancel />} />
          <Route path="admin/login" element={<AdminLayout />} />
          {/* /* <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
           {/* <Route path="/admin/signup" element={<AdminSignup />} /> */ }
           <Route path="/admin/login" element={<AdminSignIn />} />
           

        <Route path='/add' element={<Add url={url}/>} />
        <Route path='/list' element={<List url={url}/>} />
        <Route path='/orders' element={<Orders url={url}/>} />


        </Route>
      </Routes>
    </>
    
  );


}









