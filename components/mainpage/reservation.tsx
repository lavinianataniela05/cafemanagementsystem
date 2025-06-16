"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { Coffee, CheckCircle, Clock, Users, User, Mail, Phone, MessageSquare } from "lucide-react";

export const ReservationPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("02:30 PM");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Animation settings
  const pageTransition = {
    duration: 0.8,
    ease: cubicBezier(0.2, 0.8, 0.4, 1)
  };

  const buttonTransition = {
    duration: 0.5,
    ease: cubicBezier(0.2, 0.8, 0.4, 1)
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const formattedDate = date ? format(date, "EEE, MMM d, yyyy") : "Select a date";

  // Available time slots
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100/10 to-amber-100/10 rounded-full blur-3xl"></div>
        
        {/* Floating coffee beans */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-amber-700 to-orange-600 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageTransition}
        >
          {/* Coffee steam animation */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-1.5 h-12 bg-gradient-to-t from-transparent via-white to-transparent opacity-40 rounded-full"
                style={{ left: `${i * 6 + 10}px` }}
                animate={{ 
                  height: [12, 24, 12],
                  opacity: [0.4, 0.1, 0.4],
                  y: [0, -15, 0],
                  scaleX: [1, 1.3, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + i * 0.3,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-4 tracking-tight"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          >
            Brew & Bliss Café
          </motion.h1>
          
          <motion.div 
            className="w-48 h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: 192 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-amber-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Reserve Your Table
          </motion.h2>
          
          <motion.p 
            className="text-xl text-amber-700/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Experience the perfect blend of aroma and ambiance at our cozy café
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Decorative Top Border */}
            <div className="relative h-6 bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-5 h-5 rounded-full border-2 border-white/30"
                  style={{
                    left: `${(i + 1) * (100 / 13)}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: i % 3 === 0 ? "#92400e" : i % 3 === 1 ? "#c2410c" : "#9a3412"
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.5 + i * 0.05, type: "spring", stiffness: 200 }}
                />
              ))}
            </div>

            {/* Reservation Form */}
            <div className="p-12 md:p-16">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 text-amber-900 p-12 rounded-2xl shadow-lg text-center relative overflow-hidden"
                  >
                    {/* Success Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-32 h-32 border border-amber-600 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                      ))}
                    </div>

                    <motion.div 
                      className="text-8xl mb-8 relative z-10"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3,
                        ease: "easeInOut"
                      }}
                    >
                      ☕
                    </motion.div>
                    
                    <motion.h3 
                      className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Reservation Confirmed!
                    </motion.h3>
                    
                    <motion.p 
                      className="text-xl mb-8 text-amber-700"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      We've sent the details to your email.
                    </motion.p>
                    
                    <motion.div 
                      className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-inner max-w-lg mx-auto mb-10 border border-amber-200/50"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="space-y-4">
                        {[
                          { label: "Date", value: formattedDate, icon: <Clock className="w-5 h-5 text-amber-600" /> },
                          { label: "Time", value: time, icon: <Clock className="w-5 h-5 text-amber-600" /> },
                          { label: "Guests", value: guests, icon: <Users className="w-5 h-5 text-amber-600" /> },
                          { label: "Name", value: name, icon: <User className="w-5 h-5 text-amber-600" /> }
                        ].map((item, i) => (
                          <motion.div
                            key={item.label}
                            className="flex items-center justify-between py-3 px-4 bg-amber-50/50 rounded-lg border border-amber-100"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <div className="flex items-center gap-3">
                              {item.icon}
                              <span className="font-medium text-amber-800">{item.label}:</span>
                            </div>
                            <span className="font-bold text-amber-900">{item.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.p 
                      className="text-lg text-amber-700 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      We look forward to serving you at Brew & Bliss Café!
                    </motion.p>
                    
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 20px 40px -10px rgba(146, 64, 14, 0.4)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-full hover:from-amber-800 hover:to-orange-700 transition-all duration-300 shadow-lg text-lg font-semibold relative overflow-hidden group"
                    >
                      <span className="relative z-10">Make Another Reservation</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col lg:flex-row gap-12">
                      {/* Left Side - Calendar & Summary */}
                      <div className="lg:w-1/2 space-y-8">
                        <motion.div 
                          className="rounded-2xl border-2 border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg backdrop-blur-sm relative overflow-hidden"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300/10 to-transparent rounded-full -mr-16 -mt-16" />
                          
                          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-amber-600" />
                            Select a Date
                          </h2>
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="w-full relative z-10"
                            classNames={{
                              head_cell: "text-amber-700 rounded-md w-14 font-semibold text-sm",
                              cell: "h-14 w-14 p-0 text-center text-sm hover:bg-amber-100/50",
                              day: "h-14 w-14 p-0 font-medium aria-selected:opacity-100 hover:bg-amber-200 rounded-xl transition-all duration-200 hover:scale-105",
                              day_selected: "bg-gradient-to-br from-amber-700 to-orange-600 text-white hover:from-amber-800 hover:to-orange-700 font-bold shadow-lg",
                              day_today: "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-900 border-2 border-amber-300 font-bold",
                              day_disabled: "text-gray-400 hover:bg-white cursor-not-allowed opacity-50"
                            }}
                          />
                        </motion.div>

                        <motion.div 
                          className="rounded-2xl border-2 border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg backdrop-blur-sm relative overflow-hidden"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-full -ml-12 -mb-12" />
                          
                          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                            <Users className="w-6 h-6 text-amber-600" />
                            Reservation Summary
                          </h2>
                          <div className="space-y-4 relative z-10">
                            {[
                              { label: "Date", value: formattedDate, icon: <Clock className="w-5 h-5 text-amber-600" /> },
                              { label: "Time", value: time, icon: <Clock className="w-5 h-5 text-amber-600" /> },
                              { label: "Guests", value: `${guests} ${guests === 1 ? 'Person' : 'People'}`, icon: <Users className="w-5 h-5 text-amber-600" /> }
                            ].map((item, i) => (
                              <motion.div
                                key={item.label}
                                className="flex items-center justify-between py-3 px-4 bg-white/70 rounded-xl border border-amber-200/50 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                              >
                                <div className="flex items-center gap-3">
                                  {item.icon}
                                  <span className="text-amber-800 font-medium">{item.label}:</span>
                                </div>
                                <span className="font-bold text-amber-900">{item.value}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Side - Form */}
                      <motion.div 
                        className="lg:w-1/2 space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="space-y-8">
                          <div>
                            <h2 className="text-3xl font-bold text-amber-900 mb-2">
                              Your Information
                            </h2>
                            <p className="text-amber-700/80">
                              Please provide your details to complete the reservation
                            </p>
                          </div>

                          {/* Time Selection */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                              <Clock className="w-5 h-5 text-amber-600" />
                              Select Time
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                              {timeSlots.map((slot, i) => (
                                <motion.button
                                  key={slot}
                                  type="button"
                                  className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                                    time === slot
                                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-700 shadow-lg"
                                      : "bg-white/70 text-amber-800 border-amber-200 hover:border-amber-400 hover:bg-amber-100/50"
                                  }`}
                                  onClick={() => setTime(slot)}
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.6 + i * 0.02 }}
                                >
                                  {slot}
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>

                          {/* Guest Count */}
                          <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                              <Users className="w-5 h-5 text-amber-600" />
                              Number of Guests
                            </h3>
                            <div className="flex items-center gap-6">
                              <div className="flex items-center bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl overflow-hidden shadow-lg">
                                <motion.button
                                  type="button"
                                  className="px-4 py-3 text-xl text-amber-700 hover:bg-amber-100 transition-colors"
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => setGuests(Math.max(1, guests - 1))}
                                >
                                  −
                                </motion.button>
                                <motion.span 
                                  className="px-6 py-2 text-xl font-bold text-amber-900 min-w-[3rem] text-center"
                                  key={guests}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  {guests}
                                </motion.span>
                                <motion.button
                                  type="button"
                                  className="px-4 py-3 text-xl text-amber-700 hover:bg-amber-100 transition-colors"
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => setGuests(Math.min(12, guests + 1))}
                                >
                                  +
                                </motion.button>
                              </div>
                              <span className="text-amber-700">
                                {guests === 1 ? "Person" : "People"} including you
                              </span>
                            </div>
                          </motion.div>

                          {/* Contact Information */}
                          <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                          >
                            {[
                              { id: "name", label: "Full Name", type: "text", placeholder: "John Smith", icon: <User className="w-5 h-5 text-amber-600" />, value: name, setValue: setName },
                              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", icon: <Mail className="w-5 h-5 text-amber-600" />, value: email, setValue: setEmail },
                              { id: "phone", label: "Phone Number", type: "tel", placeholder: "(123) 456-7890", icon: <Phone className="w-5 h-5 text-amber-600" />, value: phone, setValue: setPhone }
                            ].map((field, i) => (
                              <motion.div
                                key={field.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                              >
                                <label htmlFor={field.id} className="block text-lg text-amber-900 mb-2 flex items-center gap-2">
                                  {field.icon}
                                  {field.label}
                                </label>
                                <input
                                  id={field.id}
                                  type={field.type}
                                  value={field.value}
                                  onChange={(e) => field.setValue(e.target.value)}
                                  className="w-full p-4 rounded-xl border-2 border-amber-200 bg-white/70 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-300 placeholder-amber-400/70 hover:border-amber-300 backdrop-blur-sm"
                                  placeholder={field.placeholder}
                                  required
                                />
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>

                        {/* Special Requests */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 }}
                        >
                          <label htmlFor="requests" className="block text-lg text-amber-900 mb-2 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-amber-600" />
                            Special Requests (Optional)
                          </label>
                          <textarea
                            id="requests"
                            value={requests}
                            onChange={(e) => setRequests(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-amber-200 bg-white/70 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none min-h-[120px] transition-all duration-300 placeholder-amber-400/70 hover:border-amber-300 backdrop-blur-sm resize-none"
                            placeholder="Any special seating preferences or dietary restrictions?"
                          />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ 
                            scale: 1.02, 
                            boxShadow: "0 20px 40px -10px rgba(146, 64, 14, 0.4)",
                            y: -3
                          }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-amber-700 to-orange-600 text-white p-5 mt-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl font-bold relative overflow-hidden group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <span className="relative z-10">
                            {isLoading ? "Processing..." : "Confirm Reservation"}
                          </span>
                          {isLoading && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};