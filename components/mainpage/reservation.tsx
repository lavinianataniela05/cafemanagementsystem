"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Calendar } from "../ui/calendar";
// Update the import path below to the correct location of your Calendar component:
// import { Calendar } from "../calendar"; // <-- Change this path as needed
// TODO: Update the path below to the actual location of your Calendar component:
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

export const ReservationPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("02:30 PM");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formattedDate = date ? format(date, "EEE, MMM d, yyyy") : "Select a date";

  // Available time slots with AM/PM included
  const timeSlots = [
    "09:00 AM", "09:30 AM",
    "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM",
    "13:00 PM", "13:30 PM",
    "14:00 PM", "14:30 PM",
    "15:00 PM", "15:30 PM",
    "16:00 PM", "16:30 PM",
    "17:00 PM", "17:30 PM",
    "18:00 PM", "18:30 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] py-10 px-4 sm:px-6 lg:px-8">
      {/* Coffee Shop Header with animated coffee steam */}
      <motion.div 
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24">
          <motion.div 
            className="absolute top-0 left-0 w-2 h-8 bg-white opacity-60 rounded-full"
            animate={{ 
              height: [8, 16, 8],
              opacity: [0.6, 0.3, 0.6],
              y: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 left-6 w-2 h-10 bg-white opacity-60 rounded-full"
            animate={{ 
              height: [10, 18, 10],
              opacity: [0.6, 0.2, 0.6],
              y: [0, -8, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-2 h-6 bg-white opacity-60 rounded-full"
            animate={{ 
              height: [6, 12, 6],
              opacity: [0.6, 0.4, 0.6],
              y: [0, -4, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.8,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-[#5C3A28] mb-2 font-[var(--font-lexend-deca)] tracking-wide">
          Brew & Bliss Café
        </h1>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#D4A76A] via-[#6A3911] to-[#D4A76A] mx-auto mb-6 rounded-full" />
        <motion.h2 
          className="text-3xl font-bold text-[#8B5E3C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Reserve Your Table
        </motion.h2>
        <p className="mt-2 text-[#A78A6D] max-w-lg mx-auto">
          Experience the perfect blend of aroma and ambiance at our cozy café
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F0E6D9]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Decorative Coffee Beans */}
          <div className="relative h-4 bg-gradient-to-r from-[#3E2723] via-[#6A3911] to-[#8B5E3C]">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -top-2 w-4 h-4 rounded-full"
                style={{
                  left: `${(i + 1) * (100 / 9)}%`,
                  backgroundColor: i % 2 === 0 ? "#3E2723" : "#6A3911"
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05, type: "spring" }}
              />
            ))}
          </div>

          {/* Reservation Form */}
          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#F9F5F0] text-[#6A3911] p-8 rounded-xl shadow-md text-center"
              >
                <motion.div 
                  className="text-6xl mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    duration: 4
                  }}
                >
                  ☕
                </motion.div>
                <h3 className="text-3xl font-semibold mb-4 font-[var(--font-lexend-deca)]">Reservation Confirmed!</h3>
                <p className="text-xl mb-6">We've sent the details to your email.</p>
                <div className="bg-white p-6 rounded-lg shadow-inner max-w-md mx-auto mb-8">
                  <div className="space-y-2 text-left">
                    <p className="flex justify-between border-b border-[#F0E6D9] pb-2">
                      <span className="text-[#8B5E3C]">Date:</span>
                      <span className="font-medium text-[#5C3A28]">{formattedDate}</span>
                    </p>
                    <p className="flex justify-between border-b border-[#F0E6D9] pb-2">
                      <span className="text-[#8B5E3C]">Time:</span>
                      <span className="font-medium text-[#5C3A28]">{time}</span>
                    </p>
                    <p className="flex justify-between border-b border-[#F0E6D9] pb-2">
                      <span className="text-[#8B5E3C]">Guests:</span>
                      <span className="font-medium text-[#5C3A28]">{guests}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#8B5E3C]">Name:</span>
                      <span className="font-medium text-[#5C3A28]">{name}</span>
                    </p>
                  </div>
                </div>
                <p className="text-lg text-[#8B5E3C] mb-6">
                  We look forward to serving you at Brew & Bliss Café!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-gradient-to-r from-[#6A3911] to-[#8B5E3C] text-white rounded-full hover:from-[#5A2F0E] hover:to-[#7A4E2D] transition-all duration-300 shadow-lg"
                >
                  Make Another Reservation
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Left Side - Calendar */}
                  <div className="lg:w-1/2 space-y-8">
                    <motion.div 
                      className="rounded-2xl border-2 border-[#E8D9C5] bg-[#FDF9F5] p-8 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h2 className="text-2xl font-bold text-[#6A3911] mb-6 font-[var(--font-lexend-deca)]">
                        Select a Date
                      </h2>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="w-full"
                        classNames={{
                          head_cell: "text-[#8B5E3C] rounded-md w-13 font-normal text-[0.8rem]",
                          cell: "h-12 w-13 p-0 text-center text-sm hover:bg-[#F5EFEA]",
                          day: "h-12 w-13 p-0 font-normal aria-selected:opacity-100 hover:bg-[#E0C7B2] rounded-full transition-colors",
                          day_selected: "bg-[#6A3911] text-white hover:bg-[#6A3911] font-medium",
                          day_today: "bg-[#F5EFEA] text-[#6A3911] border border-[#D4A76A] font-medium",
                          day_disabled: "text-gray-400 hover:bg-white cursor-not-allowed"
                        }}
                      />
                    </motion.div>

                    <motion.div 
                      className="rounded-2xl border-2 border-[#E8D9C5] bg-[#FDF9F5] p-6 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h2 className="text-xl font-bold text-[#6A3911] mb-4 font-[var(--font-lexend-deca)]">
                        Your Reservation Details
                      </h2>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-[#F0E6D9]">
                          <span className="text-[#8B5E3C]">Date:</span>
                          <span className="font-medium text-[#5C3A28]">{formattedDate}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-[#F0E6D9]">
                          <span className="text-[#8B5E3C]">Time:</span>
                          <span className="font-medium text-[#5C3A28]">
                            {time}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-[#8B5E3C]">Guests:</span>
                          <span className="font-medium text-[#5C3A28]">{guests}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side - Form */}
                  <motion.div 
                    className="lg:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-[#6A3911] font-[var(--font-lexend-deca)]">
                        Your Information
                      </h2>
                      <p className="text-[#A78A6D]">
                        Please provide your details to complete the reservation
                      </p>

                      {/* Time Selection */}
                      <div>
                        <h3 className="text-sm font-medium text-[#6A3911] font-[var(--font-lexend-deca)] mb-1">Time</h3>
                        <div className="flex flex-wrap gap-1">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              className={`px-2 py-1 rounded border text-xs ${
                                time === slot
                                  ? "bg-[#6A3911] text-white border-[#6A3911]"
                                  : "bg-transparent text-[#6A3911] border-[#E8D9C5] hover:border-[#6A3911]"
                              }`}
                              onClick={() => setTime(slot)}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-[#6A3911] font-[var(--font-lexend-deca)]">Number of Guests</h3>
                        <div className="flex items-center gap-4">
                          <motion.div className="flex items-center border-2 border-[#E8D9C5] bg-[#FDF9F5] rounded-xl overflow-hidden">
                            <motion.button
                              type="button"
                              className="px-4 py-3 text-xl text-[#6A3911] hover:bg-[#F0E6D9]"
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setGuests(Math.max(1, guests - 1))}
                            >
                              -
                            </motion.button>
                            <span className="px-4 py-2 text-lg text-[#5C3A28]">{guests}</span>
                            <motion.button
                              type="button"
                              className="px-4 py-3 text-xl text-[#6A3911] hover:bg-[#F0E6D9]"
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setGuests(Math.min(12, guests + 1))}
                            >
                              +
                            </motion.button>
                          </motion.div>
                          <span className="text-[#A78A6D]">
                            {guests === 1 ? "Person" : "People"} including you
                          </span>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-lg text-[#6A3911] mb-2 font-[var(--font-lexend-deca)]">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-[#E8D9C5] bg-[#FDF9F5] focus:ring-2 focus:ring-[#6A3911] focus:border-transparent outline-none transition-all"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-lg text-[#6A3911] mb-2 font-[var(--font-lexend-deca)]">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-[#E8D9C5] bg-[#FDF9F5] focus:ring-2 focus:ring-[#6A3911] focus:border-transparent outline-none transition-all"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-lg text-[#6A3911] mb-2 font-[var(--font-lexend-deca)]">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-[#E8D9C5] bg-[#FDF9F5] focus:ring-2 focus:ring-[#6A3911] focus:border-transparent outline-none transition-all"
                            placeholder="(123) 456-7890"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label htmlFor="requests" className="block text-lg text-[#6A3911] mb-2 font-[var(--font-lexend-deca)]">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="requests"
                        value={requests}
                        onChange={(e) => setRequests(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-[#E8D9C5] bg-[#FDF9F5] focus:ring-2 focus:ring-[#6A3911] focus:border-transparent outline-none min-h-[120px] transition-all"
                        placeholder="Any special seating preferences or dietary restrictions?"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(106, 57, 17, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#6A3911] to-[#8B5E3C] text-white p-5 mt-6 rounded-full shadow-lg hover:from-[#5A2F0E] hover:to-[#7A4E2D] transition-all duration-300 text-xl font-medium relative overflow-hidden group"
                    >
                      <span className="relative z-10">Confirm Reservation</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#8B5E3C] to-[#6A3911] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};