"use client";
import React, { useState } from "react";
import { motion, cubicBezier } from "framer-motion";

interface PaymentPageProps {
  totalAmount?: number;
}

// Define common transition settings for slower animations
const slowTransition = {
  duration: 0.8,
  ease: cubicBezier(0.2, 0.8, 0.4, 1)
};

const buttonTransition = {
  duration: 0.5,
  ease: cubicBezier(0.2, 0.8, 0.4, 1)
};

export const PaymentPage = ({ totalAmount = 125000 }: PaymentPageProps) => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [name, setName] = useState("");

  // Format Rupiah
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "credit-card" && (cardNumber.length < 12 || expiry.length < 5 || cvv.length < 3 || !name)) {
      alert("Please fill in all credit card fields correctly.");
      return;
    }

    setIsPaid(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={slowTransition}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#5c3a28] mb-2 font-[var(--font-lexend-deca)] tracking-wide">Brew & Bliss Café</h1>
          <p className="text-lg text-[#7a5c44]">Complete your order with us</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...slowTransition, delay: 0.2 }}
            className="bg-[#fdf7f1] p-8 rounded-3xl shadow-lg border border-[#e8d9c0]"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#5c3a28] border-b pb-2 border-[#e8d9c0]">
              Payment Details
            </h2>

            <div className="text-xl font-semibold mb-6 p-4 bg-[#f0e6d6] rounded-lg text-center">
              Total Amount: <span className="text-[#a97458] ml-2">{formatRupiah(totalAmount)}</span>
            </div>

            {isPaid ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={slowTransition}
                className="bg-[#e8f5e9] text-[#2e7d32] p-6 rounded-xl text-center shadow-inner"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-bold text-2xl mb-3">Payment Successful!</h3>
                <p className="mb-4">Thank you for your order at Brew and Bliss Cafe</p>
                <p className="text-sm">Your receipt has been sent to your email</p>
              </motion.div>
            ) : (
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#5c3a28]">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("credit-card")}
                      className={`py-2 px-4 rounded-md border transition-all ${paymentMethod === "credit-card" ? "border-[#a97458] bg-[#f0e6d6] shadow-inner" : "border-[#d2b48c] hover:bg-[#f9f1e7]"}`}
                    >
                      <span className="text-sm">Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("cash")}
                      className={`py-2 px-4 rounded-md border transition-all ${paymentMethod === "cash" ? "border-[#a97458] bg-[#f0e6d6] shadow-inner" : "border-[#d2b48c] hover:bg-[#f9f1e7]"}`}
                    >
                      <span className="text-sm">Cash</span>
                    </button>
                  </div>
                </div>

                {paymentMethod === "credit-card" && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-[#5c3a28]">Name on Card</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-md border border-[#d2b48c] bg-white focus:ring-2 focus:ring-[#b08060] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-[#5c3a28]">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 rounded-md border border-[#d2b48c] bg-white focus:ring-2 focus:ring-[#b08060] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-[#5c3a28]">Expiry Date</label>
                        <input
                          type="text"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-md border border-[#d2b48c] bg-white focus:ring-2 focus:ring-[#b08060] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-[#5c3a28]">CVV</label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-md border border-[#d2b48c] bg-white focus:ring-2 focus:ring-[#b08060] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === "paypal" && (
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-[#5c3a28]">PayPal Email</label>
                    <input
                      type="email"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-md border border-[#d2b48c] bg-white focus:ring-2 focus:ring-[#b08060] focus:border-transparent"
                      required
                    />
                  </div>
                )}

                {paymentMethod === "cash" && (
                  <div className="p-4 bg-[#f0e6d6] rounded-lg text-center">
                    <p className="text-[#5c3a28]">
                      Please prepare exact change. Our barista will collect payment when delivering your order.
                    </p>
                    <div className="mt-2 text-2xl">☕💵</div>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={buttonTransition}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8d5b3f] to-[#b08060] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Complete Payment
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...slowTransition, delay: 0.3 }}
            className="bg-[#fdf7f1] p-8 rounded-3xl shadow-lg border border-[#e8d9c0] h-fit"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#5c3a28] border-b pb-2 border-[#e8d9c0]">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-[#f9f1e7] rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#e8d9c0] rounded-md mr-4"></div>
                  <div>
                    <h4 className="font-medium">Caramel Macchiato</h4>
                    <p className="text-sm text-[#7a5c44]">Size: Large</p>
                  </div>
                </div>
                <div className="font-medium">{formatRupiah(45000)}</div>
              </div>

              <div className="flex justify-between items-center p-3 bg-[#f9f1e7] rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-[#e8d9c0] rounded-md mr-4"></div>
                  <div>
                    <h4 className="font-medium">Avocado Toast</h4>
                    <p className="text-sm text-[#7a5c44]">Add extra egg</p>
                  </div>
                </div>
                <div className="font-medium">{formatRupiah(80000)}</div>
              </div>
            </div>

            <div className="space-y-3 border-t border-[#e8d9c0] pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatRupiah(125000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>{formatRupiah(0)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span className="text-[#a97458]">{formatRupiah(totalAmount)}</span>
              </div>
            </div>

            {!isPaid && (
              <div className="mt-8 p-4 bg-[#f0e6d6] rounded-lg">
                <h4 className="font-bold text-[#5c3a28] mb-2">☕ Coffee Haven Rewards</h4>
                <p className="text-sm text-[#7a5c44]">
                  Complete this order to earn 15 points! Every 100 points gets you a free drink.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {!isPaid && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...slowTransition, delay: 0.5 }}
            className="mt-12 text-center text-sm text-[#7a5c44]"
          >
            <p>Secure payment processing. We never store your payment details.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="w-12 h-8 bg-[#e8d9c0] rounded"></div>
              <div className="w-12 h-8 bg-[#e8d9c0] rounded"></div>
              <div className="w-12 h-8 bg-[#e8d9c0] rounded"></div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};