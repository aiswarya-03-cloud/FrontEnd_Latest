// import React from 'react';
import { Route, RouterProvider, Routes } from 'react-router-dom'
import ContactUs from "../pages/ContactUs/ContactUs";
import DealsOffers from "../pages/Deals & Offers/DealsOffers";
import Feedback from "../pages/Feedback/Feedback";
import PlaceOrder from "../pages/PlaceOrder/Place Order";
import ViewMenu from "../pages/ViewMenu/ViewMenu";

// function Root(props){
//     return(
//         <>





//         </>
//     )
// }
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../pages/root";
import App from "../App";
import UserLayout from '../pages/UserLayout/UserLayout';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import AdminLayout from '../pages/MentorLayout/MentorLayout';
import Restaurant ,{loader as restaurantLoader}from '../pages/Restaurant/Restaurant';
import AdminLogin from '../pages/Admin/AdminLogin';
import UserProfileCard from '../pages/User/UpdateProfileCard';

export const router = createBrowserRouter([
  {

  path: "",
    element : <UserLayout />,
  errorElement : <ErrorPage/>,
  children:[
    {
      path: "",
      element: <Home />,
    },
    {
      path: "place-order",
      element: <PlaceOrder />
    },
    {
        path: "deals-offers",
        element: <DealsOffers />
    },
    {
        path: "contactus",
        element: <ContactUs />
    },
    {
        path: "feedback",
        element: <Feedback />
    },
    // {
    //     path: "/viewmenu",
    //     element: <ViewMenu />
    // }

    {
      // element: <ProtectedRoute />,
      path: "user",
      children: [
          {
              path: "wishlist",
              // element: <h1>Wishlist</h1>,
          },
          {
              path: "profile",
              element: <Profile />,
          },
        //   {
        //     path: "restaurant",
        //     element: <Restaurant />,
        // },
        {
          path:   "all-restaurants" ,
          element: <Restaurant />,
          loader: restaurantLoader
        },
          {
              path: "cart",
              // element: <Cart />,
          },
          {
              path: "orders",
              // element: <h1> orders page</h1>,
          },
          {
              path: "payment/success",
              // element: <h2>Payment success</h2>,
          },
          {
            path: "menuItem/all-items/:restarantId"
            element: <RestoMenu />
          },
          {
            path: "update-profile",
            element : <UpdateProfileCard />
          }
          
      ],
  },

  {
      path: "admin",
      element: <AdminLayout />,
      errorElement : <ErrorPage/>,
      children:[
        {
          path:"login",
          element: <AdminLogin />
        }
      ]
  },
 
  
  ]
  



},

])



  
// }]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    
    </React.StrictMode>,

)