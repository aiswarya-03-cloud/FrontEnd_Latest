
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

axios.defaults.withCredentials = true; // Ensures cookies are sent with requests

export default function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addpage = () =>{
    navigate('/add');
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

   
    try {
      const response = await axios.post("/admin/login", { email, password });

      alert(response.data.message);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-96 p-6 shadow-lg rounded-2xl bg-white">
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Admin Login
            </Typography>
            {error && <Typography color="error" align="center">{error}</Typography>}
            <form onSubmit={handleLogin} className="space-y-4">
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
              <Button onClick={addpage}
                type="submit" 
                fullWidth 
                variant="contained" 
                color="primary" 
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

