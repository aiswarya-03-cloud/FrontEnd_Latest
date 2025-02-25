import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar_1/Navbar';
import { UserHeader } from '../../components/User/UserHeader';


const UserLayout = ({ setShowLogin }) => {

   const isUserAuth = false;

    return (
        <>

       
        {isUserAuth ? <UserHeader /> : <Header setShowLogin={setShowLogin} />}
            {/* <Header setShowLogin={setShowLogin} />  */}
            {/* <UserHeader /> */}
            {/* <Navbar /> */}
          
            <div className ="min-h-96">
              
            <Outlet /> 

            </div>
           
            <Footer />
        </>
    );
};

export default UserLayout;