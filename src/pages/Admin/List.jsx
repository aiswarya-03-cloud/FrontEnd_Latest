import React from 'react'
import './List.css'
//import {assets} from '../../assets/assets'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useState, useEffect} from 'react'


const List = ({url}) => {

const [list,setList] = useState([]);


const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/v1/food/list`)
   
    if (response.data.success) {
        setList(response.data.data)
    }
    else{
        toast.error("Error")
    }
}


const removeFood = async(foodId) =>{
    console.log(foodId);

    const response = await axios.post(`${url}/api/v1/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
         toast.success(response.data.message)
    }
    else{
        toast.error("Error")
    }
}

useEffect(()=>{
    fetchList();
},[])




    return (
    <div className='list add flex-col'>
        <p> All Foods List </p>
       <div className='list-table'> 

        <div className='list-table-format title'>

           <b>Image</b>
           <b>Name</b>
           <b>Category</b>
           <b>Price</b>
           <b>Action</b>

        </div>
        {list.map((item,index)=>{
            
            return(
                <div key={index} className='list-table-format' >
                  <img src={`${url}/images/`+item.image} alt='' />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                  <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
                </div>
            )

        
        })}
        </div>

    </div>
    );
  };
  

export default List

/////////////////////////////////////////////////////////




// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
// // import { Edit, Delete } from "@mui/icons-material";

// const foodItems = [
//   {
//     id: 1,
//     name: "Cheddar Cheese Pizza",
//     category: "Pizza",
//     price: 299,
//     image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=",
//   },
//   {
//     id: 2,
//     name: "Bacon Burger",
//     category: "Burger",
//     price: 199,
//     image: "https://img.freepik.com/premium-photo/gourmet-burger-with-cheddar-bacon-lettuce-sauce-wood_908985-51903.jpg",
//   },
//   {
//     id: 3,
//     name: "Pasta Alfredo",
//     category: "Pasta",
//     price: 249,
//     image: "https://img.freepik.com/free-photo/plate-fettuccine-alfredo-with-fresh-parsley_9975-124881.jpg",
//   },
//   {
//     id: 4,
//     name: "Blueberry Freeze",
//     category: "Desert",
//     price: 349,
//     image: "https://media.istockphoto.com/id/1266092554/photo/frozen-yogurt-in-a-heart-shape.jpg?s=612x612&w=0&k=20&c=vik-AAdHquE7u-wVwdzpmQPy7Kund7PlNR_s18m9sIc=",
//   },
// ];

// const FoodListing = () => {
//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: "80%", margin: "auto", mt: 3, boxShadow: 3 }}>
//       <Table>
//         <TableHead sx={{ backgroundColor: "#9370DB" }}>
//           <TableRow>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Image</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price (₹)</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {foodItems.map((food) => (
//             <TableRow key={food.id}>
//               <TableCell>
//                 <img src={food.image} alt={food.name} style={{ width: 70, height: 70, borderRadius: 8 }} />
//               </TableCell>
//               <TableCell>{food.name}</TableCell>
//               <TableCell>{food.category}</TableCell>
//               <TableCell>₹ {food.price}</TableCell>
//               <TableCell>
//                 <Button color="primary" sx={{ minWidth: 30 }}>
//                   {/* <Edit /> */}
//                 </Button>
//                 <Button color="error" sx={{ minWidth: 30 }}>
//                   {/* <Delete /> */}
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default FoodListing;




// import React, { useEffect, useState } from "react";
// import './List.css'
// import axios from 'axios'
// import {toast} from react-taostify;


// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   IconButton,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// const initialFoodItems = [
//   {
//     id: 1,
//     name: "Cheddar Cheese Pizza",
//     category: "Pizza",
//     price: 299,
//     image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=",
//   },
//   {
//     id: 2,
//     name: "Bacon Burger",
//     category: "Burger",
//     price: 199,
//     image: "https://img.freepik.com/premium-photo/gourmet-burger-with-cheddar-bacon-lettuce-sauce-wood_908985-51903.jpg",
//   },
//   {
//     id: 3,
//     name: "Pasta Alfredo",
//     category: "Pasta",
//     price: 249,
//     image: "https://img.freepik.com/free-photo/plate-fettuccine-alfredo-with-fresh-parsley_9975-124881.jpg",
//   },
//   {
//     id: 4,
//     name: "Blueberry Freeze",
//     category: "Dessert",
//     price: 349,
//     image: "https://media.istockphoto.com/id/1266092554/photo/frozen-yogurt-in-a-heart-shape.jpg?s=612x612&w=0&k=20&c=vik-AAdHquE7u-wVwdzpmQPy7Kund7PlNR_s18m9sIc=",
//   },
// ];

// const FoodListing = () => {
//   const [foodItems, setFoodItems] = useState(initialFoodItems);

//   // Function to remove a food item
//   const handleDelete = (id) => {
//     setFoodItems(foodItems.filter((food) => food.id !== id));
//   };

//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: "80%", margin: "auto", mt: 3, boxShadow: 3 }}>
//       <Table>
//         <TableHead sx={{ backgroundColor: "#9370DB" }}>
//           <TableRow>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Image</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price (₹)</TableCell>
//             <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {foodItems.map((food) => (
//             <TableRow key={food.id}>
//               <TableCell>
//                 <img src={food.image} alt={food.name} style={{ width: 70, height: 70, borderRadius: 8 }} />
//               </TableCell>
//               <TableCell>{food.name}</TableCell>
//               <TableCell>{food.category}</TableCell>
//               <TableCell>₹ {food.price}</TableCell>
//               <TableCell>
//                 <IconButton color="error" onClick={() => handleDelete(food.id)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// const List = ()=>{

// const url = "http://localhost:3000"
// const [list,setList] = useState([]);

// const fetchList = async ()=> {

//   const response = await axios.get(`${url}/api/food/list`);
//   console.log(response.data);
//   if(response.data.success){
//     setList(response.data.data);

//   }else{
//     toast.error("Error")
//   }
// }

// useEffect(()=>{
// fetchList();

// },[])

// }

// export default FoodListing;
