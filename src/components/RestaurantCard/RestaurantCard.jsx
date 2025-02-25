import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import {useNavigate} from "react-router-dom";

// export async function loader() {
//     const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}user/all-restaurants`)
//     const restaurants = await response.json()
//     return { restaurants };
//   }

const RestaurantCard = ({restaurant}) => {
//   const restaurant = {
//     name: "The Gourmet Hub",
//     description: "Delicious multi-cuisine restaurant serving the best dishes in town.",
//     image: "https://i.pinimg.com/originals/c2/c6/4b/c2c64b930af48a341c3adef7c659d36e.png",
//     location: "New York, USA",

    
//   };

  console.log("RestaurantCard==", restaurant)
   const navigate = useNavigate()
  

//   function RestaurantCard(props){
//     const { restaurants } = useLoaderData()

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
              image={restaurant.image}
              alt={restaurant.name}
              sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
            />
            <CardContent sx={{ backgroundColor: "#F3E5F5" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4A148C" }}>
                {restaurant.name}  
              </Typography>
              <Typography variant="body2" sx={{ color: "#6A1B9A", mt: 1 }}>
                {restaurant.description}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2", mt: 1 }}>
                📍 {restaurant.location}
              </Typography>
              <Button onClick={()=>navigate(`/menuItem/all-items/${restaurant?._id}`)}
                sx={{
                  mt: 2,
                  backgroundColor: "#9370DB",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#7A5DBE" },
                }}
              >
                View Menu
              </Button>
            </CardContent>
          </Card>
        </Box>
      );

    }

  


export default RestaurantCard;
