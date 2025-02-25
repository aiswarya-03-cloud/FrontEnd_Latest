import React, { useRef } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const foodItems = [
  {
    name: "Cheesy Margherita Pizza",
    restaurant: "The Gourmet Hub",
    description: "Classic margherita pizza with fresh mozzarella and basil.",
    image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=",
    price: "$12.99",
  },
  {
    name: "Spicy Chicken Wings",
    restaurant: "Spice Symphony",
    description: "Crispy fried wings tossed in spicy buffalo sauce.",
    image: "https://cdn.uengage.io/uploads/5/image-413327-1730100566.jpeg",
    price: "$9.99",
  },
  {
    name: "Sushi Platter",
    restaurant: "Urban Dine",
    description: "An assortment of fresh sushi rolls and sashimi.",
    image: "https://img.freepik.com/premium-photo/delicate-artistry-sushi-plating-is-showcased_961875-350727.jpg",
    price: "$18.99",
  },
  {
    name: "Lamb Biryani",
    restaurant: "Tandoori Tales",
    description: "Authentic Indian biryani cooked with fragrant spices.",
    image: "https://t4.ftcdn.net/jpg/09/23/34/97/360_F_923349748_OpMCA2WO4YvdBQanI1Gp9AD2GsLZO6Cz.jpg",
    price: "$14.99",
  },
  {
    name: "Chocolate Lava Cake",
    restaurant: "Royal Feast",
    description: "Decadent molten chocolate cake with a gooey center.",
    image: "https://images.mrcook.app/recipe-image/018f60c9-87f4-7dcd-8f57-bf3cd8ef26b4",
    price: "$7.99",
  },
];

const FoodScroller = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "90%", margin: "auto", overflow: "hidden", padding: "20px" }}>
      
      {/* Small Left Scroll Button */}
      <IconButton
        sx={{
          position: "absolute",
          left: "-5px",
          top: "50%",
          transform: "translateY(-50%) scale(0.7)", // Smaller button
          backgroundColor: "#9370DB",
          color: "white",
          width: "30px",
          height: "30px",
          "&:hover": { backgroundColor: "#7A5DBE" },
        }}
        onClick={() => scroll("left")}
      >
        <ArrowBackIos fontSize="small" />
      </IconButton>

      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          paddingBottom: "10px",
        }}
      >
        {foodItems.map((food, index) => (
          <Card key={index} sx={{ minWidth: "300px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <CardMedia component="img" height="180" image={food.image} alt={food.name} />
            {/* <CardMedia component="img" height="180" img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chocolate-molten-cakes-37a25eb.jpg" alt={food.name} /> */}
            <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A148C" }}>
                {food.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6A1B9A", mb: 1 }}>
                {food.description}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "#7E57C2" }}>
                🏬 {food.restaurant}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2E7D32", mt: 1 }}>
                {food.price}
              </Typography>
              <Button
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
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Small Right Scroll Button */}
      <IconButton
        sx={{
          position: "absolute",
          right: "-5px",
          top: "50%",
          transform: "translateY(-50%) scale(0.7)", // Smaller button
          backgroundColor: "#9370DB",
          color: "white",
          width: "30px",
          height: "30px",
          "&:hover": { backgroundColor: "#7A5DBE" },
        }}
        onClick={() => scroll("right")}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default FoodScroller;
