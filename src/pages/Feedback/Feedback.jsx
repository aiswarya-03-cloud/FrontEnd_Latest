

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Card, CardContent, Typography, TextField, Button, MenuItem } from "@mui/material";
// import { motion } from "framer-motion";

// export default function Feedback() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [orderId, setOrderId] = useState("");
//   const [rating, setRating] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await axios.post("/feedback", { name, email, orderId, rating, message }, { withCredentials: true });
//       alert(response.data.message);
//       navigate("/thank-you");
//     } catch (err) {
//       setError(err.response?.data?.message || "Submission failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
//       <motion.div 
//         initial={{ opacity: 0, y: -50 }} 
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="w-[400px] p-6 shadow-lg rounded-2xl bg-gray-800 text-white">
//           <CardContent>
//             <Typography variant="h5" align="center" gutterBottom className="text-white">Customer Feedback</Typography>
//             {error && <Typography color="error" align="center">{error}</Typography>}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <TextField 
//                 fullWidth 
//                 label="Name" 
//                 variant="outlined" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 required 
//                 InputProps={{ style: { color: 'black' } }}
//                 InputLabelProps={{ style: { color: 'black' } }}
//               />
//               <TextField 
//                 fullWidth 
//                 label="Email" 
//                 variant="outlined" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//                 InputProps={{ style: { color: 'black' } }}
//                 InputLabelProps={{ style: { color: 'black' } }}
//               />
//               <TextField 
//                 fullWidth 
//                 label="Order ID" 
//                 variant="outlined" 
//                 value={orderId} 
//                 onChange={(e) => setOrderId(e.target.value)} 
//                 required 
//                 InputProps={{ style: { color: 'black' } }}
//                 InputLabelProps={{ style: { color: 'black' } }}
//               />
//               <TextField
//                 select
//                 fullWidth
//                 label="Rating"
//                 variant="outlined"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 required
//                 InputProps={{ style: { color: 'black' } }}
//                 InputLabelProps={{ style: { color: 'black' } }}
//               >
//                 {[1, 2, 3, 4, 5].map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option} Stars
//                   </MenuItem>
//                 ))}
//               </TextField>
//               <TextField 
//                 fullWidth 
//                 label="Your Feedback" 
//                 variant="outlined" 
//                 multiline
//                 rows={4}
//                 value={message} 
//                 onChange={(e) => setMessage(e.target.value)} 
//                 required 
//                 InputProps={{ style: { color: 'black' } }}
//                 InputLabelProps={{ style: { color: 'black' } }}
//               />
//               <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#C8A2C8', color: 'black' }}>
//                 Submit Feedback
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography, TextField, Button, MenuItem, Snackbar } from "@mui/material";
import { motion } from "framer-motion";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("/feedback", { name, email, orderId, rating, message }, { withCredentials: true });
      setSuccess(true);
      setTimeout(() => navigate("/thank-you"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[400px] p-6 shadow-lg rounded-2xl bg-gray-800 text-white">
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom className="text-white">Customer Feedback</Typography>
            {error && <Typography color="error" align="center">{error}</Typography>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField 
                fullWidth 
                label="Name" 
                variant="outlined" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
              <TextField 
                fullWidth 
                label="Email" 
                variant="outlined" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
              <TextField 
                fullWidth 
                label="Order ID" 
                variant="outlined" 
                value={orderId} 
                onChange={(e) => setOrderId(e.target.value)} 
                required 
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
              <TextField
                select
                fullWidth
                label="Rating"
                variant="outlined"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              >
                {[1, 2, 3, 4, 5].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option} Stars
                  </MenuItem>
                ))}
              </TextField>
              <TextField 
                fullWidth 
                label="Your Feedback" 
                variant="outlined" 
                multiline
                rows={4}
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: 'black' } }}
              />
              <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#C8A2C8', color: 'black' }}>
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        message="Submission Successful"
        onClose={() => setSuccess(false)}
      />
    </div>
  );
}

