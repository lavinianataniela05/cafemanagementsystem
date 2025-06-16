"use client";

import { useState, useEffect } from "react";
import { Coffee, Clock, MapPin, Phone, Mail, Award, Calendar, Globe, User, Info, ShoppingCart, CreditCard, Menu, X, Star, Heart, Zap, Shield } from "lucide-react";

interface DashboardFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

interface MenuItem {
  icon: string;
  name: string;
  color: string;
  price: string;
  description: string;
}



export default function CafeDashboard() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);

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
    }, 5000);
    
    // Testimonial rotation
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      clearInterval(featureInterval);
      clearInterval(testimonialTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features: DashboardFeature[] = [
    {
      title: "Premium Coffee",
      description: "Handcrafted beverages using the finest beans from around the world",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-amber-400 to-orange-500",
      href: "/menu"
    },
    {
      title: "Cozy Atmosphere",
      description: "Warm, inviting spaces perfect for work, meetings, or relaxation",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-400 to-pink-500",
      href: "/locations"
    },
    {
      title: "Fast Service",
      description: "Quick, efficient service without compromising on quality",
      icon: <Zap className="w-6 h-6" />,
      color: "from-emerald-400 to-teal-500",
      href: "/rewards"
    },
    {
      title: "Sustainable",
      description: "100% ethically sourced ingredients and eco-friendly practices",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-500",
      href: "/about"
    }
  ];

  const menuItems: MenuItem[] = [
    { 
      icon: "☕", 
      name: "Signature Espresso", 
      color: "from-amber-50 to-amber-100", 
      price: "$3.50",
      description: "Rich, bold flavor with notes of chocolate"
    },
    { 
      icon: "🥛", 
      name: "Vanilla Latte", 
      color: "from-rose-50 to-rose-100", 
      price: "$4.50",
      description: "Smooth espresso with steamed milk and vanilla"
    },
    { 
      icon: "🍫", 
      name: "Dark Mocha", 
      color: "from-stone-50 to-stone-100", 
      price: "$5.00",
      description: "Decadent chocolate and espresso blend"
    },
    { 
      icon: "❄️", 
      name: "Cold Brew", 
      color: "from-blue-50 to-blue-100", 
      price: "$4.00",
      description: "Smooth, refreshing coffee served ice-cold"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      comment: "The atmosphere here is absolutely magical. Every cup tells a story, and the baristas are true artists.",
      rating: 5,
      avatar: "🌟"
    },
    {
      name: "Michael Chen",
      role: "Daily Customer",
      comment: "I've tried coffee shops all over the city, but nothing compares to the quality and consistency here.",
      rating: 5,
      avatar: "☕"
    },
    {
      name: "Emily Rodriguez",
      role: "Local Business Owner",
      comment: "Perfect spot for client meetings. The ambiance is professional yet cozy, and the WiFi is excellent.",
      rating: 5,
      avatar: "💼"
    }
  ];

  const stats = [
    { 
      number: "247", 
      label: "Cups Served Today", 
      icon: <Coffee className="w-8 h-8" />, 
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50"
    },
    { 
      number: "89", 
      label: "Happy Customers", 
      icon: <User className="w-8 h-8" />, 
      color: "from-rose-500 to-pink-600",
      bgColor: "from-rose-50 to-pink-50"
    },
    { 
      number: "100%", 
      label: "Ethically Sourced", 
      icon: <Globe className="w-8 h-8" />, 
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Main Content */}
      <div className="w-full">{/* Floating Header */}
        <div className={`fixed top-6 right-6 z-40 flex items-center gap-4 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg' : ''
        }`}>
          <div className="flex items-center gap-2 text-amber-800">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">{currentTime}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-emerald-600">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Open Now</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-300/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="text-amber-800 font-semibold">Premium Coffee Experience</span>
                <Star className="w-5 h-5 text-amber-500 fill-current" />
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-transparent bg-clip-text">
                  Brew
                </span>
                <br />
                <span className="text-amber-900">& Bliss</span>
              </h1>
              
              <p className="text-2xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed font-light">
                Where every cup is crafted with passion, precision, and the finest ingredients from around the world
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/menu-order'}
                className="group relative bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Explore Menu
                </span>
              </button>
              
              <button 
                onClick={() => window.location.href = '/reservation'}
                className="group bg-white/90 backdrop-blur-sm text-amber-700 border-2 border-amber-200 px-10 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Reserve Table
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-20"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-20"></div>
              </div>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Today's Impact</h2>
              <p className="text-xl text-amber-700/70">Making a difference, one cup at a time</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg`}>
                      {stat.icon}
                    </div>
                    
                    <div className="text-5xl font-black text-amber-900 mb-3 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    
                    <p className="text-amber-700/80 font-medium text-lg">
                      {stat.label}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-amber-900">Signature</span>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-transparent bg-clip-text"> Creations</span>
              </h2>
              <p className="text-xl text-amber-700/70 max-w-2xl mx-auto">
                Carefully crafted beverages that define our passion for exceptional coffee
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-amber-900 mb-2 text-center">
                      {item.name}
                    </h3>
                    
                    <p className="text-amber-700/60 text-sm text-center mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-900 mb-6">Why Choose Us</h2>
              <p className="text-xl text-amber-700/70 max-w-2xl mx-auto">
                Experience the difference that passion and quality make
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                      isActive 
                        ? 'bg-white shadow-2xl border-2 border-amber-200' 
                        : 'bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50"></div>
                    )}
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-amber-900 mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-amber-700/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {isActive && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-amber-900 to-orange-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Customer Stories</h2>
              <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
                Hear what our community has to say about their Brew & Bliss experience
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20">
                <div className="text-8xl text-amber-300/30 absolute top-8 left-8">"</div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-8">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  
                  <p className="text-2xl font-light italic mb-8 leading-relaxed text-white/90">
                    {testimonials[currentTestimonial].comment}
                  </p>
                  
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <div>
                    <p className="font-bold text-xl text-white">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-amber-200/80">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
                
                <div className="text-8xl text-amber-300/30 absolute bottom-8 right-8">"</div>
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index 
                        ? 'bg-amber-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-amber-950 to-orange-950 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Coffee className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">Brew & Bliss</span>
              </div>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Creating exceptional coffee experiences since 2020. Every cup tells a story of passion, quality, and community.
              </p>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Coffee Street, Downtown, CA 90210
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@brewandbliss.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-BREW
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Our Menu', 'Locations', 'Rewards', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-amber-400 rounded-full group-hover:w-2 transition-all"></div>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Hours</h3>
              <div className="space-y-2 text-white/80 mb-8">
                <p>Monday - Friday: 7am - 7pm</p>
                <p>Saturday - Sunday: 8am - 6pm</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Stay Connected</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 rounded-r-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-white/50">
            <p>© {new Date().getFullYear()} Brew & Bliss. Crafted with ❤️ for coffee lovers everywhere.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}