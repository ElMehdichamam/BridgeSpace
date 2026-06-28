import { useState } from "react";

export default function NavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    // Sticky container with a frosted glass effect
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Hamburger Menu */}
          <button 
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            onClick={() => console.log("Hamburger clicked")} // Placeholder for later
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Right Side: Notifications & Profile */}
          <div className="flex items-center gap-3">
            
            {/* Notification Bell */}
            <button className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              {/* Red Dot Indicator */}
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 text-white rounded-full border-2 border-white animate-pulse"></span>
            </button>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

            {/* Profile Avatar & Dropdown Wrapper */}
            <div className="relative">
              {/* Avatar Button */}
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full border border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all duration-200"
              >
                {/* User Avatar */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  J
                </div>
                {/* User Name (Hidden on very small screens) */}
                <span className="text-sm font-semibold text-gray-700 hidden sm:block">John</span>
                
                {/* Chevron Down Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 origin-top-right animate-in fade-in slide-in-from-top-2">
                  
                  {/* User Info Header inside Dropdown */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-bold text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500 truncate">john.doe@example.com</p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <button 
                      className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      Profile Settings
                    </button>

                    <button 
                      className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>
                      Add New Account
                    </button>
                  </div>

                  {/* Log Out Divider & Button */}
                  <div className="border-t border-gray-100 pt-1 mt-1">
                    <button 
                      className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                      </svg>
                      Log Out
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}