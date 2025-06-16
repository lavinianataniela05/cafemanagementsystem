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
    description?: string;
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
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={cn(
          "flex items-center rounded-lg p-2 text-sm font-medium transition-colors cursor-pointer w-full",
          active
            ? "bg-amber-900 text-white"
            : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
          !open ? "justify-center" : ""
        )}
        aria-current={active ? "page" : undefined}
      >
        <span className="flex items-center justify-center w-5 h-5">
          {link.icon}
        </span>
        {open && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-3"
          >
            {link.label}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: "spring", damping: 25 }}
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
  <Link href="/" className="relative z-20 flex items-center px-2 py-4">
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
      icon: <IconBrandTabler className="h-5 w-5" />,
      href: "/dashboard",
      // description: "Analytics and overview"
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="h-5 w-5" />,
      href: "/menu-order",
      // description: "Browse and order items"
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="h-5 w-5" />,
      href: "/reservation",
      // description: "Book a table in advance"
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="h-5 w-5" />,
      href: "/payment",
      // description: "Transaction history"
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="h-5 w-5" />,
      href: "/about",
      // description: "Our story and mission"
    },
    {
      label: "Logout",
      key: "logout",
      icon: <IconArrowLeft className="h-5 w-5" />,
      // description: "Sign out from system"
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "relative h-full border-r border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-neutral-950"
      )}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col p-2 justify-between gap-6">
        <div className="flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center">
            <Logo open={open} />
            <motion.button
              onClick={toggleSidebar}
              className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </motion.button>
          </div>

          <motion.nav className="mt-6 flex flex-col gap-1">
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
                    className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 px-2"
                  >
                    {/* {link.description} */}
                  </motion.p>
                )}
              </div>
            ))}
          </motion.nav>
        </div>

        <div 
          className="mb-4 border-t border-neutral-200 dark:border-neutral-800 pt-2"
          onMouseEnter={() => setHoveredItem('profile')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <SidebarLink
            link={{
              key: "profile",
              label: "My Profile",
              icon: (
                <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <IconUser className="w-3 h-3 text-neutral-600 dark:text-neutral-300" />
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
              className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 px-2"
            >
              Account settings
            </motion.p>
          )}
        </div>
      </div>
    </motion.aside>
  );
};