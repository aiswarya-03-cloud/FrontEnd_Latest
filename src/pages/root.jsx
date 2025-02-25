import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root(props){
    return(
        <>
        <header className ='shadow-xl h-20 bg-white' style={{ minWidth: '550px' }}>
            <div className='container mx-auto py-6 flex flex-row justify-between items-center'> 

            <h1 className='myh1 font-bold'>Literary Realm</h1>
            <nav>
                <ul className='flex flex-row gap-6 font-bold text-gray-600'>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"place-order"}>PlaceOrder</Link>
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
                    {/* {
                        userLoggedIn? <li>
                            <Link to={"/logout"}>Logout</Link>
                        </li> : <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                    } */}
                </ul>
            </nav>
                
            </div>

            

        </header>
        <Outlet />
        <footer></footer>
        </>
    )
}
export default Root;