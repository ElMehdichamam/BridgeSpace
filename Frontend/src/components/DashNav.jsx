import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bell, ChevronDown, LogOut, Menu, Plus, Search, Settings, UserRound } from "lucide-react";

export default function NavBar({ title = "Dashboard", subtitle = "Manage your workspace" }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileLinks = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Projects", to: "/projects" },
    { name: "Threads", to: "/threads" },
    { name: "Profile", to: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          
          <div className="flex min-w-0 items-center gap-3">
            <button
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="min-w-0">
              <p className="truncate text-lg font-black tracking-tight text-slate-950">{title}</p>
              <p className="hidden truncate text-xs font-medium text-slate-500 sm:block">{subtitle}</p>
            </div>
          </div>

          <div className="hidden max-w-md flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-500 transition focus-within:border-teal-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-100 md:flex">
            <Search className="h-4 w-4" />
            <input
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="Search projects, threads, or people"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/projects"
              className="hidden items-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700 sm:inline-flex"
            >
              <Plus className="w-4 h-4" />
              New
            </Link>
            
            <button className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <Bell className="w-5 h-5" />
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-500"></span>
            </button>

            <div className="hidden h-8 w-px bg-slate-200 sm:block"></div>

            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 pr-3 transition-all duration-200 hover:border-teal-200 hover:shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-black text-white shadow-md shadow-teal-200">
                  J
                </div>
                <span className="hidden text-sm font-bold text-slate-700 sm:block">John</span>
                <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg border border-slate-200 bg-white py-2 shadow-2xl shadow-slate-200">
                  <div className="border-b border-slate-100 px-4 py-3">
                    <p className="text-sm font-black text-slate-950">John Doe</p>
                    <p className="truncate text-xs font-medium text-slate-500">john.doe@example.com</p>
                  </div>

                  <div className="py-1">
                    <button 
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-800"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <UserRound className="h-5 w-5" />
                      Profile Settings
                    </button>

                    <button 
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-800"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Settings className="h-5 w-5" />
                      Add New Account
                    </button>
                  </div>

                  <div className="mt-1 border-t border-slate-100 pt-1">
                    <button 
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 hover:text-red-700"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <LogOut className="h-5 w-5" />
                      Log Out
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
        {isMenuOpen && (
          <div className="border-t border-slate-100 py-3 lg:hidden">
            <div className="grid gap-2">
              {mobileLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-bold transition ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
