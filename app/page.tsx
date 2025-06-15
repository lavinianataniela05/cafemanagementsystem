'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/register')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-amber-700"
            >
              <path d="M8 2a1 1 0 000 2h2.024c1.875 0 3.652.29 5.018.654l.897.22a1 1 0 10.462-1.946l-.897-.22c-1.542-.386-3.506-.708-5.48-.708H8zM4 5a2 2 0 012-2h8a2 2 0 012 2v5.24l2.803.701A2 2 0 0120 13v2a2 2 0 01-2 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 01-2-2v-2c0-.85.53-1.616 1.336-1.913L8 9.647V5zm2 0v5.647l2.336.584A2 2 0 0110 13v5h4v-5c0-.85.53-1.616 1.336-1.913L18 10.353V5H6z"/>
              <path d="M2 13a2 2 0 012-2h.096c.55 0 1.057.26 1.378.7l.526.724a1 1 0 001.6 0l.526-.724A1.75 1.75 0 019.404 11H20a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"/>
            </svg>
          </motion.div>
        </div>
        
        <h1 className="text-5xl font-bold text-amber-900 mb-4">
          Welcome to <span className="text-orange-600">Brew & Bliss</span>
        </h1>
                
        <p className="text-lg text-amber-800 mb-8">
          Where every sip creates perfect moments
        </p>
        
        <div className="flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-3 w-3 bg-amber-600 rounded-full mx-1"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="h-3 w-3 bg-orange-500 rounded-full mx-1"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="h-3 w-3 bg-amber-700 rounded-full mx-1"
          />
        </div>
      </motion.div>
    </div>
  )
}