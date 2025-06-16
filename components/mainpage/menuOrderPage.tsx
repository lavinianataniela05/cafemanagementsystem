"use client";

import React, { useState, useEffect } from "react";
import {
  Plus,
  Minus,
  ShoppingCart,
  Coffee,
  Cookie,
  Sandwich,
  Star,
  Heart,
  Leaf,
  Sparkles
} from "lucide-react";

// Types
type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
};

type CartItem = MenuItem & { quantity: number };

type CategoryKey = "coffee" | "non-coffee" | "pastries" | "indonesian" | "western";

// Component
const categories: {
  id: CategoryKey;
  name: string;
  icon: React.ElementType;
}[] = [
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "non-coffee", name: "Non-Coffee", icon: Coffee },
  { id: "pastries", name: "Pastries", icon: Cookie },
  { id: "indonesian", name: "Indonesian", icon: Sandwich },
  { id: "western", name: "Western", icon: Sandwich },
];

const MenuOrderPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("coffee");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fullMenu: MenuItem[] = [
    // Coffee
    {
      id: 1,
      name: "Kopi Tubruk",
      price: 15000,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      description: "Traditional Indonesian coffee with grounds",
      rating: 4.8,
      category: "coffee",
    },
    {
      id: 2,
      name: "Cappuccino Gula Aren",
      price: 25000,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
      description: "Cappuccino with authentic palm sugar",
      rating: 4.7,
      category: "coffee",
    },
    {
      id: 3,
      name: "Kopi Susu",
      price: 18000,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
      description: "Black coffee with sweet condensed milk",
      rating: 4.9,
      category: "coffee",
    },
    {
      id: 4,
      name: "Espresso",
      price: 22000,
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e5a?w=400&h=300&fit=crop",
      description: "Classic Italian espresso shot",
      rating: 4.8,
      category: "coffee",
    },

    // Non-Coffee
    {
      id: 5,
      name: "Matcha Latte",
      price: 28000,
      image: "https://images.unsplash.com/photo-1515823808972-c0c297b2e8c5?w=400&h=300&fit=crop",
      description: "Green tea latte with creamy milk",
      rating: 4.6,
      category: "non-coffee",
    },
    {
      id: 6,
      name: "Red Velvet Latte",
      price: 29000,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Smooth red velvet flavored milk",
      rating: 4.7,
      category: "non-coffee",
    },
    {
      id: 7,
      name: "Taro Milk",
      price: 27000,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Sweet and creamy taro drink",
      rating: 4.5,
      category: "non-coffee",
    },

    // Pastries
    {
      id: 8,
      name: "Pisang Goreng",
      price: 12000,
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=300&fit=crop",
      description: "Crispy banana fritters with honey",
      rating: 4.5,
      category: "pastries",
    },
    {
      id: 9,
      name: "Croissant",
      price: 18000,
      image: "https://images.unsplash.com/photo-1555507036-ab794f0ec0b6?w=400&h=300&fit=crop",
      description: "Buttery and flaky French pastry",
      rating: 4.6,
      category: "pastries",
    },
    {
      id: 10,
      name: "Klepon",
      price: 8000,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      description: "Traditional cake with palm sugar filling",
      rating: 4.7,
      category: "pastries",
    },

    // Indonesian
    {
      id: 11,
      name: "Nasi Goreng",
      price: 25000,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      description: "Fried rice with traditional spices",
      rating: 4.9,
      category: "indonesian",
    },
    {
      id: 12,
      name: "Gado-Gado",
      price: 20000,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
      description: "Indonesian salad with peanut sauce",
      rating: 4.7,
      category: "indonesian",
    },
    {
      id: 13,
      name: "Soto Ayam",
      price: 22000,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      description: "Aromatic chicken soup with rice",
      rating: 4.8,
      category: "indonesian",
    },

    // Western
    {
      id: 14,
      name: "Club Sandwich",
      price: 30000,
      image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop",
      description: "Triple-decker sandwich with fries",
      rating: 4.8,
      category: "western",
    },
    {
      id: 15,
      name: "Creamy Mushroom Soup",
      price: 28000,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
      description: "Smooth soup served with garlic bread",
      rating: 4.6,
      category: "western",
    },
    {
      id: 16,
      name: "Beef Lasagna",
      price: 32000,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      description: "Classic Italian baked pasta",
      rating: 4.9,
      category: "western",
    },
  ];

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.reduce((acc: CartItem[], item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const formatRupiah = (amount: number | bigint) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(amount);
  };

  const clearCart = () => setCart([]);

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty! Please add items.");
      return;
    }
    alert(`Order placed! Total: ${formatRupiah(getTotalPrice())}`);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-16 w-12 h-12 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-lg animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full shadow-lg border border-amber-200/50">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm tracking-wide">DELICIOUS SELECTIONS</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent leading-tight">
            Our Menu
          </h1>
          
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Handcrafted with love and the finest ingredients. Each item tells a story of tradition and passion.
          </p>

          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-current animate-pulse" style={{animationDelay: `${i * 150}ms`}} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-3">
            {/* Category Tabs */}
            <div className={`flex flex-wrap gap-3 mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {categories.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                    activeCategory === id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                      : "bg-white text-amber-800 hover:bg-amber-50 border border-amber-100"
                  }`}
                >
                  <Icon size={16} className={activeCategory === id ? "text-white" : "text-amber-600"} />
                  {name}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
              {fullMenu
                .filter((item) => item.category === activeCategory)
                .map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/60 hover:border-amber-200/60"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        {item.rating}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-amber-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                          {formatRupiah(item.price)}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="group-hover:bg-gradient-to-r from-amber-500 to-orange-500 bg-amber-100 text-amber-800 group-hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-sm group-hover:shadow-md"
                        >
                          <Plus size={14} className="group-hover:text-white" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className={`sticky top-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/60 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-amber-100">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg shadow-sm">
                  <ShoppingCart className="text-white" size={20} />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Your Order
                </h2>
                {getTotalItems() > 0 && (
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-amber-600 font-light">Your cart is empty</p>
                  <p className="text-sm text-amber-500 mt-1">Add some delicious items</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100/60"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-amber-900 text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-amber-700 font-semibold text-sm">
                            {formatRupiah(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 flex items-center justify-center text-amber-600 hover:text-white hover:bg-amber-500 rounded-lg transition-colors duration-200"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-medium min-w-[24px] text-center text-amber-900 text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-7 h-7 flex items-center justify-center text-amber-600 hover:text-white hover:bg-amber-500 rounded-lg transition-colors duration-200"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Total and Actions */}
                  <div className="border-t border-amber-100 pt-4">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-lg font-semibold text-amber-900">Total:</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                        {formatRupiah(getTotalPrice())}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <button
                        onClick={handleOrder}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Place Order
                      </button>
                      <button
                        onClick={clearCart}
                        className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 rounded-xl font-medium transition-colors duration-300 border border-amber-200"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrderPage;