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
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link, active, onClick, open }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        flex items-center rounded-lg p-2 text-sm font-medium transition-colors cursor-pointer w-full
        ${active 
          ? "bg-amber-900 text-white" 
          : "text-neutral-700 hover:bg-neutral-100"
        }
        ${!open ? "justify-center" : ""}
      `}
      aria-current={active ? "page" : undefined}
    >
      <span className="flex items-center justify-center w-5 h-5">
        {link.icon}
      </span>
      {open && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="ml-3"
        >
          {link.label}
        </motion.span>
      )}
    </motion.button>
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
        className="ml-2 text-lg font-semibold text-black"
      >
        Brew & Bliss
      </motion.span>
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
      icon: <IconBrandTabler className="h-5 w-5" />,
      href: "/dashboard"
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="h-5 w-5" />,
      href: "/menu-order"
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="h-5 w-5" />,
      href: "/reservation"
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="h-5 w-5" />,
      href: "/payment"
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="h-5 w-5" />,
      href: "/about"
    },
    {
      label: "Logout",
      key: "logout",
      icon: <IconArrowLeft className="h-5 w-5" />,
    },
  ];

  const handleLinkClick = (key: string, href?: string) => {
    setActivePage(key);
    if (href) {
      router.push(href);
    } else if (key === 'logout') {
      console.log("Logging out...");
      router.push('/login');
    }
  };

  const handleProfileClick = () => {
    setActivePage('profile');
    router.push('/profile');
  };

  return (
    <motion.aside
      initial={{ width: open ? 240 : 64 }}
      animate={{ width: open ? 240 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`
        relative h-full border-r border-neutral-200
        bg-white
      `}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col p-2 justify-between gap-6">
        <div className="flex flex-col overflow-y-auto">
          <Logo open={open} />

          <motion.nav className="mt-6 flex flex-col gap-1">
            {links.map((link) => (
              <motion.div
                key={link.key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <SidebarLink 
                  link={link} 
                  active={activePage === link.key}
                  onClick={() => handleLinkClick(link.key, link.href)}
                  open={open}
                />
              </motion.div>
            ))}
          </motion.nav>
        </div>

        <div className="mb-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <SidebarLink
              link={{
                key: "profile",
                label: "Coffee Master",
                icon: (
                  <div className="w-5 h-5 bg-amber-200 rounded-full flex items-center justify-center">
                    <IconUser className="h-3 w-3 text-amber-800" />
                  </div>
                ),
                href: "/profile"
              }}
              active={activePage === 'profile'}
              onClick={() => handleProfileClick()}
              open={open}
            />
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
};