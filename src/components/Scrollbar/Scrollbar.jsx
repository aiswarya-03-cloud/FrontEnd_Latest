// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const foodItems = [
//   { name: "Pizza", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Burger", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Pasta", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Sushi", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Salad", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Tacos", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Sandwich", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Steak", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Ramen", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Dumplings", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
//   { name: "Biryani", img: "https://p.turbosquid.com/ts-thumb/8C/WbHdGh/3L/i1/jpg/1645375276/1920x1080/fit_q87/1784abceb94cbb3ed81c6e386ea7c472849639fa/i1.jpg" },
// ];

// export default function MenuScroller() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 200; // Adjust scrolling distance
//       scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//     }
//   };

// //   const handleClick = (foodName) => {
// //     navigate(`/food/${foodName.toLowerCase()}`);
// //   };


//   return (
//     <div className="w-full flex items-center overflow-hidden p-4">
//       <button onClick={() => scroll("left")} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
//         <ChevronLeft size={24} />
//       </button>
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto scroll-smooth no-scrollbar mx-4 space-x-4 p-2"
//         style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
//       >
//         {foodItems.map((item, index) => (
         
//          <Link key={index} to={`/food/${item.name.toLowerCase()}`} className="min-w-[140px] p-3 bg-white rounded-xl shadow-md text-center cursor-pointer">
//          <img src={item.img} alt={item.name} className="w-full h-24 object-cover rounded-md" />
//          <p className="font-medium text-gray-700 mt-2">{item.name}</p>
//        </Link>

         
//         ))}



//       </div>
//       <button onClick={() => scroll("right")} className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
//         <ChevronRight size={24} />
//       </button>



     
//     </div>
      
  


    
//   );
// }



// 455%%%%%%%%%%%%%%%%%%%



import React, { useRef } from "react";
import { Box, IconButton, CardMedia } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const menuItems = [
  "https://img.freepik.com/premium-photo/fresh-vegetarian-salad-made-vegetables-black-background-proper-nutrition-top-view-no-people-horizontal-high-quality-photo_322022-664.jpg",
  "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_640.jpg",
  "https://img.freepik.com/premium-photo/italian-pizza-illustration-with-ingredients_7023-496579.jpg",
  "https://img.freepik.com/premium-psd/roasted-chicken-black-plate-top-view-transparent-background_220739-110989.jpg",
  "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg",
  "https://www.modernhoney.com/wp-content/uploads/2018/08/Homemade-Chocolate-Ice-Cream-1.jpg",
  "https://static.vecteezy.com/system/resources/previews/026/742/846/non_2x/foodgraphy-of-miso-soup-on-black-bowl-isolated-on-dark-background-generative-ai-free-photo.jpg",
  "https://img.freepik.com/premium-photo/hot-cappuccino-coffee_758367-5219.jpg?w=360",
  "https://img.freepik.com/premium-photo/top-view-chinese-fried-rice-black-background-concept-chinese-cuisine-fried-rice-food-photography-black-background-top-view_864588-44056.jpg",
  "https://source.unsplash.com/200x200/?icecream",
];

const MenuScroller = ({category, setCategory}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220; // Adjust based on image width
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "90%", margin: "auto", overflow: "hidden", padding: "10px" }}>
      
      {/* Small Left Scroll Button */}
      <IconButton
        sx={{
          position: "absolute",
          left: "-5px",
          top: "50%",
          transform: "translateY(-50%) scale(0.6)", // Smaller button
          backgroundColor: "#E6E6FA", // Lavender
          color: "#6A1B9A",
          width: "25px",
          height: "25px",
          "&:hover": { backgroundColor: "#D8BFD8" },
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
          gap: "15px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "10px 0",
        }}
      >
        {menuItems.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            // onClick={()=>setCategory(prev=>prev==image?"All": "")}
           image={image}
           
           
            alt={`Menu item ${index + 1}`}
            sx={{
              width: "150px", // Adjusted size for circular images
              height: "150px", // Adjusted size for circular images
              borderRadius: "50%", // Makes the image circular
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              objectFit: "cover", // Ensures the image covers the circle area
            }}
          />
        ))}
      </Box>

      {/* Small Right Scroll Button */}
      <IconButton
        sx={{
          position: "absolute",
          right: "-5px",
          top: "50%",
          transform: "translateY(-50%) scale(0.6)", // Smaller button
          backgroundColor: "#E6E6FA", // Lavender
          color: "#6A1B9A",
          width: "25px",
          height: "25px",
          "&:hover": { backgroundColor: "#D8BFD8" },
        }}
        onClick={() => scroll("right")}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default MenuScroller;
