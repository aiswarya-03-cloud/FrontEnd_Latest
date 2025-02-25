import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, Typography, IconButton, TextField } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosinstance";
import toast, { Toaster } from "react-hot-toast";
import CartCard from "./CartCard";
import {loadStripe} from "@stripe/stripe-js";

// const CartPage = () => {
 

//      const [cartDetails, setCartDetails] = useState([]);
//      const [totalPrice, setTotalPrice] = useState(0);


//      const fetchCartDetails = async () => {
//        try {
//          const response = await axiosInstance ({
//           method: "GET",
//           url: "/cart/getcart",
//         });

//         console.log("CartDetails===>",response);
//         console.log("CartDetailsData===>",response.data);
         
        
          
//       //setCartDetails(response.data.data.cartItems || []);
//       const items = response.data.data.cartItems || [];
//       setCartDetails(items);

//        // Calculate total price
//        const calculatedTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
//        setTotalPrice(calculatedTotal);

//        } catch (error) {
//          console.error("Error fetching cart items:", error);
//        }
//      };

//      console.log("CartDetails....===>",cartDetails);

//      useEffect(()=>{
//       fetchCartDetails();
//      },[]);



//   return (
//     <div>
//       <section>
//     <h1>CART PAGE</h1>
//     </section>

//     <section>

// <div className='w-6/12'>
// <h1 className="text-2xl">Items in Cart</h1>
// {cartDetails.length > 0 ? (
//   <div>
//     {cartDetails.map((value) => (
      
//       <CartCard item={value} key={value?._id}/>
       
//     ))}
//   </div>
// ) : (
//   <p>Your cart is empty.</p>
// )}


// </div>



//     </section>
//     </div>
    
    
//   )
// };




const CartPage = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


const makePayment =async () => {

  try{

    // Request going to stripe front-end
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

    console.log("cartdetails--------",cartDetails)

    // Request going to our Backend
    const session = await axiosInstance({
      url: "/payment/create-checkout-session",
      method: "POST",
      // data: {menuItems: cartDetails?.menuItem},
      data: {menuItems: cartDetails},

    });

    // console.log("MenuItems==",menuItems)
    console.log(session, "====session");
    const result = stripe.redirectToCheckout({
      sessionId : session.data.sessionId,
    });

  }catch(error){
    console.log(error.message);
  }
}


  const fetchCartDetails = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/cart/getcart",
      });


      const items = response.data.data.cartItems || [];
      setCartDetails(items);
      console.log("ITEMS--",items)

      // setCartDetails(response.data.data.cartItems || []);

      console.log("CartDetails....===>",cartDetails);

     // Calculate total price
      const calculatedTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalPrice(calculatedTotal);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);




  const handleRemoveCartItem = async (menuItem)=>{

    console.log("OOO",menuItem)
    try{
    const response = await axiosInstance({
      method: "DELETE",
      url: "/cart/remove-from-cart",
      data: {menuItem}
    })
    toast.success("Removed from Cart")
  }catch (error){
     console.log(error.message);
     toast.error(error?.response?.data?.message || "failed to remove");
  }

};

////////////

// const handleIncrease = (id) => {
//   setCartItems((prevItems) =>
//     prevItems.map((item) =>
//       item.menuItem._id === id ? { ...item, menuItem: { ...item.menuItem, quantity: item.menuItem.quantity + 1 } } : item
//     )
//   );
// };

// const handleDecrease = (id) => {
//   setCartItems((prevItems) =>
//     prevItems
//       .map((item) =>
//         item.menuItem._id === id
//           ? { ...item, menuItem: { ...item.menuItem, quantity: Math.max(item.menuItem.quantity - 1, 1) } }
//           : item
//       )
//       .filter((item) => item.menuItem.quantity > 0) // Removes item if quantity is 0
//   );
// };

//////////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-black mb-6">Your Cart</h1>

      <div className="w-8/12 bg-white p-6 rounded-lg shadow-md">
        {cartDetails.length > 0 ? (
          <div className="space-y-4">
            {cartDetails.map((value) => (
              <CartCard item={value} key={value.id} handleRemove={handleRemoveCartItem} />
            ))}
            <div className="mt-6 p-4 bg-black text-white rounded-md text-center">
              <h2 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}

        {/* <div className="w 6/12 px 20 py 20">
        {cartDetails.map((value) => (
             <h2>Price : {value?.menuItem?.price}</h2>
            ))}
          <h2>Total Price : {cartDetails?.totalPrice}</h2>
        </div> */}
        {/* <button sx={{ width: "100%", mt: 2, backgroundColor: "#b19cd9", '&:hover': { backgroundColor: "#a191c0" }, color: "black", fontWeight: "bold", borderRadius: "8px", padding: "10px" }} onClick={makePayment}>Proceed To Payment</button> */}
        <div className="mt-4 px-4 py-2">
        <button  className="mt-2 px-6 py-2 bg-[#b19cd9] hover:bg-[#a191c0] text-black font-bold rounded-lg flex justify-center mx-auto" onClick={makePayment}>Proceed To Payment</button>

        </div>

        
      </div>
    </div>
  ); 
};


// "#2C2C2C"

export default CartPage;
