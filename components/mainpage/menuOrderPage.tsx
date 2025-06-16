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
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Javanese_Kopi_Tubruk.jpg",
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
      image: "https://www.tasteofhome.com/wp-content/uploads/2023/03/TOH-espresso-GettyImages-1291298315-JVcrop.jpg",
      description: "Classic Italian espresso shot",
      rating: 4.8,
      category: "coffee",
    },

    // Non-Coffee
    {
      id: 5,
      name: "Matcha Latte",
      price: 28000,
      image: "https://foto.kontan.co.id/fHuHmKVk2yFhrOtwArz1nAzt_3Y=/smart/2023/05/18/424070204p.jpg",
      description: "Green tea latte with creamy milk",
      rating: 4.6,
      category: "non-coffee",
    },
    {
      id: 6,
      name: "Red Velvet Latte",
      price: 29000,
      image: "https://cdn.shopify.com/s/files/1/0378/3605/collections/Red_v_hot_cold_Mbassy_1024x1024.PNG?v=1512353431",
      description: "Smooth red velvet flavored milk",
      rating: 4.7,
      category: "non-coffee",
    },
    {
      id: 7,
      name: "Taro Milk Bobba",
      price: 27000,
      image: "https://assets.unileversolutions.com/v1/136896011.jpg",
      description: "Sweet and creamy taro drink with Boba pearls",
      rating: 4.5,
      category: "non-coffee",
    },

    // Pastries
    {
      id: 8,
      name: "Pisang Goreng",
      price: 12000,
      image: "https://awsimages.detik.net.id/community/media/visual/2022/06/28/resep-pisang-goreng-keriting_43.jpeg?w=1200",
      description: "Crispy banana fritters with honey",
      rating: 4.5,
      category: "pastries",
    },
    {
      id: 9,
      name: "Croissant",
      price: 18000,
      image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1531733399/ho7neioln8p6aotiukpz.jpg",
      description: "Buttery and flaky French pastry",
      rating: 4.6,
      category: "pastries",
    },
    {
      id: 10,
      name: "Klepon Cake",
      price: 20000,
      image: "https://awsimages.detik.net.id/community/media/visual/2021/12/28/ilustrasi-klepon-cake_43.jpeg?w=1200",
      description: "Traditional cake with palm sugar filling",
      rating: 4.7,
      category: "pastries",
    },

    // Indonesian
    {
      id: 11,
      name: "Nasi Goreng",
      price: 25000,
      image: "https://asset.kompas.com/crops/U6YxhTLF-vrjgM8PN3RYTHlIxfM=/84x60:882x592/1200x800/data/photo/2021/11/17/61949959e07d3.jpg",
      description: "Fried rice with traditional spices",
      rating: 4.9,
      category: "indonesian",
    },
    {
      id: 12,
      name: "Gado-Gado",
      price: 20000,
      image: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg?fit=1920%2C1840&ssl=1",
      description: "Indonesian salad with peanut sauce",
      rating: 4.7,
      category: "indonesian",
    },
    {
      id: 13,
      name: "Soto Ayam",
      price: 22000,
      image: "https://asset.kompas.com/crops/yc5vBBn_kny5uxIg5QNuj7Qzx6c=/0x0:1000x667/1200x800/data/photo/2024/03/21/65fbab7732136.jpeg",
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
      image: "https://peasandcrayons.com/wp-content/uploads/2022/02/creamy-mushroom-soup-recipe-peasandcrayons-4-500x500.jpg",
      description: "Smooth soup served with garlic bread",
      rating: 4.6,
      category: "western",
    },
    {
      id: 16,
      name: "Beef Lasagna",
      price: 32000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qK-g-CVFed1GT-i9vkG28OhkG8GVN5nHww&s",
      description: "Classic Italian baked pasta",
      rating: 4.9,
      category: "western",
    },
    {
      id: 17,
      name: "Caramel Macchiato",
      price: 27000,
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Caramel-macchiato-03873ef.jpg?quality=90&resize=556,505",
      description: "Espresso with caramel and milk",
      rating: 4.8,
      category: "coffee",
      // price: 32000,
    },
    {
      id: 18,
      name: "Iced Americano",
      price: 20000,
      image: "https://mocktail.net/wp-content/uploads/2022/03/homemade-Iced-Americano-recipe_1ig.jpg",
      description: "Chilled espresso with water",
      rating: 4.7,
      category: "coffee",
    },
    {
      id: 19,
      name: "Affogato",
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaxPdlBJLGoGxtOXF1TLCBPjys4LLdVix6w&s",
      description: "Ice cream topped with hot espresso",
      rating: 4.9,
      category: "coffee",
    },
    {
      id: 20,
      name: "Cinnamon Roll Latte",
      price: 28000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH71qx2x0bh28bquhJcoJnPxqrH4WKoKWTA&s",
      description: "Latte with cinnamon roll flavor",
      rating: 4.6,
      category: "coffee",
    },
    {
      id: 21,
      name: "Lemonade Fizz",
      price: 22000,
      image: "https://i0.wp.com/www.thecrumbstories.com/wp-content/uploads/2024/07/1614638312603d6ce8267af.webp?resize=750%2C938&ssl=1",
      description: "Sparkling lemonade with mint",
      rating: 4.5,
      category: "non-coffee",
    },
    {
      id: 22,
      name: "Choco Lava Cake",
      price: 30000,
      image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
      description: "Warm chocolate cake with molten center",
      rating: 4.9,
      category: "pastries",
    },
    {
      id: 23,
      name: "Cheese Croissant",
      price: 20000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARDvwFxBhiKSg7d6WujW4hj9JGx5MKjEAZw&s",
      description: "Flaky croissant filled with cheese",
      rating: 4.6,
      category: "pastries",
    },
    {
      id: 24,
      name: "Bakpia",
      price: 15000,
      image: "https://asset.kompas.com/crops/9XKc_N6G3sfyHMtf-DomGcDLH50=/3x0:700x465/1200x800/data/photo/2021/03/17/60514d8851d3e.jpeg",
      description: "Sweet Indonesian pastry with mung bean filling",
      rating: 4.7,
      category: "pastries",
    },
    {
      id: 25,
      name: "Ayam Penyet",
      price: 30000,
      image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/11/29083630/Ini-Cara-Simpel-Membuat-Ayam-Penyet-dan-Sambelnya-yang-Lezat.jpg",
      description: "Smashed fried chicken with sambal",
      rating: 4.8,
      category: "indonesian",
    },
    {
      id: 26,
      name: "Rendang",
      price: 35000,
      image: "https://www.seriouseats.com/thmb/f13Cq00vkjMqOF2ApkKRQsRF-U4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20241007-SEA-BeefRendang-QiAi-Hero1-37-bb47c42aabec4ac8aa66f49cfca1cf0f.jpg",
      description: "Slow-cooked beef in spicy coconut sauce",
      rating: 4.9,
      category: "indonesian",
    },
    {
      id: 27,
      name: "Pasta Aglio Olio",
      price: 28000,
      image: "https://slurrp.club/wp-content/uploads/2019/06/DSC_1372-600x659.jpg",
      description: "Spaghetti with garlic and olive oil",
      rating: 4.6,
      category: "western",
    },
    {
      id: 28,
      name: "Caesar Salad",
      price: 24000,
      image: "https://www.maggi.co.uk/sites/default/files/srh_recipes/3ee1954a36009dd59be2d362a2a44cf6.jpg",
      description: "Crisp romaine with Caesar dressing and croutons",
      rating: 4.7,
      category: "western",
    },
    {
      id: 29,
      name: "Grilled Salmon",
      price: 40000,
      image: "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
      description: "Perfectly grilled salmon with lemon butter",
      rating: 4.9,
      category: "western",
    },
    {
      id: 30,
      name: "Iced Mocha",
      price: 27000,
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Iced-Mocha-db3c51a.jpg",
      description: "Chilled mocha with whipped cream",
      rating: 4.8,
      category: "coffee",
    },
    {
      id: 31,
      name: "Vanilla Bean Latte",
      price: 26000,
      image: "https://cdn.shopify.com/s/files/1/0187/0338/files/vanilla_latte_on_a_blue_plate.jpg?v=1616171556",
      description: "Latte with rich vanilla flavor",
      rating: 4.7,
      category: "coffee",
    },
    {
      id: 32,
      name: "Blueberry Muffin",
      price: 15000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-3iaTDyueZNAblW-b_URWpDB2JzBEM56tw&s",
      description: "Moist muffin with fresh blueberries",
      rating: 4.6,
      category: "pastries",
    },
  
    {
      id: 34,
      name: "Bakso Sapi",
      price: 22000,
      image: "https://awsimages.detik.net.id/community/media/visual/2019/08/12/dca21bf3-923c-486f-bc2e-a3dcd759b1df_43.jpeg?w=600&q=90",
      description: "Indonesian meatball soup",
      rating: 4.8,
      category: "indonesian",
    },
    {
      id: 35,
      name: "Spaghetti Carbonara",
      price: 30000,
      image: "https://www.masakapahariini.com/wp-content/uploads/2020/12/spaghetti-carbonara.jpg",
      description: "Creamy pasta with pancetta and cheese",
      rating: 4.9,
      category: "western",
    },
    {
      id: 36,
      name: "Chicken Alfredo",
      price: 32000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EuVYEm22v_-iy2vFQ-4niAT7Dk4uzs_CYA&s",
      description: "Pasta in creamy Alfredo sauce with grilled chicken",
      rating: 4.8,
      category: "western",
    },
    {
      id: 37,
      name: "Iced Flat White",
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVx0YH8dnu5cKspi5S9G3BzYyxMkiJoneCyA&s",
      description: "Chilled espresso with velvety milk",
      rating: 4.7,
      category: "coffee",
    },
    {
      id: 38,
      name: "Honey Lemon Tea",
      price: 18000,
      image: "https://storage.googleapis.com/bakingworld-web-production/blog/content_banner/2834928763d94773b93ea5554b4e3554.jpg",
      description: "Refreshing tea with honey and lemon",
      rating: 4.6,
      category: "non-coffee",
    },
    {
      id: 39,
      name: "Apple Pie",
      price: 22000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaQ0aurOfdFloFiQgxIOAIs4rOF6bpAMWWw&s",
      description: "Classic apple pie with cinnamon crust",
      rating: 4.9,
      category: "pastries",
    },
    {
      id: 40,
      name: "Cheese Danish",
      price: 20000,
      image: "https://preppykitchen.com/wp-content/uploads/2021/11/Cheese-Danish-Recipe-Card.jpg",
      description: "Flaky croissant filled with cheese",
      rating: 4.6,
      category: "pastries",
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