// import React, { useState, useEffect, useRef } from "react";
// import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, CircularProgress } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import axios from "axios";

// const RestaurantScroller = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const scrollRef = useRef(null);


//   // Fetch restaurant data from backend
//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/v1/restaurant/all-restaurants"); // Replace with actual API URL
//         setRestaurants(response.data);
//         console.log("Rest---",response.data )
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load restaurant data.");
//         setLoading(false);
//       }
//     };
//     fetchRestaurants();
//   }, []);

//   // Scroll Function
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 350;
//       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <Box sx={{ position: "relative", width: "90%", margin: "auto", overflow: "hidden", padding: "20px" }}>
      
//       {/* Small & Subtle Scroll Left Button */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           left: "5px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "rgba(147, 112, 219, 0.5)", // Faded Lavender
//           color: "white",
//           width: "24px",
//           height: "24px",
//           minWidth: "24px",
//           "&:hover": { backgroundColor: "rgba(122, 93, 190, 0.7)" },
//         }}
//         onClick={() => scroll("left")}
//       >
//         <ArrowBackIos sx={{ fontSize: "16px" }} />
//       </IconButton>

//       {/* Handle Loading & Error States */}
//       {loading ? (
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
//           <CircularProgress color="secondary" />
//         </Box>
//       ) : error ? (
//         <Typography variant="h6" color="error" textAlign="center">
//           {error}
//         </Typography>
//       ) : (
//         <Box
//           ref={scrollRef}
//           sx={{
//             display: "flex",
//             gap: "20px",
//             overflowX: "auto",
//             scrollBehavior: "smooth",
//             scrollbarWidth: "none",
//             "&::-webkit-scrollbar": { display: "none" },
//             paddingBottom: "10px",
//           }}
//         >
//           {restaurants.map((restaurant) => (
//             <Card key={restaurant.id} sx={{ minWidth: "300px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
//               <CardMedia component="img" height="180" image={restaurant.image} alt={restaurant.name} />
//               <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#4A148C" }}>
//                   {restaurant.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
//                   {restaurant.description}
//                 </Typography>
//                 <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
//                   📍 {restaurant.location}
//                 </Typography>
//                 <Button
//                   sx={{
//                     mt: 2,
//                     backgroundColor: "#9370DB",
//                     color: "white",
//                     fontWeight: "bold",
//                     "&:hover": { backgroundColor: "#7A5DBE" },
//                   }}
//                 >
//                   View Menu
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       )}

//       {/* Small & Subtle Scroll Right Button */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           right: "5px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "rgba(147, 112, 219, 0.5)", // Faded Lavender
//           color: "white",
//           width: "24px",
//           height: "24px",
//           minWidth: "24px",
//           "&:hover": { backgroundColor: "rgba(122, 93, 190, 0.7)" },
//         }}
//         onClick={() => scroll("right")}
//       >
//         <ArrowForwardIos sx={{ fontSize: "16px" }} />
//       </IconButton>
//     </Box>
//   );
// };

// export default RestaurantScroller;





// import React from "react";
// import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import { useRef } from "react";
// import {useNavigate} from 'react-router-dom'

// const restaurants = [
//   {
//     name: "The Gourmet Hub",
//     description: "Delicious multi-cuisine restaurant serving the best dishes in town.",
//     image: "https://i.pinimg.com/originals/c2/c6/4b/c2c64b930af48a341c3adef7c659d36e.png",
//     location: "New York, USA",
//   },
//   {
//     name: "Spice Symphony",
//     description: "A blend of traditional and modern flavors that tantalize your taste buds.",
//     image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
//     location: "Los Angeles, USA",
//   },
//   {
//     name: "Urban Dine",
//     description: "Casual dining with a cozy ambiance and great service.",
//     image: "https://t4.ftcdn.net/jpg/06/18/58/67/360_F_618586765_CFy4IlTj38WLxbmAqhWp8YEngs2THYke.jpg",
//     location: "Chicago, USA",
//   },
//   {
//     name: "Royal Feast",
//     description: "Experience the taste of royalty with our exotic dishes.",
//     image: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-restaurant-and-bar-with-gorgeous-view-city-restaurant-view-bar.jpg",
//     location: "Houston, USA",
//   },
//   {
//     name: "Tandoori Tales",
//     description: "Authentic Indian flavors cooked in a traditional clay oven.",
//     image: "https://static.vecteezy.com/system/resources/thumbnails/036/325/137/small_2x/ai-generated-twilight-ambiance-on-a-cozy-balcony-with-lights-free-photo.jpg",
//     location: "San Francisco, USA",
//   },
// ];




// 123333333333333333333333333333333333333333333





// const RestaurantScroller = ({restaurant}) => {
//   const scrollRef = useRef(null);

//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 350;
//       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//     }
//   };




