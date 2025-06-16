"use client";

import React, { useState } from "react";
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
} from "@tabler/icons-react";
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
  };
  active?: boolean;
  onClick: () => void;
  open: boolean;
  isHovered: boolean;
}) => {
  const showTooltip = !open && isHovered;

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`
          flex items-center p-3 rounded-xl w-full transition-all duration-200
          ${active
            ? "bg-gradient-to-r from-amber-500 to-amber-400 text-white shadow-md"
            : "text-amber-900 hover:bg-amber-50"
          }
          ${!open ? "justify-center" : "px-4"}
        `}
      >
        <span className={`flex ${active ? "text-white" : "text-amber-600"}`}>
          {link.icon}
        </span>
        {open && (
          <span className="ml-3 font-medium">
            {link.label}
          </span>
        )}
      </button>

      {showTooltip && (
        <div className="absolute left-full ml-2 top-0 bg-white shadow-lg rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap z-50 border border-amber-100">
          {link.label}
        </div>
      )}
    </div>
  );
};

const Logo = ({ open }: { open: boolean }) => (
  <Link href="/" className="flex items-center px-2 py-6">
    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
      <IconCoffee className="text-white w-5 h-5" />
    </div>
    {open && (
      <div className="ml-3">
        <h1 className="text-xl font-bold text-amber-900">Brew & Bliss</h1>
        <p className="text-xs text-amber-600">Coffee Experience</p>
      </div>
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
      icon: <IconDashboard className="w-5 h-5" />,
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
    <div
      className={`
        h-screen fixed left-0 top-0 z-50
        bg-gradient-to-b from-amber-50 to-white
        border-r border-amber-100
        shadow-lg overflow-hidden
        flex flex-col
        ${open ? 'w-64' : 'w-20'}
      `}
    >
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <div className="flex justify-between items-center">
          <Logo open={open} />
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-amber-100 text-amber-700"
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
        
        <nav className="mt-8 space-y-2">
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
      </div>

      <div 
        className="p-4 border-t border-amber-100"
        onMouseEnter={() => setHoveredItem('profile')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <SidebarLink
          link={{
            key: "profile",
            label: "My Profile",
            icon: (
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                <IconUser className="w-3.5 h-3.5 text-amber-800" />
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
  );
};