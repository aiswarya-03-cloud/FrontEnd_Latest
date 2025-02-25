import React from 'react'
import './Navbar.css'
//import { assets } from '../../assets/assets/admin_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
   
      

      <div className="banner">
     
     {/* <div className='slider'>
         <img src ="\public\Milkshake_resize_final.jpg" id="slideImg" />
     </div> */}

     <div className ="overlay">

       

         <div className="navbar">
             <div>
                 <img src= "\public\Sizzler_Bytes_latest.png" class="logo" alt="" />
             </div>

        {/* <ul class='navbar-menu'> */}
         {/* <li>Home</li> 
          <li>PlaceOrder</li>       
          <li>Deals & Offers</li>
          <li>Contact us</li>
          <li>Feedback</li> */}
        {/* </ul> */}
        
         <ul className='navbar-menu'>

                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                   
                    <li>
                        <Link to={"/user/profile"}>Profile</Link>
                    </li>
                    <li>
                        <Link to={"/viewmenu"}>Menu</Link>
                    </li>
                    <li>
                        <Link to={"/user/place-order"}>Orders</Link>
                    </li>
                    <li>
                        <Link to={"/user/payment"}>Payment</Link>
                    </li>
 
</ul>
                    

{/* 
<Routes>

<Route path="/" element={<Home />} />
       <Route path="/place-order" element={<PlaceOrder />} />
       <Route path="/deals-offers" element={<DealsOffers />} />
       <Route path="/contactus" element={<ContactUs />} />
       <Route path="/feedback" element={<Feedback />} />
       <Route path="/viewmenu" element={<ViewMenu />} />


</Routes> */}




      

        <div className='navbar-right'>
        <span class="material-symbols-outlined">
            notifications
        </span>
         {/* <img src ="\src\assets\assets\frontend_assets\search_icon.png" alt="" /> */}
           <div className='navbar-search-icon'>
           <Link to={"/cart"}><img src="\src\assets\assets\frontend_assets\basket_icon.png" alt = ""/></Link>
             
             <div className='dot'>
 
             </div>
           </div>
           <button type="button" onClick={()=>setShowLogin(true)}>Logout</button>
       </div>

       

     </div>

</div>

    </div>
  )
}

export default Navbar
