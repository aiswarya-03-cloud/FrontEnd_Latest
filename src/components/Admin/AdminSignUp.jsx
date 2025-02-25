

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function AdminSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("/admin/add", { name, email, password,phone, role }, { withCredentials: true });
      console.log("RESPONSE--",response)
      alert(response.data.message);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Sign-up failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[500px] p-8 shadow-lg rounded-2xl bg-white">
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>Admin Sign Up</Typography>
            {error && <Typography color="error" align="center">{error}</Typography>}
            <form onSubmit={handleSignUp} className="space-y-4">
              <TextField 
                fullWidth 
                label="Name" 
                variant="outlined" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <TextField 
                fullWidth 
                label="Email" 
                variant="outlined" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <TextField 
                fullWidth 
                label="Password" 
                type="password" 
                variant="outlined" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <TextField 
                fullWidth 
                label="Phone" 
                variant="outlined" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
              <TextField 
                fullWidth 
                label="Role" 
                variant="outlined" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                required 
              />
              <Button type="submit" fullWidth variant="contained" color="primary">
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

