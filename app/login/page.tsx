'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any } }) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Simulate login error for demo
      if (formData.email === 'test@test.com' && formData.password === 'password') {
        router.push('/dashboard')
      } else {
        setError('Invalid email or password. Please try again.')
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5ebe0] to-[#d6ccc2] p-4">
      <div className="w-full max-w-md px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-[#6f4e37] p-4 rounded-full shadow-lg transform hover:rotate-12 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white text-4xl w-8 h-8"
            >
              <path d="M8 2a1 1 0 000 2h2.024c1.875 0 3.652.29 5.018.654l.897.22a1 1 0 10.462-1.946l-.897-.22c-1.542-.386-3.506-.708-5.48-.708H8zM4 5a2 2 0 012-2h8a2 2 0 012 2v5.24l2.803.701A2 2 0 0120 13v2a2 2 0 01-2 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 01-2-2v-2c0-.85.53-1.616 1.336-1.913L8 9.647V5zm2 0v5.647l2.336.584A2 2 0 0110 13v5h4v-5c0-.85.53-1.616 1.336-1.913L18 10.353V5H6z"/>
            </svg>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-[#e6d3c4] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#f2e8dc] rounded-full opacity-30"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#f2e8dc] rounded-full opacity-30"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-center text-[#5e412f] mb-2">
              Welcome Back
            </h1>
            <p className="text-center text-[#8b6f47] mb-8">
              Sign in to your Brew & Bliss account
            </p>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-between bg-red-50 text-red-700 p-4 rounded-lg border border-red-100 shadow-sm">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      <span>{error}</span>
                    </div>
                    <button 
                      onClick={() => setError('')} 
                      className="text-red-400 hover:text-red-600 transition-colors"
                      aria-label="Close error message"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Email input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 ${error ? "text-red-500" : "text-[#a47148]"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:border transition-colors ${
                      error
                        ? "border-red-300 focus:ring-red-200 focus:border-red-300"
                        : "border-[#d6ccc2] focus:ring-[#e6d3c4] focus:border-[#a47148]"
                    }`}
                    placeholder="Email address"
                    required
                    aria-invalid={!!error}
                  />
                </div>

                {/* Password input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 ${error ? "text-red-500" : "text-[#a47148]"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:border transition-colors ${
                      error
                        ? "border-red-300 focus:ring-red-200 focus:border-red-300"
                        : "border-[#d6ccc2] focus:ring-[#e6d3c4] focus:border-[#a47148]"
                    }`}
                    placeholder="Password"
                    required
                    aria-invalid={!!error}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#6f4e37] focus:ring-[#6f4e37] border-[#b08968] rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-[#5e412f]">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button type="button" className="font-medium text-[#8b6f47] hover:text-[#6f4e37] transition-colors">
                    Forgot password?
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#6f4e37] hover:bg-[#5e412f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a47148] transition-colors ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : "Sign in"}
              </motion.button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#d6ccc2]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#a47148]">New to Brew & Bliss?</span>
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4"
              >
                <button
                  onClick={() => router.push('/register')}
                  className="w-full flex justify-center py-2 px-4 border border-[#c9b29b] rounded-lg shadow-sm text-sm font-medium text-[#5e412f] bg-white hover:bg-[#f2e8dc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a47148] transition-colors"
                >
                  Create an account
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-sm text-[#5e412f]"
        >
          <p>© {new Date().getFullYear()} Brew & Bliss Café. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}