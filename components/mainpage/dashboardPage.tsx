"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, MapPin, Phone, Mail, Award, Recycle, Calendar, Globe, History, User, Info, Map, Clock, Coffee, Heart } from "lucide-react";

interface DashboardFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

interface WasteType {
  icon: string;
  name: string;
  color: string;
  count: string;
}

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 60000);
    
    // Feature rotation
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);
    
    // Testimonial rotation
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      clearInterval(timer);
      clearInterval(featureInterval);
      clearInterval(testimonialTimer);
    };
  }, []);

  const features: DashboardFeature[] = [
    {
      title: "Smart Pickup",
      description: "AI-powered scheduling for optimal waste collection routes",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-[#F0E2CC]",
      href: "/smart-pickup"
    },
    {
      title: "Smart Locations",
      description: "IoT-enabled drop boxes with real-time capacity monitoring",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-[#E6D7C3]",
      href: "/locations"
    },
    {
      title: "Eco Rewards",
      description: "Blockchain-verified points for sustainable waste disposal",
      icon: <Award className="w-6 h-6" />,
      color: "bg-[#F0E2CC]",
      href: "/rewards"
    },
    {
      title: "Green Impact",
      description: "Real-time carbon footprint reduction tracking",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-[#E6D7C3]",
      href: "/impact"
    }
  ];

  const wasteTypes: WasteType[] = [
    { icon: "🔄", name: "Plastic", color: "from-[#C8A586] to-[#E6D7C3]", count: "2.3k" },
    { icon: "📄", name: "Paper", color: "from-[#D4B999] to-[#F0E2CC]", count: "1.8k" },
    { icon: "⚙️", name: "Metal", color: "from-[#BFA58A] to-[#E6D7C3]", count: "945" },
    { icon: "🌱", name: "Organic", color: "from-[#C8A586] to-[#D4B999]", count: "3.1k" }
  ];

  const featureButtons = [
    { name: "Recycling Centers", icon: Map, href: "/recycling-centers" },
    { name: "Waste Tracking", icon: History, href: "/waste-tracking" },
    { name: "Collection", icon: Calendar, href: "/collection" },
    { name: "Profile & Rewards", icon: User, href: "/profile" },
    { name: "About Us", icon: Info, href: "/about" },
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      comment: "EcoWaste has made recycling so convenient! The rewards program is a great incentive.",
      rating: 5,
    },
    {
      name: "Michael T.",
      comment: "The smart bins notify me when they're full - no more guessing when to take out recycling!",
      rating: 5,
    },
    {
      name: "Emily R.",
      comment: "I love seeing my environmental impact in real-time. It's motivating me to recycle more!",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F3EB] text-[#3b2e28] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#E6D7C3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-[#6B4226]" />
            <span className="text-2xl font-bold text-[#6B4226]">Eco<span className="text-[#8B4513]">Waste</span></span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden md:block text-sm font-medium">{currentTime}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F3EB]/80 to-[#F8F3EB] z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#3B2314] to-[#6B4226] text-transparent bg-clip-text">
              EcoWaste
            </h1>
            <p className="text-xl text-[#5d4037] max-w-2xl mx-auto leading-relaxed">
              Revolutionizing waste management with AI & IoT for a sustainable future
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="/collection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-gradient-to-r from-[#6B4226] to-[#3B2314] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
            >
              Schedule Pickup
            </motion.a>
            <motion.a
              href="/rewards"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white text-[#6B4226] border-2 border-[#6B4226] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              Earn Rewards
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F8F3EB] to-[#F0E2CC]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-12"
          >
            <div className="h-px bg-[#C8A586] w-12" />
            <h2 className="text-3xl font-bold text-center text-[#4A2C1B]">Your Impact</h2>
            <div className="h-px bg-[#C8A586] w-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative group"
            >
              <div className="flex items-center gap-3 text-gray-700 mb-4">
                <div className="w-3 h-3 bg-[#6B4226] rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Live Tracking</span>
              </div>
              <div className="text-5xl font-bold text-[#6B4226] mb-2">12.5k</div>
              <p className="text-gray-600">Kg Recycled</p>
              <div className="absolute bottom-4 right-4 text-[#E6D7C3] group-hover:text-[#D4B999] transition">
                <Leaf className="w-12 h-12" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative group"
            >
              <div className="flex items-center gap-3 text-gray-700 mb-4">
                <div className="w-3 h-3 bg-[#8B4513] rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Community</span>
              </div>
              <div className="text-5xl font-bold text-[#8B4513] mb-2">890</div>
              <p className="text-gray-600">Active Users Nearby</p>
              <div className="absolute bottom-4 right-4 text-[#E6D7C3] group-hover:text-[#D4B999] transition">
                <User className="w-12 h-12" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all relative group"
            >
              <div className="flex items-center gap-3 text-gray-700 mb-4">
                <div className="w-3 h-3 bg-[#C87D2B] rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Efficiency</span>
              </div>
              <div className="text-5xl font-bold text-[#C87D2B] mb-2">45%</div>
              <p className="text-gray-600">CO₂ Reduced</p>
              <div className="absolute bottom-4 right-4 text-[#E6D7C3] group-hover:text-[#D4B999] transition">
                <Globe className="w-12 h-12" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Buttons Section */}
      <section className="py-16 px-6 bg-[#F8F3EB]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#4A2C1B] mb-4">
            Explore Our <span className="text-[#6B4226]">Features</span>
          </h2>
          <p className="text-xl text-[#5d4037] max-w-2xl mx-auto">
            Access key functionalities for smarter waste management
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featureButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <motion.a
                key={index}
                href={button.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E6D7C3] shadow-sm transition-all duration-300 text-center group"
              >
                <div className="p-4 mb-4 rounded-xl bg-[#6B4226] group-hover:bg-[#8B4513] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#6B4226] transition-colors">
                  {button.name}
                </h3>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F8F3EB] to-[#F0E2CC]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-12"
          >
            <div className="h-px bg-[#C8A586] w-12" />
            <h2 className="text-3xl font-bold text-center text-[#4A2C1B]">How It Works</h2>
            <div className="h-px bg-[#C8A586] w-12" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    isActive ? 'shadow-md border border-[#C8A586]' : 'shadow-sm hover:shadow-md border border-[#E6D7C3]'
                  } ${feature.color}`}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#C8A586]/30"
                      />
                    )}
                  </AnimatePresence>
                  
                  <div className="relative z-10">
                    <div className={`mb-6 p-4 rounded-2xl transition-all duration-300 inline-flex ${
                      isActive ? 'bg-[#6B4226]' : 'bg-[#8B4513]'
                    }`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waste Types Section */}
      <section className="py-16 px-6 bg-[#F8F3EB]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#E6D7C3]"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-2 lg:order-1 min-w-[280px]"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#E6D7C3]/30 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white rounded-2xl p-8 border border-[#E6D7C3] shadow-sm">
                    <div className="grid grid-cols-2 gap-6">
                      {wasteTypes.map((waste, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-[#E6D7C3]"
                        >
                          <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${waste.color} text-gray-800 text-center shadow-sm`}>
                            <div className="text-2xl mb-1">{waste.icon}</div>
                            <div className="text-xs font-medium">{waste.count} tons</div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#6B4226] transition-colors">
                            {waste.name}
                          </h3>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#E6D7C3] text-[#6B4226] px-4 py-2 rounded-full text-sm font-medium">
                    <Recycle className="w-4 h-4" />
                    Smart Sorting
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-[#4A2C1B] leading-tight">
                    Choose Your <span className="text-[#6B4226]">Waste Type</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-[#5d4037] leading-relaxed">
                    Our AI-powered sorting system automatically categorizes your waste for maximum 
                    recycling efficiency. Each type is processed using cutting-edge environmental technologies.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Real-time contamination detection",
                      "Automated quality assessment",
                      "Optimized processing pathways"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-[#6B4226]' : 
                          index === 1 ? 'bg-[#8B4513]' : 'bg-[#C87D2B]'
                        }`}></div>
                        <span className="text-[#5d4037]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F8F3EB] to-[#F0E2CC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-12"
          >
            <div className="h-px bg-[#C8A586] w-12" />
            <h2 className="text-3xl font-bold text-center text-[#4A2C1B]">What Our Users Say</h2>
            <div className="h-px bg-[#C8A586] w-12" />
          </motion.div>
          
          <motion.div 
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-[#E6D7C3] relative"
          >
            <div className="text-6xl text-[#E6D7C3] absolute top-6 left-6">"</div>
            <div className="relative z-10">
              <p className="text-lg text-[#5d4037] font-medium italic mb-6 text-center">
                {testimonials[currentTestimonial].comment}
              </p>
              <div className="flex flex-col items-center">
                <div className="text-[#C87D2B] mb-2">
                  {"⭐".repeat(testimonials[currentTestimonial].rating)}
                </div>
                <p className="font-semibold text-[#3b2e28]">{testimonials[currentTestimonial].name}</p>
              </div>
            </div>
            <div className="text-6xl text-[#E6D7C3] absolute bottom-6 right-6 rotate-180">"</div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B2314] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              EcoWaste
            </h3>
            <p className="text-white/80">123 Green Street</p>
            <p className="text-white/80">Eco District, CA 90210</p>
            <p className="text-white/80">info@ecowaste.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {featureButtons.map((button, index) => (
                <li key={index}>
                  <a href={button.href} className="text-white/80 hover:text-white transition">
                    {button.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-[#F0E2CC] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#F0E2CC] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#F0E2CC] transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none flex-1 bg-white/10 text-white"
                />
                <button className="bg-[#C8A586] text-[#3B2314] px-4 py-2 rounded-r-lg font-medium hover:bg-[#E6D7C3] transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} EcoWaste. All rights reserved.
        </div>
      </footer>
    </div>
  );
}