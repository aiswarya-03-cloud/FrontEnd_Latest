import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/admin/logout", {}, { withCredentials: true });
      alert("Logged out successfully!");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#b19cd9] text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome, Admin!</h2>
        <p className="mb-6">Manage your system efficiently.</p>
        {/* <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
