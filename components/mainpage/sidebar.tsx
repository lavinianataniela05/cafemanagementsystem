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
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Logo = ({ open }: { open: boolean }) => (
  <motion.div 
    className="flex items-center mb-8"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
  >
    <motion.div 
      className="bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-3 rounded-xl mr-3 shadow-lg relative overflow-hidden"
      whileHover={{
        rotate: [0, -10, 10, -5, 5, 0],
        scale: [1, 1.1, 1],
        transition: { 
          duration: 0.8,
          ease: "easeInOut"
        }
      }}
      style={{
        boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
      }}
    >
      <IconCoffee className="w-6 h-6 text-white relative z-10" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    {open && (
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">
          Brew & Bliss
        </h2>
        <p className="text-xs text-slate-500 font-medium">Coffee Experience</p>
      </div>
    )}
  </motion.div>
);

interface SidebarLinkProps {
  link: {
    name: string;
    path?: string;
    icon: React.ReactNode;
  };
  active?: boolean;
  open: boolean;
  onClick?: () => void;
}

const SidebarLink = React.forwardRef<HTMLDivElement, SidebarLinkProps>(
  ({ link, active, open, onClick }, ref) => {
    const itemVariants = {
      hidden: { opacity: 0, x: -30, scale: 0.9 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 200,
          damping: 20
        }
      }
    };

    if (link.path) {
      return (
        <motion.div
          ref={ref}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02, 
            x: 4,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={link.path}
            className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
              active
                ? 'text-amber-800 font-semibold shadow-lg'
                : 'text-slate-600 hover:text-amber-700'
            }`}
            style={active ? {
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.12) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              boxShadow: '0 4px 15px -3px rgba(245, 158, 11, 0.1)'
            } : {}}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100"
              initial={false}
              transition={{ duration: 0.2 }}
            />
            
            <motion.span 
              className={`mr-4 relative z-10 ${
                active ? 'text-amber-600' : 'text-slate-500 group-hover:text-amber-600'
              }`}
              whileHover={{ 
                rotate: [0, -8, 8, -4, 4, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {link.icon}
            </motion.span>
            {open && (
              <>
                <span className="text-sm relative z-10 font-medium">{link.name}</span>
                {active && (
                  <motion.div 
                    className="ml-auto w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-600 rounded-full relative z-10"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </>
            )}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        onClick={onClick}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02, 
          x: 4,
          backgroundColor: "rgba(254, 242, 242, 0.8)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center px-4 py-3 rounded-xl text-red-600 hover:text-red-700 transition-all duration-300 group relative overflow-hidden border border-transparent hover:border-red-200/50 ${
          !open ? 'justify-center' : ''
        }`}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-50/30 to-pink-50/30 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.2 }}
        />
        
        <motion.span 
          className={`w-5 h-5 ${open ? 'mr-4' : ''} text-red-500 relative z-10`}
          whileHover={{ 
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {link.icon}
        </motion.span>
        {open && <span className="text-sm font-semibold relative z-10">{link.name}</span>}
      </motion.button>
    );
  }
);

SidebarLink.displayName = "SidebarLink";

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const getActivePage = () => {
    if (!pathname) return '';
    if (pathname.includes('dashboard')) return 'dashboard';
    if (pathname.includes('menu-order')) return 'menu-order';
    if (pathname.includes('reservation')) return 'reservation';
    if (pathname.includes('payment')) return 'payment';
    if (pathname.includes('about')) return 'about';
    if (pathname.includes('profile')) return 'profile';
    return '';
  };

  const activePage = getActivePage();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <IconBrandTabler className="w-5 h-5" /> },
    { name: "Menu & Order", path: "/menu-order", icon: <IconShoppingCart className="w-5 h-5" /> },
    { name: "Reservation", path: "/reservation", icon: <IconCalendar className="w-5 h-5" /> },
    { name: "Payment", path: "/payment", icon: <IconCash className="w-5 h-5" /> },
    { name: "About Us", path: "/about", icon: <IconCoffee className="w-5 h-5" /> },
    { name: "Logout", icon: <IconArrowLeft className="w-5 h-5" /> },
  ];

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as "spring", 
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    router.push('/login');
  };

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className={`${open ? 'w-64' : 'w-20'} bg-gradient-to-b from-slate-50 via-white to-amber-50/30 backdrop-blur-sm shadow-2xl h-screen p-6 border-r border-amber-100/50 flex flex-col fixed left-0 top-0 z-50`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(254,243,199,0.95) 50%, rgba(255,237,213,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(245, 158, 11, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.5)'
      }}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col justify-between gap-6">
        <div className="flex flex-col overflow-y-auto">
          <Logo open={open} />

          <div className="relative mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"></div>
          </div>

          <nav className="space-y-2 flex-1">
            <AnimatePresence>
              {navLinks.map((link) => (
                <SidebarLink
                  key={link.name}
                  link={link}
                  active={activePage === link.path?.split('/')[1]?.replace('-', '')}
                  open={open}
                  onClick={link.name === "Logout" ? handleLogout : undefined}
                />
              ))}
            </AnimatePresence>
          </nav>
        </div>

        <div className="relative my-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-red-200/30 to-transparent"></div>
        </div>

        <Link href="/profile">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
            className="flex items-center px-4 py-3 rounded-xl group relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(254, 243, 199, 0.3)",
              transition: { duration: 0.2 }
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center shadow-lg mr-3 overflow-hidden">
              <IconUser className="w-5 h-5 text-amber-700" />
            </div>
            {open && (
              <div>
                <p className="text-sm font-medium text-slate-700">Coffee Master</p>
                <p className="text-xs text-slate-500">View profile</p>
              </div>
            )}
          </motion.div>
        </Link>
      </div>
    </motion.aside>
  );
};