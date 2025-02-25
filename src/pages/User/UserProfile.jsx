// import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'

// const Profile = () => {
//   return (
//     <div>
//       <h1>PROFILE PAGE</h1>
//       <Navbar />
//     </div>
//   )
// }

// export default Profile



// import React from 'react';
// import { Box, Typography, Avatar, Button, Grid, Card, CardContent } from '@mui/material';
// import { purple } from '@mui/material/colors';

// const UserProfile = () => {
//   return (
//     <Box sx={{ backgroundColor: '#F3E5F5', minHeight: '100vh', paddingTop: '50px' }}>
//       {/* Profile Header */}
//       <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Avatar 
//           sx={{ 
//             width: 120, 
//             height: 120, 
//             margin: 'auto', 
//             border: `4px solid ${purple[500]}`,
//             backgroundColor: purple[500],
//           }}
//         >
//           U
//         </Avatar>
//         <Typography variant="h4" sx={{ fontWeight: 'bold', color: purple[700], marginTop: '10px' }}>
//           John Doe
//         </Typography>
//         <Typography variant="h6" sx={{ color: purple[600], marginTop: '5px' }}>
//           johndoe@example.com
//         </Typography>
//       </Box>

//       {/* Profile Information */}
//       <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
//         {/* Address Section */}
//         <Grid item xs={12} md={5}>
//           <Card sx={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ color: purple[700], fontWeight: 'bold' }}>
//                 Delivery Address
//               </Typography>
//               <Typography sx={{ color: purple[600], marginTop: '10px' }}>
//                 1234 Elm Street, Suite 100, Springfield, IL, 62701
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Order History Section */}
//         <Grid item xs={12} md={5}>
//           <Card sx={{ borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
//             <CardContent>
//               <Typography variant="h6" sx={{ color: purple[700], fontWeight: 'bold' }}>
//                 Order History
//               </Typography>
//               <Typography sx={{ color: purple[600], marginTop: '10px' }}>
//                 - Spicy Tandoori Chicken (Delivered: 12/02/2025) <br />
//                 - Veggie Pizza (Delivered: 10/02/2025) <br />
//                 - Sushi Combo (Delivered: 05/02/2025)
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Buttons */}
//       <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
//         <Button 
//           sx={{
//             backgroundColor: purple[500],
//             color: 'white',
//             padding: '10px 30px',
//             '&:hover': { backgroundColor: purple[600] },
//             marginRight: '20px',
//           }}
//         >
//           Edit Profile
//         </Button>
//         <Button 
//           sx={{
//             backgroundColor: purple[300],
//             color: 'white',
//             padding: '10px 30px',
//             '&:hover': { backgroundColor: purple[400] },
//           }}
//         >
//           Log Out
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Card, CardContent, Menu, MenuItem } from "@mui/material";

const lavenderColor = "#E6E6FA"; // Lavender color

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("userToken"); // Clear user session
  //   navigate("/login"); // Redirect to login/homepage
  // };

  const handleUpdateProfile = () => {
    navigate("/update-profile"); // Redirect to Update Profile page
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Black Background
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        paddingTop: "30px",
      }}
    >
      {/* Profile Avatar */}
      <Avatar
        src="https://randomuser.me/api/portraits/men/9.jpg"
        alt="Profile Pic"
        sx={{
          width: 120,
          height: 120,
          border: `4px solid ${lavenderColor}`,
          backgroundColor: lavenderColor,
          cursor: "pointer",
          marginBottom: "15px",
        }}
        onClick={handleMenuOpen}
      />

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleUpdateProfile}>Update Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>

      {/* Name & Email */}
      <Typography variant="h5" sx={{ fontWeight: "bold", color: lavenderColor }}>
        John Doe
      </Typography>
      <Typography variant="body1" sx={{ color: lavenderColor, marginBottom: "30px" }}>
        johndoe@example.com
      </Typography>

      {/* Profile Sections (Stacked Vertically) */}
      <Box sx={{ width: "90%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Delivery Address */}
        <Card sx={{ borderRadius: "12px", backgroundColor: "#1E1E1E", boxShadow: `0 4px 8px ${lavenderColor}` }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: lavenderColor, fontWeight: "bold" }}>
              Delivery Address
            </Typography>
            <Typography sx={{ color: "white", marginTop: "10px" }}>
              1234 Elm Street, Suite 100, Springfield, IL, 62701
            </Typography>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card sx={{ borderRadius: "12px", backgroundColor: "#1E1E1E", boxShadow: `0 4px 8px ${lavenderColor}` }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: lavenderColor, fontWeight: "bold" }}>
              Personal Information
            </Typography>
            <Typography sx={{ color: "white", marginTop: "10px" }}>
              📞 Phone: +1 234-567-8901 <br />
              🎂 Date of Birth: 15th March 1990
            </Typography>
          </CardContent>
        </Card>

        {/* Other Details */}
        <Card sx={{ borderRadius: "12px", backgroundColor: "#1E1E1E", boxShadow: `0 4px 8px ${lavenderColor}` }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: lavenderColor, fontWeight: "bold" }}>
              Other Details
            </Typography>
            <Typography sx={{ color: "white", marginTop: "10px" }}>
              👔 Occupation: Software Engineer <br />
              🏢 Company: XYZ Tech Solutions <br />
              🌎 Location: New York, USA
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserProfile;