//   return (
//     <Box sx={{ position: "relative", width: "90%", margin: "auto", overflow: "hidden", padding: "20px" }}>
      
//       {/* Small Left Scroll Button */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           left: "-5px",
//           top: "50%",
//           transform: "translateY(-50%) scale(0.7)", // Makes the button smaller
//           backgroundColor: "#9370DB",
//           color: "white",
//           width: "30px", // Decrease width
//           height: "30px", // Decrease height
//           "&:hover": { backgroundColor: "#7A5DBE" },
//         }}
//         onClick={() => scroll("left")}
//       >
//         <ArrowBackIos fontSize="small" /> {/* Makes the arrow itself smaller */}
//       </IconButton>

//       {/* Scrollable Container */}
//       <Box
//         ref={scrollRef}
//         sx={{
//           display: "flex",
//           gap: "20px",
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": { display: "none" },
//           paddingBottom: "10px",
//         }}
//       >
//         {/* {restaurants.map((restaurant, index) => ( */}
//           <Card  sx={{ minWidth: "300px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
//              <CardMedia component="img" height="180" image={restaurant.image} alt={restaurant.name} />
//             {/* <CardMedia component="img" height="180" img src= "https://i.pinimg.com/originals/c2/c6/4b/c2c64b930af48a341c3adef7c659d36e.png"  /> */}
//             <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A148C" }}>
//                 {restaurant.name}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
//                 {restaurant.description}
//               </Typography>
//               <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
//                 📍 {restaurant.location}
//               </Typography>
//               <Button
//               sx={{
//                 mt: 2,
//                 backgroundColor: "#9370DB",
//                 color: "white",
//                 fontWeight: "bold",
//                 "&:hover": { backgroundColor: "#7A5DBE" },
//               }}
//               onClick={()=>navigate(`/menuItem/all-items/${restaurant?._id}`)}  // Navigate on click
//             >
//               View Menu
//             </Button>
//             </CardContent>
//           </Card>
//         {/* ))} */}
//       </Box>

//       {/* Small Right Scroll Button */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           right: "-5px",
//           top: "50%",
//           transform: "translateY(-50%) scale(0.7)", // Makes the button smaller
//           backgroundColor: "#9370DB",
//           color: "white",
//           width: "30px", // Decrease width
//           height: "30px", // Decrease height
//           "&:hover": { backgroundColor: "#7A5DBE" },
//         }}
//         onClick={() => scroll("right")}
//       >
//         <ArrowForwardIos fontSize="small" /> {/* Makes the arrow itself smaller */}
//       </IconButton>
//     </Box>
//   );
// };

// export default RestaurantScroller;

// 7777777777777777777777777777777777777777777777777777777777777777777

// import React, { useRef } from "react";
// import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// const RestaurantScroller = ({ restaurant }) => {
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 350;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <Box sx={{ position: "relative", width: "90%", margin: "auto", overflow: "hidden", padding: "20px" }}>
//       {/* Left Scroll Button - Appears at the start */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           left: "-30px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "#9370DB",
//           color: "white",
//           width: "40px",
//           height: "40px",
//           zIndex: 2,
//           display: restaurant.length > 3 ? "block" : "none", // Hide if few items
//           "&:hover": { backgroundColor: "#7A5DBE" },
//         }}
//         onClick={() => scroll("left")}
//       >
//         <ArrowBackIos fontSize="small" />
//       </IconButton>

//       {/* Scrollable Container */}
//       <Box
//         ref={scrollRef}
//         sx={{
//           display: "flex",
//           gap: "10px", // Reduce gap between items
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": { display: "none" },
//           paddingBottom: "10px",
//         }}
//       >
//         {/* {restaurants.map((restaurant) => ( */}
//           <Card  sx={{ minWidth: "300px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
//             <CardMedia component="img" height="180" image={restaurant.image} alt={restaurant.name} />
//             <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A148C" }}>
//                 {restaurant.name}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
//                 {restaurant.description}
//               </Typography>
//               <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
//                 📍 {restaurant.location}
//               </Typography>
//               <Button
//                 sx={{
//                   mt: 2,
//                   backgroundColor: "#9370DB",
//                   color: "white",
//                   fontWeight: "bold",
//                   "&:hover": { backgroundColor: "#7A5DBE" },
//                 }}
//                 onClick={() => navigate(`/menuItem/all-items/${restaurant?._id}`)}
//               >
//                 View Menu
//               </Button>
//             </CardContent>
//           </Card>
//         {/* ))} */}
//       </Box>

//       {/* Right Scroll Button - Appears at the end */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           right: "-30px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "#9370DB",
//           color: "white",
//           width: "40px",
//           height: "40px",
//           zIndex: 2,
//           display: restaurant.length > 3 ? "block" : "none", // Hide if few items
//           "&:hover": { backgroundColor: "#7A5DBE" },
//         }}
//         onClick={() => scroll("right")}
//       >
//         <ArrowForwardIos fontSize="small" />
//       </IconButton>
//     </Box>
//   );
// };

