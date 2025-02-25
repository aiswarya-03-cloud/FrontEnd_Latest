import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets/admin_assets/assets'
// import NotificationsIcon from "@mui/icons-material/Notifications";


const Navbar = () => {
    return (
      <div className="navbar">
        {/* Logo on the left */}
        <img className="logo" src={assets.Sizzler_Bytes_latest} alt="Logo" />
  
        {/* Notification Icon & Profile Image on the right */}
        <div className="right-section">
          {/* <NotificationsIcon className="notification-icon" /> */}
          <img className="profile" src={assets.profile_image} alt="Profile" />
        </div>
      </div>
    );
  };
  

export default Navbar