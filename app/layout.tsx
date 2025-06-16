// 'use client'
// import { usePathname } from 'next/navigation'
// import { Sidebar } from '@/components/mainpage/sidebar'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// import './globals.css'
// import { html } from 'framer-motion/m'
// import React from 'react'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const pathname = usePathname()
  
//   // Define routes that should NOT show sidebar
//   const noSidebarRoutes = ['/', '/login', '/register']
//   const shouldShowSidebar = !noSidebarRoutes.includes(pathname)
//   const [activePage, setActivePage] = React.useState<string>('dashboard');

//   return (
//     <html lang="en" className={`${inter.className}`}>
//       <body className="min-h-screen bg-gray-50 antialiased">
//         <div className="flex min-h-screen">
//           {shouldShowSidebar && (
//             <div className="w-64 fixed left-0 top-0 h-full border-r bg-white shadow-sm z-10">
//               <Sidebar activePage={activePage} setActivePage={setActivePage} />
//             </div>
//           )}
          
//           <main className={`flex-1 ${shouldShowSidebar ? 'ml-64' : ''}`}>
//             <div className="p-0">
//               {children}
//             </div>
//           </main>
//         </div>
//       </body>
//     </html>
//   )
// }

'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Sidebar } from '@/components/mainpage/sidebar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [activePage, setActivePage] = React.useState<string>('dashboard')
  
  // Define routes that should NOT show sidebar
  const noSidebarRoutes = ['/', '/login', '/register']
  const shouldShowSidebar = !noSidebarRoutes.includes(pathname)

  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="min-h-screen bg-gray-50 antialiased">
        <div className="flex min-h-screen">
          {shouldShowSidebar && (
            <div className="w-64 fixed left-0 top-0 h-full border-r bg-white shadow-sm z-10">
              <Sidebar 
                activePage={activePage} 
                setActivePage={setActivePage}
              />
            </div>
          )}
          
          <main className={`flex-1 ${shouldShowSidebar ? 'ml-64' : ''}`}>
            <div className="p-0">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="min-h-screen bg-gray-50 antialiased">
        <div className="flex min-h-screen">
          {shouldShowSidebar && (
            <div className="w-64 fixed left-0 top-0 h-full border-r bg-white shadow-sm z-10">
              <Sidebar 
                activePage={activePage} 
                setActivePage={setActivePage}
              />
            </div>
          )}
          
          <main className={`flex-1 ${shouldShowSidebar ? 'ml-64' : ''}`}>
            <div className="p-0">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
} 