import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import axios from "axios";

const RestoMenuCard = () => {
//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     const fetchRestaurantData = async () => {
//       try {
//         const response = await axios.get("/api/restaurant"); // Replace with actual backend API
//         setRestaurant(response.data.restaurant);
//       } catch (error) {
//         console.error("Error fetching restaurant data:", error);
//       }
//     };

//     fetchRestaurantData();
//   }, []);     

//   if (!restaurant) {
//     return <Typography>Loading...</Typography>;
//   }

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", padding: "20px" }}>
      {/* Restaurant Image */}
      <CardMedia component="img" height="300" image={restaurant.image} alt={restaurant.name} />

      <CardContent>
        {/* Restaurant Details */} 
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4B0082" }}> 
          {restaurant.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ marginBottom: "10px" }}>
          {restaurant.description}
        </Typography>
        <Typography variant="h6" sx={{ color: "#8B0000", marginBottom: "15px" }}>
          📍 Location: {restaurant.location}
        </Typography>

        {/* Menu Items Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
          🍔 Menu Items
        </Typography>
        <Grid container spacing={2}>
          {restaurant.menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={6} key={item._id}>
              <Card sx={{ borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2E3B55" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#D2691E" }}>
                    💰 Price: ${item.price}
                  </Typography>
                  <Button fullWidth variant="contained" sx={{ marginTop: "10px", backgroundColor: "#9370DB", color: "white", "&:hover": { backgroundColor: "#7A5DBE" } }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RestoMenuCard;
