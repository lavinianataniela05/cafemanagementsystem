"use client";
import React from "react";
import { motion } from "framer-motion";

export const LogoutPage = () => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    // Update progress every 15ms to create smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    
    // Redirect after animation completes
    const timer = setTimeout(() => {
      alert("Logged out successfully");
      window.location.href = "/";
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-white/70 dark:bg-black/30 rounded-lg shadow-lg"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-800 flex items-center justify-center border-2 border-amber-200 dark:border-amber-700">
            <svg
              className="w-8 h-8 text-amber-700 dark:text-amber-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="absolute top-12 right-12 opacity-20 dark:opacity-10"
        >
          <svg className="w-24 h-24 text-amber-800 dark:text-amber-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 21V19H20V21H2ZM4 15C4 12.8783 4.84285 10.8434 6.34315 9.34315C7.84344 7.84285 9.87827 7 12 7C14.1217 7 16.1566 7.84285 17.6569 9.34315C19.1571 10.8434 20 12.8783 20 15H4ZM18.5 5C18.5 5.39397 18.3827 5.78407 18.1629 6.11114C17.9432 6.43821 17.6329 6.68688 17.2664 6.82843C16.8999 6.96997 16.4982 6.99682 16.1159 6.90451C15.7335 6.81221 15.3887 6.60551 15.1213 6.31066C14.8539 6.01581 14.6802 5.64411 14.6129 5.24226C14.5456 4.84042 14.593 4.42312 14.7501 4.04312C14.9071 3.66312 15.1678 3.33845 15.5001 3.111C15.8324 2.88356 16.222 2.75736 16.622 2.75736C17.1524 2.75736 17.6611 2.96794 18.0362 3.34302C18.4113 3.7181 18.5 4.21739 18.5 4.75736V5ZM12 3.5C12 3.89397 11.8827 4.28407 11.6629 4.61114C11.4432 4.93821 11.1329 5.18688 10.7664 5.32843C10.3999 5.46997 9.9982 5.49682 9.61591 5.40451C9.23363 5.31221 8.88882 5.10551 8.62136 4.81066C8.35389 4.51581 8.18016 4.14411 8.11286 3.74226C8.04556 3.34042 8.09297 2.92312 8.25005 2.54312C8.40712 2.16312 8.66782 1.83845 9.00013 1.611C9.33243 1.38356 9.72205 1.25736 10.122 1.25736C10.6524 1.25736 11.1611 1.46794 11.5362 1.84302C11.9113 2.2181 12 2.71739 12 3.25736V3.5Z" />
          </svg>
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold mb-2 text-amber-900 dark:text-amber-100"
        >
          Thanks for Visiting
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-amber-800 dark:text-amber-200 mb-6"
        >
          Brewing your logout, please wait a moment...
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="w-64 h-2 bg-amber-200 dark:bg-amber-700 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-amber-600 dark:bg-amber-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};