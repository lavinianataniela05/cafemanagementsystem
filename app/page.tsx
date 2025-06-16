'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SplashScreen() {
  const router = useRouter()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/register')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5ebe0] to-[#d6ccc2] p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center relative w-full max-w-md"
      >
        {/* Rotating coffee cup logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-8 bg-[#6f4e37] p-5 rounded-full shadow-lg w-24 h-24 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-white"
          >
            <path d="M8 2a1 1 0 000 2h2.024c1.875 0 3.652.29 5.018.654l.897.22a1 1 0 10.462-1.946l-.897-.22c-1.542-.386-3.506-.708-5.48-.708H8zM4 5a2 2 0 012-2h8a2 2 0 012 2v5.24l2.803.701A2 2 0 0120 13v2a2 2 0 01-2 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 01-2-2v-2c0-.85.53-1.616 1.336-1.913L8 9.647V5zm2 0v5.647l2.336.584A2 2 0 0110 13v5h4v-5c0-.85.53-1.616 1.336-1.913L18 10.353V5H6z"/>
            <path d="M2 13a2 2 0 012-2h.096c.55 0 1.057.26 1.378.7l.526.724a1 1 0 001.6 0l.526-.724A1.75 1.75 0 019.404 11H20a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"/>
          </svg>
        </motion.div>
        
        {/* Main heading */}
        <motion.h1 
          className="text-4xl font-bold text-[#5e412f] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to <span className="text-[#8b6f47]">Brew & Bliss</span>
        </motion.h1>
                
        {/* Subtitle */}
        <motion.p 
          className="text-lg text-[#a47148] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Where every sip creates perfect moments
        </motion.p>
        
        {/* Animated loading dots */}
        <div className="flex justify-center">
          {[0, 0.2, 0.4].map((delay) => (
            <motion.div
              key={delay}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay
              }}
              className="h-3 w-3 bg-[#6f4e37] rounded-full mx-1"
            />
          ))}
        </div>

        {/* Decorative elements */}
        {[
          { position: 'bottom-10 left-10', size: 'w-16 h-16' },
          { position: 'top-20 right-12', size: 'w-20 h-20' },
          { position: 'top-1/3 left-1/4', size: 'w-12 h-12' }
        ].map((circle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: index * 0.3 }}
            className={`absolute ${circle.position} ${circle.size} bg-[#f2e8dc] rounded-full`}
          />
        ))}
      </motion.div>
    </div>
  )
}