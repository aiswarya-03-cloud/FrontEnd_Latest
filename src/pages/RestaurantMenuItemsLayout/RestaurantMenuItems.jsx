import React from 'react'
import RestoMenu from '../../components/RestoMenu/RestoMenu'
import RestaurantHeader from '../../components/Restaurants/RestaurantHeader'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import {useParams} from "react-router-dom";
import {useEffect,useState} from 'react'
import {axiosInstance} from '../../config/axiosinstance'
//import toast from 'react-hot-toast'
//import {addToCart} from './pages/Cart/addToCart'


const RestaurantMenuItems = () => {

  const params = useParams();
  const {restaurantId} = params;
  console.log("params--",params?.restaurantId);
  
  const [menuItemList,setmenuItemList] = useState([])

  const fetchMenuItems = async()=>{
    try{

        const response = await axiosInstance({
          method: "GET",
          url:`menuitem/all-items/${restaurantId}`,
          
        });

        console.log("ResponseMenuItems===",response)
        console.log("ResponseData---",response.data)
        // console.log("ResponseDataRestaurant===>",response.data.restaurants)
        setmenuItemList(response.data.menuItems ||[])

        
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchMenuItems(); 
  },[]);

  // const addToCart = async()=>{
  //   try{
       
  //    const response = await axiosinstance({
  //        url:"/cart/update",
  //        method: "POST",
  //    });
  //    console.log("response===",response);
  //    toast.success("Added to Cart")

  //   }catch(error){
  //     console.log(error);
  //     // toast.error(error.data.name)
  //   }
  // }

  // const handleAddToCart = async () =>{
  //   await addToCart();
  // };

  
  return (
    <div>
      {/* <h1>RESTAURANT MENULIST</h1> */}
      
      <RestaurantHeader />

   

      {/* <RestaurantCard /> */}

<h1 className="top-restaurants-title">Craving Something Delicious? Dive into Gourmet Hub's Signature Cuisines!</h1>
      {/* <RestoMenu /> */}
     <section className="grid grid-rows-3 grid-cols-3 gap-y-10 w-full">

     {menuItemList?.map((menuItem,index)=>(
      <RestoMenu key={menuItem?._id} menuItem={menuItem} />

     ))}

      </section>

    </div>
  )
}

export default RestaurantMenuItems



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import RestoMenu from "../../components/RestoMenu/RestoMenu";
// import RestaurantHeader from "../../components/Restaurants/RestaurantHeader";
// import { axiosInstance } from "../../config/axiosinstance";

// const RestaurantMenuItems = () => {
//   const params = useParams();
//   const { restaurantId } = params;
  
//   const [menuItemList, setMenuItemList] = useState([]);
//   const [cartCount, setCartCount] = useState(0);

//   // Fetch menu items from API
//   const fetchMenuItems = async () => {
//     try {
//       const response = await axiosInstance({
//         method: "GET",
//         url: `menuitem/all-items/${restaurantId}`,
//       });

//       setMenuItemList(response.data.menuItems || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   // Handle Add to Cart
//   const handleAddToCart = () => {
//     setCartCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       {/* Pass cart count to update dynamically */}
//       <RestaurantHeader cartCount={cartCount} />

//       <h1 className="top-restaurants-title">
//         Craving Something Delicious? Dive into Gourmet Hub's Signature Cuisines!
//       </h1>

//       <section className="grid grid-rows-3 grid-cols-3 gap-y-10 w-full">
//         {menuItemList?.map((menuItem) => (
//           <RestoMenu key={menuItem?._id} menuItem={menuItem} onAddToCart={handleAddToCart} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default RestaurantMenuItems;
