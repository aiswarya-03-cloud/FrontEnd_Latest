import React, { useState } from "react";
import { Box, Typography, TextField, Button, Avatar, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const lavenderColor = "#E6E6FA"; // Lavender color

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234-567-8901",
    address: "1234 Elm Street, Springfield, IL",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    console.log("Profile Updated", formData);
    navigate("/profile"); // Redirect to Profile page after saving
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
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
          marginBottom: "15px",
        }}
      />

      <Typography variant="h5" sx={{ fontWeight: "bold", color: lavenderColor }}>
        Update Profile
      </Typography>

      <Box sx={{ width: "90%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
        <Card sx={{ borderRadius: "12px", backgroundColor: "#1E1E1E", padding: "20px", boxShadow: `0 4px 8px ${lavenderColor}` }}>
          <CardContent>
            <TextField
              fullWidth
              variant="outlined"
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ input: { color: "white" }, label: { color: lavenderColor }, fieldset: { borderColor: lavenderColor } }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ input: { color: "white" }, label: { color: lavenderColor }, fieldset: { borderColor: lavenderColor }, marginTop: "15px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{ input: { color: "white" }, label: { color: lavenderColor }, fieldset: { borderColor: lavenderColor }, marginTop: "15px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              sx={{ input: { color: "white" }, label: { color: lavenderColor }, fieldset: { borderColor: lavenderColor }, marginTop: "15px" }}
            />
          </CardContent>
        </Card>

        <Button variant="contained" sx={{ backgroundColor: lavenderColor, color: "black", fontWeight: "bold" }} onClick={handleSave}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
