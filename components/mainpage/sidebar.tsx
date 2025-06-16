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
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  defaultOpen?: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

interface SidebarLinkProps {
  link: {
    label: string;
    icon: React.ReactNode;
    key: string;
    href?: string;
  };
  active?: boolean;
  onClick: () => void;
  open: boolean;
  isHovered?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
  link, 
  active, 
  onClick, 
  open,
  isHovered 
}) => {
  const showTooltip = !open && isHovered;

  return (
    <motion.div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "flex items-center rounded-lg p-2 w-full transition-colors",
          active
            ? "bg-amber-900 text-white"
            : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
          !open ? "justify-center" : "px-3"
        )}
        aria-current={active ? "page" : undefined}
      >
        <span className={cn(
          "flex items-center justify-center w-5 h-5",
          active ? "text-white" : "text-neutral-600 dark:text-neutral-400"
        )}>
          {link.icon}
        </span>
        {open && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-3 text-sm font-medium"
          >
            {link.label}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute left-full ml-2 top-0 bg-white shadow-lg rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap z-50 border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
          >
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Logo = ({ open }: { open: boolean }) => (
  <div className="flex items-center justify-between px-2 py-4">
    <Link href="/" className="flex items-center">
      <motion.div
        className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-900"
        whileHover={{ rotate: 5 }}
      />
      {open && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-2 text-lg font-semibold text-black dark:text-white"
        >
          Brew & Bliss
        </motion.span>
      )}
    </Link>
  </div>
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
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="w-5 h-5" />,
      href: "/menu-order",
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="w-5 h-5" />,
      href: "/reservation",
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="w-5 h-5" />,
      href: "/payment",
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="w-5 h-5" />,
      href: "/about",
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

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <motion.aside
      initial={{ width: open ? 240 : 64 }}
      animate={{ width: open ? 240 : 64 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className={cn(
        "h-screen fixed left-0 top-0 z-50",
        "bg-white border-r border-neutral-200",
        "dark:bg-neutral-950 dark:border-neutral-800"
      )}
    >
      <div className="flex flex-col h-full p-2">
        <div className="flex items-center justify-between px-2 py-4">
          <Logo open={open} />
          <motion.button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </motion.button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 mt-2">
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
            </div>
          ))}
        </nav>

        <div 
          className="mt-auto pt-2 border-t border-neutral-200 dark:border-neutral-800"
          onMouseEnter={() => setHoveredItem('profile')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <SidebarLink
            link={{
              key: "profile",
              label: "My Profile",
              icon: (
                <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <IconUser className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-300" />
                </div>
              ),
              href: "/profile",
            }}
            active={activePage === 'profile'}
            onClick={() => handleLinkClick('profile', '/profile')}
            open={open}
            isHovered={hoveredItem === 'profile'}
          />
        </div>
      </div>
    </motion.aside>
  );
};