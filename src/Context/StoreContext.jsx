import {createContext, useState} from 'react';
//import {food_list} from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

export const StoreContextProvider = ({children}) => {

//const [cartItems,setCartItems] = useState({});
const url= "http://localhost:3000";
const [token, setToken] = useState(null)

// const [cartCount, setCartCount] = useState(0);

//   const fetchCartCount = async () => {
//     try {
//       const response = await axiosInstance.get("/cart/count");
//       setCartCount(response.data.count);
//     } catch (error) {
//       console.error("Error fetching cart count:", error);
//     }


// ADD TO CART
// const addToCart = (itemId) =>{
//     if(!cartItems[itemId]){
//         setCartItems((prev)=>({..prev,[itemId]:1}))
//     }
//     else{
//         setCartItems((prev)=>({..prev,[itemId]+1}))
//     }
// }

// // REMOVE FROM CART
// const removeFromCart = (itemId)=>{
//    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
// }

// useEffect(()=>{

// },[cartItems])



const contextValue = {
   // food_list,
    // cartItems,
    // setCartItems,
    // addToCart,
    // removeFromCart,
    url,
    token,
    setToken

}



return(
    <StoreContext.Provider value = {{url,token,setToken}}>
       {children}
    </StoreContext.Provider>
)

}

// export default StoreContextProvider