// export default RestaurantScroller;




// import React, { useRef } from "react";
// import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

// const RestaurantScroller = ({ restaurantList = [] }) => {
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 350;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <Box sx={{ position: "relative", width: "90%", margin: "auto", overflow: "hidden", padding: "20px" }}>
    
      
//       {/* Left Scroll Button (Shown only when needed) */}
//       {restaurantList.length > 3 && (
//         <IconButton
//           sx={{
//             position: "absolute",
//             left: 0,
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "#9370DB",
//             color: "white",
//             width: "40px",
//             height: "40px",
//             zIndex: 2,
//             "&:hover": { backgroundColor: "#7A5DBE" },
//           }}
//           onClick={() => scroll("left")}
//         >
//           <ArrowBackIos />
//         </IconButton>
//       )}

//       {/* Scrollable Container */}
//       <Box
//         ref={scrollRef}
//         sx={{
//           display: "flex",
//           gap: "0px", // Remove large gaps between cards
//           overflowX: "auto",
//           scrollBehavior: "smooth",
//           scrollbarWidth: "none",
//           "&::-webkit-scrollbar": { display: "none" },
//           paddingBottom: "10px",
//           whiteSpace: "nowrap", // Ensure no wrapping
//         }}
//       >
//         {restaurantList.map((restaurant) => (
//           <Card
//             key={restaurant?._id}
//             sx={{
//               minWidth: "300px",
//               borderRadius: "12px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//               marginRight: "10px", // Small margin for smooth layout
//             }}
//           >
//             <CardMedia component="img" height="180" image={restaurant?.image || "default-image.jpg"} alt={restaurant?.name} />
//             <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A148C" }}>
//                 {restaurant?.name}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
//                 {restaurant?.description}
//               </Typography>
//               <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
//                 📍 {restaurant?.location}
//               </Typography>
//               <Button
//                 sx={{
//                   mt: 2,
//                   backgroundColor: "#9370DB",
//                   color: "white",
//                   fontWeight: "bold",
//                   "&:hover": { backgroundColor: "#7A5DBE" },
//                 }}
//                 onClick={() => navigate(`/menuItem/all-items/${restaurant?._id}`)}
//               >
//                 View Menu
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>

//       {/* Right Scroll Button (Shown only when needed) */}
//       {restaurantList.length > 3 && (
//         <IconButton
//           sx={{
//             position: "absolute",
//             right: 0,
//             top: "50%",
//             transform: "translateY(-50%)",
//             backgroundColor: "#9370DB",
//             color: "white",
//             width: "40px",
//             height: "40px",
//             zIndex: 2,
//             "&:hover": { backgroundColor: "#7A5DBE" },
//           }}
//           onClick={() => scroll("right")}
//         >
//           <ArrowForwardIos />
//         </IconButton>
//       )}
//     </Box>
//   );
// };

// export default RestaurantScroller;

/// NEWWWWWWWWWWWWWWWWW


import React, { useRef } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const RestaurantScroller = ({ restaurantList = [] }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.5; // Scroll half screen width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100vw", margin: "auto", overflow: "hidden", padding: "20px" }}>
      {/* Left Scroll Button */}
      {restaurantList.length > 3 && (
        <IconButton
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#9370DB",
            color: "white",
            width: "40px",
            height: "40px",
            zIndex: 2,
            "&:hover": { backgroundColor: "#7A5DBE" },
          }}
          onClick={() => scroll("left")}
        >
          <ArrowBackIos />
        </IconButton>
      )}

      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingBottom: "10px",
          whiteSpace: "nowrap",
        }}
      >
        {restaurantList.map((restaurant) => (
          <Card
            key={restaurant?._id}
            sx={{
              flex: "0 0 calc(25% - 10px)", // Each card takes 25% of screen width
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              marginRight: "10px",
              backgroundColor: "#F3E5F5",
            }}
          >
            <CardMedia component="img" height="220" image={restaurant?.image || "default-image.jpg"} alt={restaurant?.name} />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A148C" }}>
                {restaurant?.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
                {restaurant?.description}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
                📍 {restaurant?.location}
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  backgroundColor: "#9370DB",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#7A5DBE" },
                }}
                onClick={() => navigate(`/menuItem/all-items/${restaurant?._id}`)}
              >
                View Menu
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Right Scroll Button */}
      {restaurantList.length > 3 && (
        <IconButton
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#9370DB",
            color: "white",
            width: "40px",
            height: "40px",
            zIndex: 2,
            "&:hover": { backgroundColor: "#7A5DBE" },
          }}
          onClick={() => scroll("right")}
        >
          <ArrowForwardIos />
        </IconButton>
      )}
    </Box>
  );
};

export default RestaurantScroller;
