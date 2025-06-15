"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils"

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export const MenuOrderPage: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  const menuItems: MenuItem[] = [
    { id: 1, name: "Espresso", price: 25000, category: "Coffee", image: "data:image/jpeg;base64,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" },
    { id: 2, name: "Latte", price: 28000, category: "Coffee", image: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw2ca0aa66/images/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=1200&sm=fit" },
    { id: 3, name: "Cappuccino", price: 30000, category: "Coffee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY7eOaiPrZfKoGYMb54ePndqcTnNjs9-tuuLkcb8yyUv_gvJnoGdmT1JqsjfLO2HBgwo&usqp=CAU" },
    { id: 4, name: "Matcha Greentiato", price: 20000, category: "Non-Coffee", image: "https://www.rumahmesin.com/wp-content/uploads/2019/10/Jual-Bubuk-Minuman-di-Bekasi.png" },
    { id: 5, name: "Croissant", price: 18000, category: "Pastry", image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1531733399/ho7neioln8p6aotiukpz.jpg" },
    { id: 6, name: "Blueberry Muffin", price: 22000, category: "Pastry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmY9Q1T7Z6SAis2RNN8DmT1JnX514ejiLsza6SjCUP8zvEH70MP-7juXiMcwZzH9iVjo&usqp=CAU" },
    {
        id: 7, 
        name: "Caramel Latte",
        price: 35000,
        category: "Coffee",
        image: "https://awsimages.detik.net.id/community/media/visual/2022/07/18/caramel-latte-vs-caramel-macchiato-3.jpeg?w=724"
      },
      {
        id: 8,
        name: "Avocado Coffee",
        price: 38000,
        category: "Coffee",
        image: "https://cdn0-production-images-kly.akamaized.net/_n5H9JgrsAYmhwNg0_YQjw1Kzbo=/1x0:1000x563/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4392073/original/037039300_1681280610-shutterstock_2259776777.jpg"
      },
      {
        id: 9,
        name: "Grilled Chicken Sandwich",
        price: 60000,
        category: "Food",
        image: "https://loveonetoday.com/wp-content/uploads/2018/01/Love-One-Today-Avocado-Recipes-Facebook-Grilled-Rosemary-Chicken-Sandwich.jpg"
      },
      {
        id: 10,
        name: "Cheesecake",
        price: 30000,
        category: "Pastry",
        image: "https://cdn1-production-images-kly.akamaized.net/LfbUTAuxHpwQC0-kqGvDWvPjUkk=/0x565:667x941/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4391204/original/034304200_1681225630-shutterstock_506925085.jpg"
      },
      {
        id: 11,
        name: "French Fries",
        price: 20000,
        category: "Snacks",
        image: "data:image/jpeg;base64,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"
      },
      {
        id: 12,
        name: "Nugget",
        price: 25000,
        category: "Snacks",
        image: "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/Nugget-ayyam/Nugget%20ayam.jpg"
      },
      {
        id: 13,
        name: "Chicken Wings",
        price: 28000,
        category: "Snacks",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1550611553388.webp"
      },
      {
        id: 14,
        name: "Creamy Carbonara",
        price: 70000,
        category: "Food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejyn3qxndqm5une3DtLIkcS_y85RhPQPEvpBqzE8PB0VR_zQxzNZw63Yn8Hpy5Fv6Sd0&usqp=CAU"
      },
      {
        id: 15, 
        name: " Vanila Latte",
        price: 38000,
        category: "Coffee",
        image: "https://www.bitkaorigin.com/assets/myback/js/elFinder/files/bitka-vanilla-latte-kombinasi-espresso-susu-dan-vanilla-yang-nikmat-image1.jpg"
      },
      {
        id: 16,
        name: "Chicken Katsu Curry",
        price: 75000,
        category: "Food",
        image: "https://blog.klikindomaret.com/wp-content/uploads/2020/01/77834-scaled.jpg"
      },
      {
        id: 17,
        name: "Spaghetti Aglio Olio",
        price: 70000,
        category: "Food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hVaN0avDRI0Z_w9D0djGqaCGh7et6Ps15m-uy-F4HyqhSVhRouH5ceZOrc76B1n-xg4&usqp=CAU"
      },
      {
        id: 18,
        name: "Chicken Teriaki Rice",
        price: 75000,
        category: "Food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXakZMADQdsXbYgIBNrtUyou7-H7TeH2UhA&s"
      },
      {
        id: 19,
        name: "Fish and Chips",
        price: 68000,
        category: "Food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluWcY9fSJx50riE-9-ZZ3R0mD8EQ9uT5qglrYUHXhSlb6CuYMNgMUifdbKJhs5LMMvYU&usqp=CAU"
      },
      {
        id: 20,
        name: "Strawberry Youghurt",
        price: 32000,
        category: "Non-Coffee",
        image: "https://ifoodreal.com/wp-content/uploads/2022/06/fg-strawberry-yogurt.jpg"
    },{
        id: 21,
        name: "Le Mocha Milk",
        price: 32000,
        category: "Non-Coffee",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5XSKNO5WWMTY_juae_nsO46-iXXQIIhmBsM_u1JQyGAygxkbnNI3WOv6DUnjWTuND8I&usqp=CAU"
    },
    {
        id: 22,
        name: "Milk Tea",
        price: 30000,
        category: "Non-Coffee",
        image: "https://cdn.grid.id/crop/0x0:0x0/700x465/photo/2023/08/24/roasjpg-20230824034753.jpg"
        },
        {
        id: 23,
        name: "Lemon Tea",
        price: 25000,
        category: "Non-Coffee",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8TPLCRPtlMuJm_foe15nkBJIEj6Yax0e0K8eeQK0ElFtwRfuCW-5j1QihzrryQeUb4c&usqp=CAU"
        },

  ];

  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        );
      }
      return [...prev, {...item, quantity: 1}];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return removeFromCart(id);
    setCart(prev => 
      prev.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      )
    );
  };

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] py-10 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Menu Section */}
      <div className="lg:col-span-2">
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Coffee", "Non-Coffee", "Pastry", "Food","Snacks"].map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                activeCategory === category
                  ? "bg-amber-800 text-white"
                  : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">{item.name}</h3>
                    <p className="text-amber-900 dark:text-amber-700 font-medium">
                      Rp {item.price.toLocaleString()}
                    </p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.category}
                    </span>
                  </div>
                  <motion.button
                    onClick={() => addToCart(item)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1 rounded-lg text-sm transition"
                  >
                    Add +
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-6 sticky top-6">
          <h2 className="text-xl font-bold dark:text-white mb-4">Your Order</h2>
          
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neutral-500 dark:text-neutral-400 text-center py-8"
            >
              Your cart is empty
            </motion.div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
                    >
                      -
                    </button>
                    <span className="dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
                    >
                      +
                    </button>
                    <span className="dark:text-white">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="dark:text-white">
                      Rp {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      ×
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg dark:text-white">
                  <span>Total:</span>
                  <span>Rp {total.toLocaleString()}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 rounded-lg mt-6 transition"
                onClick={() => setActivePage("payment")}
                disabled={cart.length === 0}
              >
                Proceed to Payment
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

