'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Coffee, Bean, Heart, Sparkles, Star } from 'lucide-react'

export default function SplashScreen() {
  const router = useRouter()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/register')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-lg animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center relative w-full max-w-md z-10"
      >
        {/* Animated coffee cup with floating beans */}
        <motion.div
          animate={{ 
            rotate: -5,
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mx-auto mb-8 bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-full shadow-2xl w-28 h-28 flex items-center justify-center relative"
        >
          <Coffee className="w-16 h-16 text-amber-50" strokeWidth={1.5} />
          
          {/* Floating beans around the cup */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: i * 0.3,
                duration: 0.8
              }}
              className="absolute"
              style={{
                left: `${Math.cos(i * 1.2) * 60}px`,
                top: `${Math.sin(i * 1.2) * 60}px`,
              }}
            >
              <Bean className="w-6 h-6 text-amber-200" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Main heading with sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full shadow-lg border border-amber-200/50"
        >
          <Sparkles className="w-5 h-5 text-amber-600" />
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent leading-tight">
            Brew & Bliss
          </h1>
          <Sparkles className="w-5 h-5 text-amber-600" />
        </motion.div>
                
        {/* Subtitle */}
        <motion.p 
          className="text-xl text-amber-800 mb-8 max-w-md mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Where every cup is crafted with passion and served with purpose
        </motion.p>
        
        {/* Animated loading dots with coffee theme */}
        <div className="flex justify-center gap-2">
          {[0, 0.2, 0.4].map((delay) => (
            <motion.div
              key={delay}
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
              className="h-3 w-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-1"
            />
          ))}
        </div>

        {/* Decorative hearts floating up */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -100, opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              className="absolute"
              style={{
                left: `${10 + (i * 15)}%`,
                bottom: 0
              }}
            >
              <Heart className="w-5 h-5 text-rose-400 fill-rose-200/50" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Star rating decoration at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
        ))}
      </div>
    </div>
  )
}