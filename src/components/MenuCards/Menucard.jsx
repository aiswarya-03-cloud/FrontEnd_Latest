import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Menucard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/burlgr826rdbqr4lrtjm"
        title="green iguana"
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      
        <p>Rs. 250</p>
        <Button  className="add-to-cart-button">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// export default function Menucard() {
//   return (
//     <Card sx={{ 
//       maxWidth: 350, 
//       borderRadius: '16px', 
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', 
//       transition: 'transform 0.3s ease-in-out', 
//       '&:hover': { transform: 'scale(1.05)' } 
//     }}>
      
//       {/* Restaurant Image */}
//       <CardMedia
//         sx={{ height: 250, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
//         image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/burlgr826rdbqr4lrtjm"
//         title="Delicious Food"
//       />

//       <CardContent sx={{ textAlign: 'center' }}>
        
//         {/* Restaurant Name */}
//         <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
//           The Gourmet Hub
//         </Typography>

//         {/* Food Item Name */}
//         <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }}>
//           Spicy Chicken Burger
//         </Typography>

//         {/* Description */}
//         <Typography variant="body2" sx={{ color: 'gray' }}>
//           A delicious, juicy chicken burger loaded with spicy sauce, fresh lettuce, and soft buns.
//         </Typography>

//       </CardContent>

//       {/* Price & Add to Cart Button */}
//       <CardActions sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
//         <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#444' }}>
//           ₹250
//         </Typography>
        
//         <Button 
//           sx={{ 
//             backgroundColor: '#9370DB', 
//             color: '#fff', 
//             fontWeight: 'bold', 
//             padding: '8px 16px',
//             borderRadius: '8px',
//             '&:hover': { backgroundColor: '#7A5DBE' }
//           }}
//         >
//           Add To Cart
//         </Button>
//       </CardActions>

//     </Card>
//   );
// }



// import React from "react";
// import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

// const foodItems = [
//   {
//     name: "Golden Caramel Delight ",
//     restaurant: "The Gourmet Hub",
//     description: "A rich caramel pudding with a silky texture.",
//     image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=",
//     price: "$12.99",
//   },
//   {
//     name: "Tuscan Herb Pasta",
//     restaurant: "Spice Symphony",
//     description: "Italian-style pasta tossed in a creamy herb sauce.",
//     image: "https://cdn.uengage.io/uploads/5/image-413327-1730100566.jpeg",
//     price: "$9.99",
//   },
//   {
//     name: "Midnight Truffle Pizza",
//     restaurant: "Urban Dine",
//     description: "A luxurious pizza topped with truffle oil and creamy cheese.",
//     image: "https://img.freepik.com/premium-photo/delicate-artistry-sushi-plating-is-showcased_961875-350727.jpg",
//     price: "$18.99",
//   },
//   {
//     name: "Velvet Mocha Mousse ",
//     restaurant: "Tandoori Tales",
//     description: "A smooth and airy coffee-infused chocolate mousse.",
//     image: "https://t4.ftcdn.net/jpg/09/23/34/97/360_F_923349748_OpMCA2WO4YvdBQanI1Gp9AD2GsLZO6Cz.jpg",
//     price: "$14.99",
//   },
//   {
//     name: "Teriyaki Tofu Bliss",
//     restaurant: "Royal Feast",
//     description: "Crispy tofu glazed with homemade teriyaki sauce and sesame seeds.",
//     image: "https://images.mrcook.app/recipe-image/018f60c9-87f4-7dcd-8f57-bf3cd8ef26b4",
//     price: "$7.99",
//   },
//   {
//     name: "Crunchy Fire Poppers",
//     restaurant: "The Italian Corner",
//     description: "Spicy jalapeño and cheese poppers with a crispy golden crust.",
//     image: "https://media.istockphoto.com/id/494030288/photo/italian-fettuccine-alfredo-pasta.jpg?s=612x612&w=0&k=20&c=gnTyoRm5KbD6O9EfDXm8sFPGZtvHBr85SD52u71qK7Y=",
//     price: "$11.99",
//   },
// ];

// const MenuCards = () => {
//   return (
//     <Box sx={{ width: "100%", margin: "auto", padding: "20px" }}>
//       <Grid container spacing={3} justifyContent="center">
//         {foodItems.map((food, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 borderRadius: "15px",
//                 boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
//                 overflow: "hidden",
//                 width: "100%",  // Make the card take full width of the grid cell
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="300"  // Adjusted to fit the full width
//                 image={food.image}
//                 alt={food.name}
//                 sx={{ objectFit: "cover", width: "100%" }}  // Ensures the image spans the full width of the card
//               />
//               <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A148C" }}>
//                   {food.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
//                   {food.description}
//                 </Typography>
//                 <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
//                   🏬 {food.restaurant}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2E7D32", mt: 1 }}>
//                   {food.price}
//                 </Typography>
//                 <Button
//                   sx={{
//                     mt: 2,
//                     backgroundColor: "#9370DB",
//                     color: "white",
//                     fontWeight: "bold",
//                     width: "100%",
//                     borderRadius: "8px",
//                     "&:hover": { backgroundColor: "#7A5DBE" },
//                   }}
//                 >
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default MenuCards;






//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

