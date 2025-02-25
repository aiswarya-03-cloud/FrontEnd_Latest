import React from 'react'
import './ViewMenu.css'
//import Menucard from '../../components/MenuCards/Menucard'
import MenuScroller from '../../components/Scrollbar/Scrollbar'
//import {menu_list} from '../../assets/assets'

import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

const foodItems = [
  {
    name: "Golden Caramel Delight",
    restaurant: "The Gourmet Hub",
    description: "A rich caramel pudding with a silky texture.",
    image: "https://img.freepik.com/premium-photo/tempting-apple-pie-ice-cream-sundae-with-caramel-drizzle_1272857-96843.jpg",
    price: "$12.99",
  },
  {
    name: "Tropical Sunset Smoothie",
    restaurant: "Spice Symphony",
    description: " A refreshing blend of mango, pineapple, and coconut milk.",
    image: "https://img.freepik.com/premium-photo/energizing-acai-bowl_1170794-47270.jpg",
    price: "$9.99",
  },
  {
    name: "Sunset Berry Swirl",
    restaurant: "Urban Dine",
    description: "A creamy strawberry and mango cheesecake with a golden crust.",
    image: "https://img.freepik.com/premium-photo/close-up-photo-cupcakes-with-strawberries-blueberries-plate_908985-51407.jpg",
    price: "$18.99",
  },
  {
    name: "Velvet Mocha Mousse",
    restaurant: "Tandoori Tales",
    description: "A smooth and airy coffee-infused chocolate mousse.",
    image: "https://media.istockphoto.com/id/535412577/photo/homemade-dark-chocolate-mousse.jpg?s=612x612&w=0&k=20&c=PFtxGD_jeHWHrCFdA50GUUKIPHw_U5FGGLOc5EHBBLs=",
    price: "$14.99",
  },
  {
    name: "Teriyaki Tofu Bliss",
    restaurant: "Royal Feast",
    description: "Crispy tofu glazed with homemade teriyaki sauce and sesame seeds.",
    image: "https://s.lightorangebean.com/media/20240914150222/Tofu-and-Mushroom-Delight_done.png",
    price: "$7.99",
  },
  {
    name: "Firecracker Tempura Rolls",
    restaurant: "The Italian Corner",
    description: "Crispy tempura sushi rolls drizzled with spicy mayo",
    image: "https://img.freepik.com/premium-photo/tantalizing-array-neat-sushi-rolls_961875-109500.jpg",
    price: "$11.99",
  },
];


const ViewMenu = () => {



  //  return (
//     <div className='flex fle-col items-center justify-start px-20 py-16'>
  
//       <section className='grid grid-rows-4 grid-cols-4 gap-y-10 w-full'>

// <Menucard />
// <Menucard />
// <Menucard />
// <Menucard />

//       </section>
       
          
//     </div>

// <div className='explore-menu' id='explore-menu'>
//    <h1>Explore Our Menu</h1>
//    <p>Embark on a culinary journey with our diverse menu, showcasing a symphony of flavors crafted from the finest local ingredients to tantalize your taste buds.</p>
//    {/* <div className='explore-menu-list'> */}
  
      return(

        
        <>

          
 <div className='explore-menu' id='explore-menu'>
 <h1 className="top-restaurants-title">Explore Our Menu</h1>
    {/* <p>Embark on a culinary journey with our diverse menu, showcasing a symphony of flavors crafted from the finest local ingredients to tantalize your taste buds.</p> */}
      </div>
       
      <div className='mt-8 mb-4'>
      <MenuScroller />
      </div>
       
      

        <div className='explore-menu-list-item'>
          <img src="https://via.placeholder.com/150" alt="" />
          
        </div>

        <h1 className="top-restaurants-title">Hot Picks Flying Off the Menu!</h1>

     <div className='flex fle-col items-center justify-start px-20 py-16 mt-8 mb-3'>
  
     <section className="grid grid-rows-4 grid-cols-4 gap-y-10 w-full">
  
   {/* <Menucard /> */}

   {/* #E6E6FA */}

   {/* <Box sx={{ width: "100vw", minHeight: "100vh", padding: "40px"}}>   
    
      <Grid container spacing={4} justifyContent="center">
        {foodItems.map((food, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "15px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                overflow: "hidden",
                backgroundColor: "#D8BFD8", // Solid Lavender color
                maxWidth: "350px",
                margin: "auto",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={food.image}
                alt={food.name}
                sx={{ objectFit: "cover", width: "100%" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4B0082" }}>
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
                    color: "black",
                    fontWeight: "bold",
                    width: "100%",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#7A5DBE" },
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box> */}




<Box
      sx={{
        width: "100vw",
        height: "100vh",
        padding: "20px",
       
        overflowX: "auto", // Enables horizontal scrolling
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px", // Adds spacing between cards
          paddingBottom: "20px",
        }}
      >
        {foodItems.map((food, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "15px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
              overflow: "hidden",
              backgroundColor: "#D8BFD8", // Solid Lavender color
              minWidth: "300px", // Ensures proper spacing in scroll
              maxWidth: "320px",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={food.image}
              alt={food.name}
              sx={{ objectFit: "cover", width: "100%" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4B0082" }}>
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
              {/* <Button
                sx={{
                  mt: 2,
                  backgroundColor: "#9370DB",
                  color: "white",
                  fontWeight: "bold",
                  width: "100%",
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#7A5DBE" },
                }}
              >
                Add to Cart
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
   




  
         </section>
         
            
       </div>
  
    </>

    

)}
  //  )



  

export default ViewMenu