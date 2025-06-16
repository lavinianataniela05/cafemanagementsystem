"use client";

import React, { useState, useEffect } from "react";
import {
  IconArrowLeft,
  IconDashboard,
  IconCoffee,
  IconCash,
  IconCalendar,
  IconShoppingCart,
  IconUser,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconBell,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  defaultOpen?: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

const SidebarLink = ({ 
  link, 
  active, 
  onClick, 
  open,
  isHovered,
  hasNotification = false
}: {
  link: {
    label: string;
    icon: React.ReactNode;
    key: string;
    href?: string;
    subItems?: Array<{ label: string; key: string; href: string }>;
  };
  active?: boolean;
  onClick: () => void;
  open: boolean;
  isHovered: boolean;
  hasNotification?: boolean;
}) => {
  const [showSubItems, setShowSubItems] = useState(false);
  const showTooltip = !open && isHovered && !link.subItems;

  useEffect(() => {
    if (!open) setShowSubItems(false);
  }, [open]);

  const handleClick = () => {
    if (link.subItems && open) {
      setShowSubItems(!showSubItems);
    } else {
      onClick();
    }
  };

  return (
    <motion.div className="relative">
      <motion.button
        whileHover={{ scale: 1.02, x: 2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={`
          flex items-center p-3 rounded-xl w-full transition-all duration-300 relative overflow-hidden
          ${active
            ? "bg-gradient-to-r from-brown-600 via-brown-500 to-brown-600 text-white shadow-lg shadow-brown-700/30"
            : "text-brown-800 hover:bg-gradient-to-r hover:from-brown-50 hover:to-brown-100 hover:shadow-sm"
          }
          ${!open ? "justify-center" : "px-4"}
          group
        `}
      >
        {/* Animated background highlight */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brown-500/20 to-brown-600/20 rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative flex items-center w-full">
          <span className={`flex relative ${active ? "text-white" : "text-brown-600 group-hover:text-brown-700"}`}>
            {link.icon}
            {hasNotification && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
              />
            )}
          </span>
          
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 flex-1 flex items-center justify-between"
            >
              <span className="font-medium text-sm">
                {link.label}
              </span>
              {link.subItems && (
                <motion.div
                  animate={{ rotate: showSubItems ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronDown className="w-4 h-4" />
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* Sub-items */}
      <AnimatePresence>
        {open && showSubItems && link.subItems && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 mt-1 space-y-1 border-l-2 border-brown-200 pl-4"
          >
            {link.subItems.map((subItem) => (
              <motion.button
                key={subItem.key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 2 }}
                onClick={() => onClick()}
                className="flex items-center p-2 rounded-lg w-full text-sm text-brown-700 hover:bg-brown-50 hover:text-brown-800 transition-all duration-200"
              >
                {subItem.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-brown-800 text-white shadow-xl rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap z-50 border border-brown-700"
          >
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brown-800 rotate-45 border-l border-b border-brown-700" />
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Logo = ({ open }: { open: boolean }) => (
  <Link href="/" className="flex items-center px-2 py-6 group">
    <motion.div
      className="h-10 w-10 rounded-xl bg-gradient-to-br from-brown-700 via-brown-600 to-brown-800 flex items-center justify-center shadow-lg relative overflow-hidden"
      whileHover={{ rotate: 5, scale: 1.05 }}
      transition={{ type: "spring", damping: 15 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <IconCoffee className="text-white w-6 h-6 relative z-10" />
    </motion.div>
    {open && (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="ml-3"
      >
        <h1 className="text-xl font-bold text-brown-800 group-hover:text-brown-700 transition-colors">
          Brew & Bliss
        </h1>
        <p className="text-xs text-brown-600 font-medium">
          Coffee Experience
        </p>
      </motion.div>
    )}
  </Link>
);

const UserProfile = ({ 
  open, 
  onClick, 
  active, 
  isHovered 
}: {
  open: boolean;
  onClick: () => void;
  active: boolean;
  isHovered: boolean;
}) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.02 }}
  >
    <motion.button
      onClick={onClick}
      className={`
        flex items-center p-3 rounded-xl w-full transition-all duration-300
        ${active
          ? "bg-gradient-to-r from-brown-600 to-brown-500 text-white shadow-lg"
          : "text-brown-800 hover:bg-brown-50"
        }
        ${!open ? "justify-center" : "px-4"}
      `}
    >
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brown-200 via-brown-300 to-brown-400 flex items-center justify-center shadow-md">
          <IconUser className="w-4 h-4 text-brown-800" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
      </div>
      
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-3 flex-1 text-left"
        >
          <p className="font-medium text-sm">John Doe</p>
          <p className="text-xs text-brown-600">Premium Member</p>
        </motion.div>
      )}
    </motion.button>

    {/* Tooltip for collapsed state */}
    <AnimatePresence>
      {!open && isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.9 }}
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-brown-800 text-white shadow-xl rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap z-50"
        >
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-brown-800 rotate-45" />
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-brown-300">Premium Member</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const Sidebar: React.FC<SidebarProps> = ({ 
  defaultOpen = true,
  activePage, 
  setActivePage 
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(defaultOpen);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const links = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <IconDashboard className="w-5 h-5" />,
      href: "/dashboard",
    },
    {
      label: "Menu & Orders",
      key: "menu-order",
      icon: <IconShoppingCart className="w-5 h-5" />,
      href: "/menu-order",
      subItems: [
        { label: "View Menu", key: "view-menu", href: "/menu" },
        { label: "Order History", key: "order-history", href: "/orders" },
        { label: "Quick Order", key: "quick-order", href: "/quick-order" },
      ]
    },
    {
      label: "Reservations",
      key: "reservation",
      icon: <IconCalendar className="w-5 h-5" />,
      href: "/reservation",
    },
    {
      label: "Payments",
      key: "payment",
      icon: <IconCash className="w-5 h-5" />,
      href: "/payment",
    },
    {
      label: "Notifications",
      key: "notifications",
      icon: <IconBell className="w-5 h-5" />,
      href: "/notifications",
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="w-5 h-5" />,
      href: "/about",
    },
    {
      label: "Settings",
      key: "settings",
      icon: <IconSettings className="w-5 h-5" />,
      href: "/settings",
    },
  ];

  const handleLinkClick = (key: string, href?: string) => {
    setActivePage(key);
    if (href) {
      router.push(href);
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    router.push('/login');
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {open && window.innerWidth < 768 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ width: open ? 280 : 80 }}
        animate={{ width: open ? 280 : 80 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className={`
          h-screen fixed left-0 top-0 z-50
          bg-gradient-to-b from-white via-brown-50/30 to-white
          border-r border-brown-100/50
          shadow-xl backdrop-blur-sm
          flex flex-col
          ${open ? 'shadow-2xl' : 'shadow-lg'}
        `}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-4 border-b border-brown-100/50">
          <div className="flex justify-between items-center">
            <Logo open={open} />
            <motion.button
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-brown-100/50 text-brown-700 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brown-200 scrollbar-track-transparent">
          <nav className="space-y-2">
            {links.map((link, index) => (
              <motion.div 
                key={link.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredItem(link.key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <SidebarLink
                  link={link}
                  active={activePage === link.key}
                  onClick={() => handleLinkClick(link.key, link.href)}
                  open={open}
                  isHovered={hoveredItem === link.key}
                  hasNotification={link.key === 'notifications'}
                />
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-brown-100/50 space-y-2">
          {/* User Profile */}
          <div 
            onMouseEnter={() => setHoveredItem('profile')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <UserProfile
              open={open}
              onClick={() => handleLinkClick('profile', '/profile')}
              active={activePage === 'profile'}
              isHovered={hoveredItem === 'profile'}
            />
          </div>

          {/* Logout Button */}
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              flex items-center p-3 rounded-xl w-full transition-all duration-200
              text-red-600 hover:bg-red-50 hover:text-red-700
              ${!open ? "justify-center" : "px-4"}
            `}
          >
            <IconLogout className="w-5 h-5" />
            {open && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-3 font-medium text-sm"
              >
                Logout
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.aside>

      {/* Main content spacer */}
      <motion.div
        animate={{ marginLeft: open ? 280 : 80 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className="hidden md:block"
      />
    </>
  );
};