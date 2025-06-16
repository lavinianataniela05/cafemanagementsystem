"use client";

import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCoffee,
  IconCash,
  IconCalendar,
  IconShoppingCart,
  IconUser,
  IconMenu2,
  IconX
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
  isHovered
}: {
  link: {
    label: string;
    icon: React.ReactNode;
    key: string;
    href?: string;
    description?: string;
  };
  active?: boolean;
  onClick: () => void;
  open: boolean;
  isHovered: boolean;
}) => {
  const showTooltip = !open && isHovered;

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <button
        onClick={onClick}
        className={`
          flex items-center p-3 rounded-xl w-full transition-all duration-300
          ${active
            ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg"
            : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
          }
          ${!open ? "justify-center" : "px-4"}
        `}
      >
        <span className={`flex ${active ? "text-white" : "text-amber-600"}`}>
          {link.icon}
        </span>
        {open && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-3 font-medium"
          >
            {link.label}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute left-full ml-2 top-0 bg-white shadow-lg rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap z-50 border border-gray-200"
          >
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Logo = ({ open }: { open: boolean }) => (
  <Link href="/" className="flex items-center px-2 py-6">
    <motion.div
      className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md"
      whileHover={{ rotate: 5, scale: 1.05 }}
      transition={{ type: "spring" }}
    >
      <IconCoffee className="text-white w-5 h-5" />
    </motion.div>
    {open && (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="ml-3"
      >
        <h1 className="text-xl font-bold text-gray-800">Brew & Bliss</h1>
        <p className="text-xs text-gray-500">Coffee Experience</p>
      </motion.div>
    )}
  </Link>
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
      icon: <IconBrandTabler className="w-5 h-5" />,
      href: "/dashboard",
      description: "Analytics and overview"
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="w-5 h-5" />,
      href: "/menu-order",
      description: "Browse and order items"
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="w-5 h-5" />,
      href: "/reservation",
      description: "Book a table in advance"
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="w-5 h-5" />,
      href: "/payment",
      description: "Transaction history"
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="w-5 h-5" />,
      href: "/about",
      description: "Our story and mission"
    },
    {
      label: "Logout",
      key: "logout",
      icon: <IconArrowLeft className="w-5 h-5" />,
      description: "Sign out from system"
    },
  ];

  const handleLinkClick = (key: string, href?: string) => {
    setActivePage(key);
    if (href) {
      router.push(href);
    } else if (key === 'logout') {
      router.push('/login');
    }
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <motion.aside
      initial={{ width: open ? 260 : 80 }}
      animate={{ width: open ? 260 : 80 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className={`
        h-screen fixed left-0 top-0 z-50
        bg-white border-r border-gray-200
        shadow-xl overflow-hidden
        flex flex-col
      `}
    >
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <div className="flex justify-between items-center">
          <Logo open={open} />
          <motion.button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </motion.button>
        </div>
        
        <nav className="mt-6 space-y-2">
          {links.map((link) => (
            <div 
              key={link.key}
              onMouseEnter={() => setHoveredItem(link.key)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <SidebarLink
                link={link}
                active={activePage === link.key}
                onClick={() => handleLinkClick(link.key, link.href)}
                open={open}
                isHovered={hoveredItem === link.key}
              />
              {open && activePage === link.key && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-gray-500 mt-1 px-4"
                >
                  {link.description}
                </motion.p>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div 
        className="p-4 border-t border-gray-200"
        onMouseEnter={() => setHoveredItem('profile')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <SidebarLink
          link={{
            key: "profile",
            label: "My Profile",
            icon: (
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                <IconUser className="w-3 h-3 text-amber-800" />
              </div>
            ),
            href: "/profile",
            description: "Account settings"
          }}
          active={activePage === 'profile'}
          onClick={() => handleLinkClick('profile', '/profile')}
          open={open}
          isHovered={hoveredItem === 'profile'}
        />
        {open && activePage === 'profile' && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-gray-500 mt-1 px-4"
          >
            Account settings
          </motion.p>
        )}
      </div>
    </motion.aside>
  );
};