// // import React from "react";
// // import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

// // const foodItems = [
// //   {
// //     id: 1,
// //     name: "Grilled Chicken Steak",
// //     description: "Juicy grilled chicken served with sautéed vegetables & creamy sauce.",
// //     price: "$15.99",
// //     image: "https://source.unsplash.com/400x300/?grilled-chicken",
// //     restaurant: "The Grill House",
// //   },
// //   {
// //     id: 2,
// //     name: "Spaghetti Carbonara",
// //     description: "Classic Italian pasta with bacon, parmesan & creamy white sauce.",
// //     price: "$13.99",
// //     image: "https://source.unsplash.com/400x300/?pasta-carbonara",
// //     restaurant: "Little Italy",
// //   },
// //   {
// //     id: 3,
// //     name: "Avocado Toast",
// //     description: "Fresh avocado slices on crispy sourdough with a hint of lemon & chili flakes.",
// //     price: "$7.49",
// //     image: "https://source.unsplash.com/400x300/?avocado-toast",
// //     restaurant: "Healthy Bites",
// //   },
// //   {
// //     id: 4,
// //     name: "Tandoori Paneer Wrap",
// //     description: "Soft tortilla wrap filled with spiced paneer, mint chutney & veggies.",
// //     price: "$9.99",
// //     image: "https://source.unsplash.com/400x300/?paneer-wrap",
// //     restaurant: "Spice Fusion",
// //   },
// //   {
// //     id: 5,
// //     name: "Mango Smoothie Bowl",
// //     description: "Creamy mango smoothie topped with granola, coconut flakes & chia seeds.",
// //     price: "$6.49",
// //     image: "https://source.unsplash.com/400x300/?smoothie-bowl",
// //     restaurant: "Tropical Delights",
// //   },
// //   {
// //     id: 6,
// //     name: "Chocolate Lava Cake",
// //     description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
// //     price: "$8.99",
// //     image: "https://source.unsplash.com/400x300/?chocolate-cake",
// //     restaurant: "Sweet Cravings",
// //   },
// // ];

