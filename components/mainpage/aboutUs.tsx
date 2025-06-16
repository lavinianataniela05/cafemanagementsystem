"use client";

import React, { useState, useEffect } from 'react';
import { Coffee, Heart, Leaf, Users, Star, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Coffee className="w-7 h-7" />,
      title: "Quality Craftsmanship",
      description: "Every cup is meticulously crafted using premium ingredients and time-honored techniques.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Community Heart", 
      description: "We foster warmth, inclusion, and genuine connections in our welcoming space.",
      color: "from-rose-400 to-pink-400"
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Sustainable Future",
      description: "Committed to ethical sourcing and environmentally conscious practices.",
      color: "from-emerald-400 to-green-400"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Local Love",
      description: "Proudly supporting local businesses, artists, and our vibrant community.",
      color: "from-blue-400 to-indigo-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-lg animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full shadow-lg border border-amber-200/50">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm tracking-wide">ESTABLISHED 2018</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent leading-tight">
            About Us
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed font-light">
            Welcome to <span className="font-bold text-orange-600">Brew and Bliss</span> – where every cup of coffee is crafted
            with passion and served with purpose. We are a locally owned café committed to creating warm, memorable
            experiences for our community.
          </p>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-current animate-pulse" style={{animationDelay: `${i * 150}ms`}} />
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 border border-white/80 hover:shadow-amber-200/50 transition-all duration-500 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-4 text-amber-800">
                  <p className="text-lg leading-relaxed">
                    Established in 2018 by two passionate coffee lovers, Brew and Bliss started with a mission to bring
                    handcrafted coffee and heartfelt service to our neighborhood.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We believe in creating a space where everyone feels at home – a sanctuary of warmth, creativity, and connection
                    in our fast-paced world.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-orange-600">
                    Today, we're proud to serve over 500 cups of joy daily to our beloved community.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-white/50">
                    <Coffee className="w-24 h-24 text-amber-700 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto font-light">
              The principles that guide everything we do at Brew and Bliss.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/60 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{transitionDelay: `${600 + index * 150}ms`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {React.cloneElement(value.icon, { className: "w-7 h-7 text-white" })}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-amber-900 group-hover:text-orange-600 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-amber-800 leading-relaxed group-hover:text-amber-900 transition-colors duration-300">
                  {value.description}
                </p>

                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '1000ms'}}>
          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl shadow-2xl p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Join Our Story
              </h3>
              <p className="text-xl text-amber-50 mb-8 leading-relaxed max-w-2xl mx-auto">
                Every cup tells a story. Every smile creates a memory. Come be part of the Brew and Bliss family.
              </p>
              <a href="/reservation" className="inline-block">
                <button className="group px-8 py-4 bg-white text-amber-600 rounded-2xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  <span className="flex items-center gap-2">
                    Visit Us Today
                    <Heart className="w-5 h-5 group-hover:text-rose-500 transition-colors duration-300" />
                  </span>
                </button>
              </a>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;