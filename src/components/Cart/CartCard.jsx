// import React from "react";
// //npx shadcn-ui@latest add button

// import { Button } from "@mui/material";
// //import { Card, CardContent } from "@/components/ui/card";
// import { Card, CardContent } from "@mui/material";
// import { Trash2 } from "lucide-react";

// const CartCard = ({ item, onCheckout, handleRemove }) => {

//     console.log("Items========>",item)
//   //const totalPrice = item.reduce((total, item) => total + item.price * item.quantity, 0);
// //   const totalPrice = item.price * item.quantity;


//   return (

    
//     <div className="min-h-screen bg-gradient-to-b from-[#b19cd9] to-[#f5e6fe] text-black p-6 flex justify-center items-center">
//       <div className="max-w-3xl w-full text-center">
//         <h2 className="text-3xl font-bold text-black mb-6">Your Cart</h2>

        
        
//         {/* {cartItems.length === 0 ? (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         ) : ( */}
//           <div className="space-y-4 flex flex-col items-center">

              
            
//               <Card key={item.id} className="flex items-center w-full max-w-lg p-3 shadow-md bg-white rounded-lg border border-gray-300">

             
//                 <img 
//                   src={item.menuItem.image}
//                   alt={item.menuItem.name}
//                   className="w-24 h-24  rounded-lg border border-gray-400"
//                 />
//                 <CardContent className="flex-1 ml-6 text-left">
//                   <h3 className="text-md font-semibold text-black">{item.menuItem.name}</h3>
//                   <p className="text-gray-700 text-sm">${item.menuItem.price} x {item.menuItem.quantity}</p>
//                 </CardContent>
//                 <button onClick={() => {handleRemove(item?.menuItem?._id)}}
                  
//                   className="bg-[#b19cd9] text-black p-2 rounded-full hover:bg-[#a191c0] shadow-lg border border-black transition-transform transform hover:scale-110"
//                 >
//                   <Trash2 size={18} />
//                 </button>
//               </Card>
         
//           </div>
        

//         {/* Checkout Section */}
       
//           <div className="mt-8 p-5 bg-black text-white rounded-lg shadow-lg text-center">
//             {/* <div className="flex justify-between text-lg font-semibold">
//               <span>Total:</span>
//               <span>${totalPrice.toFixed(2)}</span>
//             </div> */}
//             <Button
//               onClick={onCheckout}
//               sx={{ width: "100%", mt: 2, backgroundColor: "#b19cd9", '&:hover': { backgroundColor: "#a191c0" }, color: "black", fontWeight: "bold", borderRadius: "8px", padding: "10px" }}
//             >
//               Proceed to Checkout
//             </Button>
//           </div>
        
//       </div>
//     </div>
//   );
// };

// export default CartCard;



// import React from "react";
// import { Button, Card, CardContent } from "@mui/material";
// import { Trash2 } from "lucide-react";

// const CartCard = ({ item, onCheckout, handleRemove }) => {

//   console.log("Items========>",item);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#b19cd9] to-[#f5e6fe] text-black p-6 flex justify-center items-center">
//       <div className="max-w-3xl w-full text-center">
//         <h2 className="text-3xl font-bold text-black mb-6">Your Cart</h2>

//         <div className="space-y-4 flex flex-col items-center">
//           {/* {item.map((currentItem) => ( */}
//             <Card key={item.menuItem._id} className="flex items-center w-full max-w-lg p-3 shadow-md bg-white rounded-lg border border-gray-300">
//               <img 
//                 src={item.menuItem.image}
//                 alt={item.menuItem.name}
//                 className="w-24 h-24 rounded-lg border border-gray-400"
//               />
//               <CardContent className="flex-1 ml-6 text-left">
//                 <h3 className="text-md font-semibold text-black">{item.menuItem.name}</h3>
//                 <p className="text-gray-700 text-sm">${item.menuItem.price} x {item.menuItem.quantity}</p>
//               </CardContent>
//               <button onClick={() => {handleRemove(item?.menuItem?._id)}}
//                 className="bg-[#b19cd9] text-black p-2 rounded-full hover:bg-[#a191c0] shadow-lg border border-black transition-transform transform hover:scale-110"
//               >
//                 <Trash2 size={18} />
//               </button>
//             </Card>
//           {/* ))} */}
//         </div>

//         {/* Total Price Section */}
//         <div className="mt-8 p-5 bg-white rounded-lg shadow-lg text-center border border-gray-300">
         
//           <Button
//             onClick={onCheckout}
//             sx={{ width: "100%", backgroundColor: "#b19cd9", '&:hover': { backgroundColor: "#a191c0" }, color: "black", fontWeight: "bold", borderRadius: "8px", padding: "10px" }}
//           >
//             Proceed to Checkout
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartCard;

///ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Trash2 } from "lucide-react";

// export default function CartCard({ item, onCheckout, handleRemove }) {

//     console.log("Items========>",item);

//     // bg-gradient-to-b from-black to-[#0a192f] p-4
//   return (
//     <div className="bg-gradient-to-b from-black to-[#0a192f] p-4">
//      <div className="flex flex-wrap justify-center">
//     <Card sx={{ maxWidth: 375 }} className="shadow-lg my-12 mx-12">
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image= {item.menuItem.image}
        
//         />
      
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         {item.menuItem.name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//         {item.menuItem.description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small"> {item.menuItem.price}</Button>
//         <Button size="small"> {item.menuItem.quantity}</Button>
//         <button onClick={() => {handleRemove(item?.menuItem?._id)}}
//                 className="bg-[#b19cd9] text-black p-2 rounded-full hover:bg-[#a191c0] shadow-lg border border-black transition-transform transform hover:scale-110"
//               >
//                 <Trash2 size={18} />
//          </button>
//       </CardActions>
//     </Card>
//     </div>
//     </div>
//   );
// }




import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Trash2 } from "lucide-react";

export default function CartTable({ item, handleRemove }) {
  return (

    
    <div className=" bg-gradient-to-b from-black to-[#0a192f] p-8 flex justify-center">
      <div className="w-full max-w-5xl">
      
        <table className="w-full border border-gray-700 text-white border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-800 text-left">
            <tr>
              <th className="p-4 border border-gray-700 w-1/5 text-center">Item Image</th>
              <th className="p-4 border border-gray-700 w-1/5 text-center">Name</th>
              <th className="p-4 border border-gray-700 w-1/5 text-center">Price</th>
              {/* <th className="p-4 border border-gray-700 w-1/5 text-center">Quantity</th> */}
              <th className="p-4 border border-gray-700 w-1/5 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* {cartItems.map((item) => ( */}
              <tr key={item.menuItem._id} className="bg-gray-900">
                <td className="p-4 border border-gray-700">
                  <Card sx={{ maxWidth: 120 }} className="shadow-lg">
                    <CardMedia
                      component="img"
                      alt={item.menuItem.name}
                      height="80"
                      image={item.menuItem.image}
                    />
                  </Card> 
                </td>
                <td className="p-4 border border-gray-700">{item.menuItem.name}</td>
                <td className="p-4 border border-gray-700">{item.menuItem.price}</td>
                {/* <td className="p-4 border border-gray-700">{item.menuItem.quantity}</td> */}
                <td className="p-4 border border-gray-700">
                  <button
                    onClick={() => handleRemove(item.menuItem._id)}
                    className="bg-[#b19cd9] text-black p-2 rounded-full hover:bg-[#a191c0] shadow-lg border border-black transition-transform transform hover:scale-110"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
