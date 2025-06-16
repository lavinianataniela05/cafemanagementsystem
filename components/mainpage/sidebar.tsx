"use client";

import React from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCoffee,
  IconCash,
  IconCalendar,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  open: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

const SidebarLink = ({
  link,
  active,
  onClick,
  open
}: {
  link: {
    label: string;
    icon: React.ReactNode;
    key: string;
    href?: string;
  };
  active?: boolean;
  onClick: () => void;
  open: boolean;
}) => {
  return (
    <motion.div
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
          <span className={`ml-3 font-medium ${active ? "font-semibold" : ""}`}>
            {link.label}
          </span>
        )}
      </button>
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
  open, 
  activePage, 
  setActivePage 
}) => {
  const router = useRouter();

  const links = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <IconBrandTabler className="w-5 h-5" />,
      href: "/dashboard"
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="w-5 h-5" />,
      href: "/menu-order"
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="w-5 h-5" />,
      href: "/reservation"
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="w-5 h-5" />,
      href: "/payment"
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="w-5 h-5" />,
      href: "/about"
    },
    {
      label: "Logout",
      key: "logout",
      icon: <IconArrowLeft className="w-5 h-5" />,
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

  return (
    <motion.aside
      initial={{ width: open ? 260 : 80 }}
      animate={{ width: open ? 260 : 80 }}
      transition={{ type: "spring", damping: 20 }}
      className={`
        h-screen fixed left-0 top-0 z-50
        bg-white border-r border-gray-200
        shadow-xl overflow-hidden
      `}
    >
      <div className="flex flex-col h-full p-4">
        <Logo open={open} />
        
        <nav className="mt-2 space-y-2 flex-1">
          {links.map((link) => (
            <SidebarLink
              key={link.key}
              link={link}
              active={activePage === link.key}
              onClick={() => handleLinkClick(link.key, link.href)}
              open={open}
            />
          ))}
        </nav>

        <div className="pb-4">
          <SidebarLink
            link={{
              key: "profile",
              label: "My Profile",
              icon: (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                  <IconUser className="w-3 h-3 text-amber-800" />
                </div>
              ),
              href: "/profile"
            }}
            active={activePage === 'profile'}
            onClick={() => handleLinkClick('profile', '/profile')}
            open={open}
          />
        </div>
      </div>
    </motion.aside>
  );
};