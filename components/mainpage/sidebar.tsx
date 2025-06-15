// "use client";
// import React from "react";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconCoffee,
//   IconCash,
//   IconCalendar,
//   IconShoppingCart,
// } from "@tabler/icons-react";
// import { motion } from "framer-motion";
// import { cn } from "../../lib/utils";
// import Link from "next/link";

// interface SidebarProps {
//   open: boolean;
//   activePage: string;
//   setActivePage: (page: string) => void;
// }

// interface SidebarLinkProps {
//   link: {
//     label: string;
//     icon: React.ReactNode;
//     key: string;
//   };
//   active?: boolean;
//   onClick: () => void;
// }

// const SidebarLink: React.FC<SidebarLinkProps> = ({ link, active, onClick }) => {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       onClick={onClick}
//       className={cn(
//         "flex items-center rounded-lg p-2 text-sm font-medium transition-colors cursor-pointer w-full",
//         active
//           ? "bg-amber-900 text-white"
//           : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
//       )}
//       aria-current={active ? "page" : undefined}
//     >
//       <span className="flex items-center justify-center w-5 h-5">
//         {link.icon}
//       </span>
//       <motion.span
//         initial={{ opacity: 0, x: -10 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -10 }}
//         className="ml-3"
//       >
//         {link.label}
//       </motion.span>
//     </motion.button>
//   );
// };

// const Logo = () => (
//   <Link href="/" className="relative z-20 flex items-center px-2 py-4">
//     <motion.div
//       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-900"
//       whileHover={{ rotate: 5 }}
//     />
//     <motion.span
//       initial={{ opacity: 0, x: -10 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="ml-2 text-lg font-semibold text-black dark:text-white"
//     >
//       Brew & Bliss
//     </motion.span>
//   </Link>
// );

// const LogoIcon = () => (
//   <Link href="/" className="relative z-20 flex items-center justify-center px-2 py-4">
//     <motion.div
//       className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-900"
//       whileHover={{ rotate: 5 }}
//     />
//   </Link>
// );

// export const Sidebar: React.FC<SidebarProps> = ({ 
//   open, 
//   activePage, 
//   setActivePage 
// }) => {
//   const links = [
//     {
//       label: "Dashboard",
//       key: "dashboard",
//       icon: <IconBrandTabler className="h-5 w-5" />,
//     },
//     {
//       label: "Menu & Order",
//       key: "menu-order",
//       icon: <IconShoppingCart className="h-5 w-5" />,
//     },
//     {
//       label: "Reservation",
//       key: "reservation",
//       icon: <IconCalendar className="h-5 w-5" />,
//     },
//     {
//       label: "Payment",
//       key: "payment",
//       icon: <IconCash className="h-5 w-5" />,
//     },
//     {
//       label: "About Us",
//       key: "about",
//       icon: <IconCoffee className="h-5 w-5" />,
//     },
//     {
//       label: "Logout",
//       key: "logout",
//       icon: <IconArrowLeft className="h-5 w-5" />,
//     },
//   ];

//   return (
//     <motion.aside
//       initial={{ width: open ? 240 : 64 }}
//       animate={{ width: open ? 240 : 64 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className={cn(
//         "relative h-full border-r border-neutral-200 dark:border-neutral-800",
//         "bg-white dark:bg-neutral-950"
//       )}
//       aria-label="Sidebar"
//     >
//       <div className="flex h-full flex-col p-2 justify-between gap-6">
//         <div className="flex flex-col overflow-y-auto">
//           {open ? <Logo /> : <LogoIcon />}
          
//           <motion.nav className="mt-6 flex flex-col gap-1">
//             {links.map((link) => (
//               <motion.div
//                 key={link.key}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 layout
//               >
//                 <SidebarLink 
//                   link={link} 
//                   active={activePage === link.key}
//                   onClick={() => setActivePage(link.key)}
//                 />
//               </motion.div>
//             ))}
//           </motion.nav>
//         </div>

//         <div className="mb-4">
//           <Link href="/profile">
//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <SidebarLink
//                 link={{
//                   key: "profile",
//                   label: open ? "Coffee Master" : "",
//                   icon: (
//                     <img
//                       src="/images/default-profile.jpg"
//                       className="h-5 w-5 rounded-full object-cover"
//                       alt="Profile"
//                       onError={(e) => {
//                         (e.target as HTMLImageElement).src = '/images/default-profile.jpg';
//                       }}
//                     />
//                   ),
//                 }}
//                 onClick={() => setActivePage('profile')}
//                 active={activePage === 'profile'}
//               />
//             </motion.div>
//           </Link>
//         </div>
//       </div>
//     </motion.aside>
//   );
// };
"use client";

import React from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCoffee,
  IconCash,
  IconCalendar,
  IconShoppingCart,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
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
    href?: string; // <- optional href if the link should navigate
  };
  active?: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link, active, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "flex items-center rounded-lg p-2 text-sm font-medium transition-colors cursor-pointer w-full",
        active
          ? "bg-amber-900 text-white"
          : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
      )}
      aria-current={active ? "page" : undefined}
    >
      <span className="flex items-center justify-center w-5 h-5">
        {link.icon}
      </span>
      {link.label && (
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

const Logo = () => (
  <Link href="/" className="relative z-20 flex items-center px-2 py-4">
    <motion.div
      className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-900"
      whileHover={{ rotate: 5 }}
    />
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="ml-2 text-lg font-semibold text-black dark:text-white"
    >
      Brew & Bliss
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="/" className="relative z-20 flex items-center justify-center px-2 py-4">
    <motion.div
      className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-amber-900"
      whileHover={{ rotate: 5 }}
    />
  </Link>
);

export const Sidebar: React.FC<SidebarProps> = ({ open, activePage, setActivePage }) => {
  const router = useRouter();

  const links = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <IconBrandTabler className="h-5 w-5" />,
    },
    {
      label: "Menu & Order",
      key: "menu-order",
      icon: <IconShoppingCart className="h-5 w-5" />,
    },
    {
      label: "Reservation",
      key: "reservation",
      icon: <IconCalendar className="h-5 w-5" />,
    },
    {
      label: "Payment",
      key: "payment",
      icon: <IconCash className="h-5 w-5" />,
    },
    {
      label: "About Us",
      key: "about",
      icon: <IconCoffee className="h-5 w-5" />,
    },
    {
      label: "Logout",
      key: "logout",
      icon: <IconArrowLeft className="h-5 w-5" />,
    },
  ];

  const handleLinkClick = (key: string) => {
    setActivePage(key);

    if (key === 'logout') {
      // Handle logout logic here if needed
      console.log("Logging out...");
    }
  };

  const handleProfileClick = () => {
    setActivePage('profile');
    router.push('/components/mainpage/profile'); // Navigate to /profile page
    // router.push('/profile');

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
          {open ? <Logo /> : <LogoIcon />}

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
                  onClick={() => handleLinkClick(link.key)}
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
                label: open ? "Coffee Master" : "",
                icon: (
                  <img
                    src="/images/default-profile.jpg"
                    className="h-5 w-5 rounded-full object-cover"
                    alt="profile"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/default-profile.jpg';
                    }}
                  />
                ),
              }}
              active={activePage === 'ProfilePage'}
              onClick={handleProfileClick}
            />
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
};
