import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaymentCancelled = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger celebration effect
  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6 relative overflow-hidden">
      
      {/* Confetti Animation (Red theme for cancellation) */}
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Simulating Confetti with animated dots */}
          {Array.from({ length: 40 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: [0, 100], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </motion.div>
      )}

      {/* Animated Red Cross Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="bg-black p-6 rounded-full shadow-lg border-4 border-red-500 flex items-center justify-center"
      >
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-24 h-24 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </motion.svg>
      </motion.div>

      {/* Payment Cancelled Message */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-red-400 text-4xl font-bold mt-6 text-center"
      >
        Payment Cancelled! ❌
      </motion.h1>

      {/* Sorry Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-300 text-2xl mt-4 text-center"
      >
        Sorry, your payment was not processed.
      </motion.p>

      {/* Try Again Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/checkout")}
        className="mt-6 bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Try Again 🔄
      </motion.button>
    </div>
  );
};

export default PaymentCancelled;
