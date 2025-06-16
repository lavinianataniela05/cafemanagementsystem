"use client";

import React, { useState } from "react";
import {
  Plus,
  Minus,
  ShoppingCart,
  Coffee,
  Cookie,
  Sandwich,
  Star,
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
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
            ☕ Brew & Bliss Cafe
          </h1>
          <p className="text-amber-700 text-lg">Traditional & Modern Delights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Menu Section */}
          <div className="lg:col-span-3">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 p-2 bg-white rounded-xl shadow-sm">
              {categories.map(({ id, name, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === id
                      ? "bg-amber-800 text-white shadow-md"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                  }`}
                >
                  <Icon size={16} />
                  {name}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {fullMenu
                .filter((item) => item.category === activeCategory)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-amber-100"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-amber-900 mb-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star size={14} className="text-amber-500 fill-current" />
                          <span className="text-sm text-amber-700">{item.rating}</span>
                        </div>
                        <p className="text-amber-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-amber-800">
                          {formatRupiah(item.price)}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
                        >
                          <Plus size={14} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-5 sticky top-6 border border-amber-100">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-100">
                <ShoppingCart className="text-amber-700" size={20} />
                <h2 className="text-lg font-semibold text-amber-900">Your Order</h2>
                {getTotalItems() > 0 && (
                  <span className="bg-amber-700 text-white text-xs px-2 py-1 rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-amber-600">Your cart is empty</p>
                  <p className="text-sm text-amber-500 mt-1">Add some delicious items</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-3 mb-5 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-amber-50 rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-amber-900 text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-amber-700 font-semibold text-sm">
                            {formatRupiah(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-amber-600 hover:text-amber-800 p-1 hover:bg-amber-100 rounded"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-medium min-w-[24px] text-center text-amber-900 text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="text-amber-600 hover:text-amber-800 p-1 hover:bg-amber-100 rounded"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Total and Actions */}
                  <div className="border-t border-amber-100 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-amber-900">Total:</span>
                      <span className="text-xl font-bold text-amber-800">
                        {formatRupiah(getTotalPrice())}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <button
                        onClick={handleOrder}
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold transition-colors shadow-sm"
                      >
                        Place Order
                      </button>
                      <button
                        onClick={clearCart}
                        className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 rounded-lg font-medium transition-colors"
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