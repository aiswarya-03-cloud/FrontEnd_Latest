import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import Navbar from '../Navbar_1/Navbar';
import { UserHeader } from '../User/UserHeader';
import PrimarySearchAppBar from './AdminHeader';
import Navbar from './Navbar';
import AdminSignIn from "../../components/Admin/AdminLogin";
// import AdminSignUp from "../../components/Admin/AdminSignUp";



const AdminLayout = ({ setShowLogin }) => {

//    const isUserAuth = false;

    return (
        <>
   
    
       
        
            <Navbar />
          
            <div className ="min-h-96">
              
            <Outlet /> 
            <AdminSignIn />
            {/* <AdminSignUp /> */}
            
           

            </div>
           
            {/* <Footer /> */}
        </>
    );
};

export default AdminLayout;