// // const RestoMenu = () => {
// //   return (
// //     <Grid container spacing={3} sx={{ padding: "20px", justifyContent: "center" }}>
// //       {foodItems.map((item) => (
// //         <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
// //           <Card
// //             sx={{
// //               maxWidth: 345,
// //               borderRadius: "12px",
// //               boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
// //               transition: "0.3s",
// //               "&:hover": { transform: "scale(1.05)" },
// //             }}
// //           >
// //             <CardMedia component="img" height="200" image={item.image} alt={item.name} />
// //             <CardContent>
// //               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4B0082" }}>
// //                 {item.name}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "8px" }}>
// //                 {item.description}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#8B0000" }}>
// //                 {item.price}
// //               </Typography>
// //               <Typography variant="body2" sx={{ fontStyle: "italic", color: "#555", marginBottom: "10px" }}>
// //                 {item.restaurant}
// //               </Typography>
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 sx={{
// //                   backgroundColor: "#9370DB",
// //                   color: "white",
// //                   fontWeight: "bold",
// //                   "&:hover": { backgroundColor: "#7A5DBE" },
// //                 }}
// //               >
// //                 Add to Cart
// //               </Button>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       ))}
// //     </Grid>
// //   );
// // };

// // export default RestoMenu;



// /// FOOD LIST ///


// // import React from "react";
// // import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

// // const foodItems = [
// //   {
// //     name: "Triple Cheese Explosion",
// //     price: 250,
// //     description:
// //       "Indulge in the ultimate cheesy delight with our Triple Cheese Explosion! A fusion of mozzarella, cheddar, and parmesan, melted to perfection.",
// //     image: "https://thumbs.dreamstime.com/b/delicious-triple-layer-cheeseburger-fresh-ingredients-dark-background-338624546.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },
// //   {
// //     name: "The Lava Melt",
// //     price: 220,
// //     description:
// //       "A fiery fusion of bold flavors and molten goodness! Flame-grilled beef patty with melted pepper jack & cheddar cheese.",
// //     image: "https://png.pngtree.com/thumb_back/fw800/background/20240716/pngtree-beautiful-delicious-burger-on-a-black-background-image_16008891.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",

// //     //https://thumbs.dreamstime.com/b/yummy-burger-served-table-illustrated-blur-background-realistic-detailed-illustration-wooden-341111298.jpg
// //   },
// //   {
// //     name: "Jalapeño Inferno",
// //     price: 300,
// //     description:
// //       "Turn up the heat! Succulent beef patty stacked with melted pepper jack cheese & spicy jalapeño poppers.",
// //     image: "https://img.freepik.com/premium-photo/highquality-stock-image-giraffe-with-cheese-easily-accessible-with-generative-ai_561855-12906.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },
// //   {
// //     name: "Crispy Spicy Chicken Burger",
// //     price: 280,
// //     description:
// //       "Perfectly seasoned, crunchy chicken fillet, deep-fried & coated in a spicy, flavorful batter with just the right heat.",
// //     image: "https://thumbs.dreamstime.com/b/crispy-chicken-burger-delight-mouth-watering-featuring-fresh-lettuce-vibrant-tomatoes-tangy-pickles-all-nestled-sesame-344985528.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },
// //   {
// //     name: "Buffalo Ranch Chicken Burger",
// //     price: 270,
// //     description:
// //       "Crispy chicken fillet drenched in spicy buffalo sauce, topped with ranch dressing for a zesty flavor punch.",
// //     image: "https://img.freepik.com/premium-photo/buffalo-chicken-burger_1179130-378.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },
// //   {
// //     name: "Korean Kimchi BBQ Burger",
// //     price: 320,
// //     description:
// //       "Sweet & spicy Korean BBQ beef patty with kimchi slaw, Gochujang sauce, and sesame aioli.",
// //     image: "https://img.freepik.com/premium-photo/korean-bbq-burger-with-kimchi-slaw_198067-244896.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },
// //   {
// //     name: "Truffle Mushroom Swiss Burger",
// //     price: 350,
// //     description:
// //       "A gourmet delight with Swiss cheese, sautéed truffle mushrooms, and a juicy beef patty.",
// //     image: "https://img.freepik.com/premium-photo/gourmet-mushroom-swiss-burger-with-caramelized-onions_1272857-141106.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },
// //   {
// //     name: "Texas Smokehouse Burger ",
// //     price: 210,
// //     description:
// //       "Juicy beef patty layered with smoked cheddar, crispy bacon, BBQ sauce, and caramelized onions.",
// //     image: "https://t3.ftcdn.net/jpg/11/85/69/98/360_F_1185699841_T6ufzsUfFdqVX1pNxilR2B83E9hzRErn.jpg",
// //     restaurant: "Burgerverse",
// //     location: "Texas",
// //   },

// //   //https://img.freepik.com/premium-photo/big-tasty-cheeseburger-black-background-with-smoke-close-up_856795-6153.jpg
// // ];

// // const RestoMenu = () => {
// //   return (
// //     <Grid container spacing={3} sx={{ padding: "20px", justifyContent: "center" }}>
// //       {foodItems.map((item, index) => (
// //         <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
// //           <Card
// //             sx={{
// //               maxWidth: 345,
// //               borderRadius: "12px",
// //               boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
// //               transition: "0.3s",
// //               "&:hover": { transform: "scale(1.05)" },
// //             }}
// //           >
// //             <CardMedia component="img" height="200" image={item.image} alt={item.name} />
// //             <CardContent>
// //               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4B0082" }}>
// //                 {item.name}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "8px" }}>
// //                 {item.description}
// //               </Typography>
// //               <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#8B0000" }}>
// //                 ₹{item.price}
// //               </Typography>
// //               <Typography variant="body2" sx={{ fontStyle: "italic", color: "#555", marginBottom: "10px" }}>
// //                 {item.restaurant}, {item.location}
// //               </Typography>
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 sx={{
// //                   backgroundColor: "#9370DB",
// //                   color: "white",
// //                   fontWeight: "bold",
// //                   "&:hover": { backgroundColor: "#7A5DBE" },
// //                 }}
// //               >
// //                 Add to Cart
// //               </Button>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       ))}
// //     </Grid>
// //   );
// // };

// // export default RestoMenu;




// import React from "react";
// import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import {useParams} from "react-router-dom";
// //import {addToCart} from './pages/Cart/addToCart';
// import toast from 'react-hot-toast'
// import {axiosInstance} from '../../config/axiosinstance'

// const RestoMenu = ({menuItem}) => {
//   const navigate = useNavigate();

// //   const handleAddToCart = async () =>{
// //     await addToCart();
// //   };


  
// export const addToCart = async () => {
 
//     try{
//       const response = await axiosinstance({
//         url: "/cart/update",
//         method: "POST",
//       });
  
//       console.log("response===", response);
//       toast.success("Added tocart");
//     } catch (error){
//       console.log(error);
//       toast.error("Failed to add to Cart")
//     }
//   };
  
  
  

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
//       <Card
//         sx={{
//           maxWidth: 400,
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//           textAlign: "center",
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="200"
//           image={menuItem.image}
//           alt={menuItem.name}
//           sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
//         />
//         <CardContent sx={{ backgroundColor: "#F3E5F5" }}>

//    {/* <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4A148C"}}>
//      {foodItems.image}
//     </Typography> */}
            
//           <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4A148C" }}>
//             {menuItem.name}
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#6A1B9A", mt: 1 }}>
//             {menuItem.description}
//           </Typography>
//           <Typography variant="h6" sx={{ color: "#7E57C2", mt: 1, fontWeight: "bold" }}>
//             ₹ {menuItem.price}
//           </Typography>
//           <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2", mt: 1 }}>
//             🍽️ {menuItem.restaurantName}
//           </Typography>
//           <Button
//             onClick={addToCart}
//             sx={{
//               mt: 2,
//               backgroundColor: "#9370DB",
//               color: "white",
//               fontWeight: "bold",
//               "&:hover": { backgroundColor: "#7A5DBE" },
//             }}
//           >
//             Add to Cart
//           </Button>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default RestoMenu;

////99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999

import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//import toast from "react-hot-toast";
import toast, { Toaster } from 'react-hot-toast';
import {axiosInstance} from "../../config/axiosinstance"; // Ensure axios instance is correctly imported


// export const addToCart = async () => {
    const RestoMenu = ({menuItem}) =>{
        
    const navigate = useNavigate();

   
        const params = useParams();
        const {restaurantId} = params;
        console.log("restId....>",restaurantId)
        console.log("MenuItem....>",menuItem)
        const menuItemId = menuItem._id
        console.log("MenuItemID---",menuItemId)

        

 const addToCart = async () =>{

    console.log('Hi---lll')

    let quantity = 1;

  try {
    const response = await axiosInstance({
      url: "/cart/add",
      method: "POST",
      data:{restaurantId,menuItemId,quantity}
    });

    // fetchCartCount();

    console.log("response===++", response);
    toast.success("Added to cart");
  } catch (error) {
    // console.log("Error adding item to cart:", error?.response?.data?.message)
     console.log(error);
    toast.error("Failed to add to Cart");
  }
};

const notify =() => toast('Added to Cart')
const handleAddtoCartClick = () =>{
    
    navigate('/cart');
}


  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={menuItem.image}
          alt={menuItem.name}
          sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        />
        <CardContent sx={{ backgroundColor: "#F3E5F5" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4A148C" }}>
            {menuItem.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#6A1B9A", mt: 1 }}>
            {menuItem.description}
          </Typography>
          <Typography variant="h6" sx={{ color: "#7E57C2", mt: 1, fontWeight: "bold" }}>
            ₹ {menuItem.price}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2", mt: 1 }}>
            🍽️ {menuItem.restaurantName}
          </Typography>
          <Button
            //onClick={notify}
            onClick={addToCart}
            sx={{
              mt: 2,
              backgroundColor: "#9370DB",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#7A5DBE" },
            }}
          >
            Add to Cart
          </Button>
          <Toaster />
        </CardContent>
      </Card>
    </Box>
  );

}
export default RestoMenu;


// import React, { useState, useEffect,useContext } from "react";
// import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
// import { axiosInstance } from "../../config/axiosinstance";
// //import {StoreContext} from '../../components/Context/StoreContext'

// const RestoMenu = ({ menuItem, fetchCartCount=()=>{} }) => {

//     // const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

//   const navigate = useNavigate();
//   const { restaurantId } = useParams();

//   // State for item quantity
//   const [quantity, setQuantity] = useState(0);

//   // Fetch initial quantity from the cart
//   useEffect(() => {
//     fetchCartItem();
//   }, []);

//   const fetchCartItem = async () => {
//     try {
//       const response = await axiosInstance.get("/cart");
//       const cartItems = response.data?.cart?.cartItems || [];
//       const itemInCart = cartItems.find(item => item.menuItemId === menuItem._id);
//       setQuantity(itemInCart ? itemInCart.quantity : 0);
//     } catch (error) {
//       console.error("Error fetching cart item:", error);
//     }
//   };

//   // Add or update cart item
//   const updateCart = async (newQuantity) => {
//     try {
//       await axiosInstance.post("/cart/update", {
//         restaurantId,
//         menuItems: [{ menuItemId: menuItem._id, quantity: newQuantity, price: menuItem.price }],
//       });

//       setQuantity(newQuantity);
//       fetchCartCount(); // Update cart count in header
//       toast.success(newQuantity > 0 ? "Cart updated" : "Removed from cart");
//     } catch (error) {
//       console.error("Error updating cart:", error);
//       console.log("error--",error)
//       toast.error("Failed to update cart");
//     }
//   };

//   // Increase quantity
//   const handleIncrease = () => updateCart(quantity + 1);

//   // Decrease quantity (remove if 1)
//   const handleDecrease = () => {
//     if (quantity > 1) {
//       updateCart(quantity - 1);
//     } else {
//       updateCart(0);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
//       <Card sx={{ maxWidth: 400, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", textAlign: "center" }}>
//         <CardMedia
//           component="img"
//           height="200"
//           image={menuItem.image} 
//           alt={menuItem.name}
//           sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
//         />
//         <CardContent sx={{ backgroundColor: "#F3E5F5" }}>
//           <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4A148C" }}>{menuItem.name}</Typography>
//           <Typography variant="body2" sx={{ color: "#6A1B9A", mt: 1 }}>{menuItem.description}</Typography>
//           <Typography variant="h6" sx={{ color: "#7E57C2", mt: 1, fontWeight: "bold" }}>₹ {menuItem.price}</Typography>
//           <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2", mt: 1 }}>🍽️ {menuItem.restaurantName}</Typography>

//           {quantity > 0 ? (
//             <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
//               <Button onClick={handleDecrease} sx={{ backgroundColor: "#9370DB", color: "white", "&:hover": { backgroundColor: "#7A5DBE" } }}>-</Button>
//               <Typography sx={{ mx: 2 }}>{quantity}</Typography>
//               <Button onClick={handleIncrease} sx={{ backgroundColor: "#9370DB", color: "white", "&:hover": { backgroundColor: "#7A5DBE" } }}>+</Button>
//             </Box>
//           ) : (
//             <Button onClick={handleIncrease} sx={{ mt: 2, backgroundColor: "#9370DB", color: "white", fontWeight: "bold", "&:hover": { backgroundColor: "#7A5DBE" } }}>
//               Add to Cart
//             </Button>
//           )}
          
//           <Toaster />
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default RestoMenu;
