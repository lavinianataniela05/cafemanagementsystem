"use client";
import React, { useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import { CreditCard, Coffee, CheckCircle, Shield, Star, Gift } from "lucide-react";

interface PaymentPageProps {
  totalAmount?: number;
}

// Enhanced transition settings with staggered animations
const slowTransition = {
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

export default function PaymentPage({ totalAmount = 125000 }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Format Rupiah
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handlePayment = async () => {
    setIsLoading(true);

    if (paymentMethod === "credit-card" && (cardNumber.length < 12 || expiry.length < 5 || cvv.length < 3 || !name)) {
      alert("Please fill in all credit card fields correctly.");
      setIsLoading(false);
      return;
    }

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsPaid(true);
  };

  const paymentMethods = [
    { id: "credit-card", label: "Card", icon: CreditCard },
    { id: "cash", label: "Cash", icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-100/10 to-amber-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={slowTransition}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ ...slowTransition, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full mb-6 shadow-2xl"
            >
              <Coffee className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-4 tracking-tight">
              Brew & Bliss Café
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...slowTransition, delay: 0.4 }}
              className="text-xl text-amber-700/80 font-medium"
            >
              Complete your perfect coffee experience
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...slowTransition, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-orange-50/20 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <Shield className="w-6 h-6 text-amber-600 mr-3" />
                    <h2 className="text-2xl lg:text-3xl font-bold text-amber-900">
                      Payment Details
                    </h2>
                  </div>

                  {/* Total Amount Display */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ...slowTransition, delay: 0.5 }}
                    className="relative mb-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200/50 shadow-inner"
                  >
                    <div className="text-center">
                      <p className="text-amber-700 text-lg mb-2">Total Amount</p>
                      <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                        {formatRupiah(totalAmount)}
                      </div>
                    </div>
                  </motion.div>

                  {isPaid ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ...slowTransition, type: "spring", stiffness: 200 }}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl text-center shadow-xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-2xl lg:text-3xl mb-3 text-green-800">Payment Successful!</h3>
                      <p className="text-green-700 mb-4 text-lg">Thank you for choosing Brew & Bliss Café</p>
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Star className="w-4 h-4 fill-current" />
                        <p className="text-sm">Your receipt has been sent to your email</p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      {/* Payment Method Selection */}
                      <motion.div
                        variants={staggerChildren}
                        initial="initial"
                        animate="animate"
                        className="space-y-3"
                      >
                        <label className="block text-sm font-semibold text-amber-900 mb-3">Payment Method</label>
                        <div className="grid grid-cols-2 gap-3">
                          {paymentMethods.map((method) => {
                            const Icon = method.icon;
                            return (
                              <motion.button
                                key={method.id}
                                variants={childVariants}
                                type="button"
                                onClick={() => setPaymentMethod(method.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative py-4 px-6 rounded-xl border-2 transition-all duration-300 ${
                                  paymentMethod === method.id 
                                    ? "border-amber-500 bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg" 
                                    : "border-amber-200 hover:border-amber-300 bg-white hover:bg-amber-50/50"
                                }`}
                              >
                                <div className="flex items-center justify-center space-x-2">
                                  <Icon className={`w-5 h-5 ${paymentMethod === method.id ? 'text-amber-600' : 'text-amber-500'}`} />
                                  <span className={`font-medium ${paymentMethod === method.id ? 'text-amber-800' : 'text-amber-700'}`}>
                                    {method.label}
                                  </span>
                                </div>
                                {paymentMethod === method.id && (
                                  <motion.div
                                    layoutId="selected-indicator"
                                    className="absolute inset-0 border-2 border-amber-500 rounded-xl bg-gradient-to-r from-amber-100/30 to-orange-100/30"
                                  />
                                )}
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>

                      {/* Credit Card Form */}
                      {paymentMethod === "credit-card" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-amber-900">Name on Card</label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 bg-white/70 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all backdrop-blur-sm"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2 text-amber-900">Card Number</label>
                            <input
                              type="text"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 bg-white/70 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all backdrop-blur-sm"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold mb-2 text-amber-900">Expiry Date</label>
                              <input
                                type="text"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 bg-white/70 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all backdrop-blur-sm"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-2 text-amber-900">CVV</label>
                              <input
                                type="text"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                placeholder="123"
                                className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 bg-white/70 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all backdrop-blur-sm"
                                required
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Cash Payment Info */}
                      {paymentMethod === "cash" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200 text-center"
                        >
                          <div className="text-4xl mb-3">☕💵</div>
                          <p className="text-amber-800 font-medium">
                            Please prepare exact change. Our barista will collect payment when delivering your order.
                          </p>
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={buttonTransition}
                        onClick={handlePayment}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group disabled:opacity-70"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative z-10 text-lg">
                          {isLoading ? "Processing..." : "Complete Payment"}
                        </span>
                        {isLoading && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        )}
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...slowTransition, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 sticky top-8">
                <div className="flex items-center mb-6">
                  <Coffee className="w-6 h-6 text-amber-600 mr-3" />
                  <h2 className="text-2xl font-bold text-amber-900">Order Summary</h2>
                </div>

                <motion.div
                  variants={staggerChildren}
                  initial="initial"
                  animate="animate"
                  className="space-y-4 mb-6"
                >
                  <motion.div variants={childVariants} className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-400 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-900">Klepon Cake</h4>
                    </div>
                    <div className="font-bold text-amber-800">{formatRupiah(20000)}</div>
                  </motion.div>
<motion.div variants={childVariants} className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-400 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-900">Caramel Macchiato</h4>
                      <p className="text-sm text-amber-700">Size: Large</p>
                    </div>
                    <div className="font-bold text-amber-800">{formatRupiah(27000)}</div>
                  </motion.div>
                  <motion.div variants={childVariants} className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-2xl"></span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-900">Soto Ayam</h4>
                    </div>
                    <div className="font-bold text-amber-800">{formatRupiah(22000)}</div>
                  </motion.div>
                </motion.div>
                <motion.div variants={childVariants} className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-400 rounded-xl mr-4 flex items-center justify-center shadow-lg">
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-amber-900">Beef Lasagna</h4>
                    </div>
                    <div className="font-bold text-amber-800">{formatRupiah(32000)}</div>
                  </motion.div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 border-t border-amber-200 pt-6">
                  <div className="flex justify-between text-amber-700">
                    <span>Subtotal</span>
                    <span>{formatRupiah(125000)}</span>
                  </div>
                  <div className="flex justify-between text-amber-700">
                    <span>Tax (10%)</span>
                    <span>{formatRupiah(0)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-3 border-t border-amber-200">
                    <span className="text-amber-900">Total</span>
                    <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                      {formatRupiah(totalAmount)}
                    </span>
                  </div>
                </div>

                {/* Rewards Card
                {!isPaid && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...slowTransition, delay: 0.6 }}
                    className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200"
                  >
                    <div className="flex items-center mb-2">
                      <Gift className="w-5 h-5 text-purple-600 mr-2" />
                      <h4 className="font-bold text-purple-800">Coffee Haven Rewards</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      Complete this order to earn <span className="font-semibold">15 points</span>! 
                      Every 100 points gets you a free drink.
                    </p>
                    <div className="mt-3 bg-white/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/4"></div>
                    </div>
                    <p className="text-xs text-purple-600 mt-1">25/100 points to next reward</p>
                  </motion.div>
                )} */}
              </div>
            </motion.div>
          </div>

          {/* Security Footer */}
          {!isPaid && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...slowTransition, delay: 0.7 }}
              className="mt-16 text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-amber-600 mr-2" />
                <p className="text-amber-700 font-medium">Secure payment processing. Your data is protected.</p>
              </div>
              <div className="flex justify-center space-x-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="w-12 h-8 bg-gradient-to-r from-amber-200 to-orange-200 rounded-md shadow-lg"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}