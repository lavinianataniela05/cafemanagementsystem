"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Clock, Award, Heart } from "lucide-react";

interface DashboardFeature {
  title: string;
  key: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const drinks = [
  {
    name: "Le MochaMilk",
    description: "Rich espresso blended with velvety chocolate and steamed milk",
    price: "$5.50",
    image: "/api/placeholder/400/400",
    rating: 5,
    featured: false,
  },
  {
    name: "Strawberry Yoghurt",
    description: "Fresh strawberries blended with creamy Greek yogurt and honey",
    price: "$6.25",
    image: "/api/placeholder/400/400",
    rating: 5,
    featured: true,
  },
  {
    name: "Matcha Greenteato",
    description: "Premium ceremonial grade matcha whisked to perfection",
    price: "$5.75",
    image: "/api/placeholder/400/400",
    rating: 5,
    featured: false,
  },
];

const testimonials = [
  {
    name: "Emily R.",
    comment: "The perfect cozy spot to work or meet friends. Their Strawberry Yoghurt is heavenly!",
    rating: 5,
  },
  {
    name: "Michael T.",
    comment: "Best coffee in town, hands down. The staff remembers my order every time!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    comment: "Beautiful atmosphere and amazing pastries that pair perfectly with their signature drinks.",
    rating: 5,
  }
];

export const DashboardPage: React.FC<{ onNavigate: (key: string) => void }> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 60000);
    
    // Testimonial rotation
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      clearInterval(timer);
      clearInterval(testimonialTimer);
    };
  }, []);

  const dashboardFeatures: DashboardFeature[] = [
    {
      title: "Our Menu",
      key: "menu-order",
      description: "Savor the finest brews and sweet delights curated just for you.",
      image: "/api/placeholder/600/400",
      icon: <Coffee className="w-6 h-6" />,
    },
    {
      title: "Make a Reservation",
      key: "reservation",
      description: "Reserve your cozy corner for a blissful escape.",
      image: "/api/placeholder/600/400",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Rewards Program",
      key: "payment",
      description: "Track your points and redeem special offers.",
      image: "/api/placeholder/600/400",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F3EB] text-[#3b2e28] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#E6D7C3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#6B4226]">Brew & Bliss</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="hidden md:block text-sm font-medium">{currentTime}</span>
          
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F3EB]/80 to-[#F8F3EB] z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#8B4513] to-[#5D2906] text-transparent bg-clip-text">
              Brew & Bliss Café
            </h1>
            <p className="text-xl text-[#5d4037] max-w-2xl mx-auto leading-relaxed">
              Sip, savor, and stay awhile — where every cup tells a story and every moment becomes a memory.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate("reservation")}
              className="w-full sm:w-auto bg-gradient-to-r from-[#6B4226] to-[#3B2314] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
            >
              Book Your Spot
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate("menu-order")}
              className="w-full sm:w-auto bg-white text-[#6B4226] border-2 border-[#6B4226] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              Explore Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Today's Special */}
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
            <h2 className="text-3xl font-bold text-center text-[#4A2C1B]">Today's Specials</h2>
            <div className="h-px bg-[#C8A586] w-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drinks.map((drink, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all relative group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-[#6b4226]">{drink.name}</h3>
                    <span className="font-semibold text-[#8B4513]">{drink.price}</span>
                  </div>
                  <p className="text-[#7e5d4c] text-sm">{drink.description}</p>
                  <div className="text-[#C87D2B] mt-1">
                    {"⭐".repeat(drink.rating)}
                  </div>
                  {drink.featured && (
                    <div className="absolute top-4 right-4 bg-[#8B4513] text-white px-3 py-1 rounded-full font-medium shadow-md flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span className="text-xs">Best Seller</span>
                    </div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full mt-4 bg-[#F0E2CC] text-[#6B4226] py-2 rounded-lg font-medium hover:bg-[#E6D7C3] transition flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-4 h-4" />
                    <span>Add to Favorites</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-16 px-6 bg-[#F8F3EB]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-12"
          >
            <div className="h-px bg-[#C8A586] w-12" />
            <h2 className="text-3xl font-bold text-center text-[#4A2C1B]">What Our Guests Say</h2>
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

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F8F3EB] to-[#F0E2CC]">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-12"
          >
            <div className="h-px bg-[#C8A586] w-12" />
            <h2 className="text-3xl font-bold text-center text-[#4A2C1B]">Explore More</h2>
            <div className="h-px bg-[#C8A586] w-12" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, idx) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => onNavigate(feature.key)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group relative"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6B4226]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Story / About */}
      <section className="py-16 px-6 bg-[#F8F3EB]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#4A2C1B]">Our Story</h2>
            <p className="text-[#5d4037] leading-relaxed">
              Founded in 2020, Brew & Bliss started with a simple dream: to create a sanctuary where coffee lovers could escape the hustle of everyday life and savor moments of genuine connection.
            </p>
            <p className="text-[#5d4037] leading-relaxed">
              We source our beans ethically from small farms around the world, ensuring that every cup tells a story of sustainability and passion. Our bakers arrive at dawn to prepare fresh pastries that complement our signature brews perfectly.
            </p>
            <motion.button
              // onClick={() => onNavigate("aboutus")}
              onClick={() => onNavigate("about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#6B4226] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#543019] transition"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-96 relative"
          >
            <img
              src="/api/placeholder/600/800"
              alt="Our cafe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-medium">Open Daily</p>
              <p>7:00 AM — 9:00 PM</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B2314] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Brew & Bliss Café</h3>
            <p className="text-white/80">123 Coffee Lane</p>
            <p className="text-white/80">Café District, CA 90210</p>
            <p className="text-white/80">info@brewandbliss.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="text-white/80">Monday - Friday: 7:00 AM - 9:00 PM</p>
            <p className="text-white/80">Saturday: 8:00 AM - 10:00 PM</p>
            <p className="text-white/80">Sunday: 8:00 AM - 8:00 PM</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
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
          © {new Date().getFullYear()} Brew & Bliss Café. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;