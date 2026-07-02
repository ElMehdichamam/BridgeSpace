import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Bell, ChevronDown, LogOut, Menu, Moon, Plus, Search, Settings, Sun, UserRound } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../context/ThemeContext";

export default function NavBar({ title = "Dashboard", subtitle = "Manage your workspace" }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const name = user?.username || user?.name || "User";
  const email = user?.email || "";
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "U";

  const mobileLinks = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Projects", to: "/projects" },
    { name: "Threads", to: "/threads" },
    { name: "Profile", to: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-base)]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">

          <div className="flex min-w-0 items-center gap-3">
            <button
              className="rounded-lg p-2 text-[var(--text-muted)] transition hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-ring)] lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="min-w-0">
              <p className="truncate text-lg font-black tracking-tight text-[var(--text-primary)]" style={{ fontFamily: "var(--font-sans)" }}>
                {title}
              </p>
              <p className="hidden truncate text-xs font-medium text-[var(--text-muted)] sm:block">{subtitle}</p>
            </div>
          </div>

          <div className="hidden max-w-md flex-1 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] px-3 py-2 text-[var(--text-muted)] transition focus-within:border-[var(--accent)] focus-within:bg-[var(--bg-elevated)] focus-within:ring-4 focus-within:ring-[var(--accent-subtler)] md:flex">
            <Search className="h-4 w-4" />
            <input
              className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-dim)]"
              placeholder="Search projects, threads, or people"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/projects"
              className="hidden items-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-bold text-[var(--bg-base)] shadow-sm transition hover:bg-[var(--accent-hover)] sm:inline-flex"
            >
              <Plus className="h-4 w-4" />
              New
            </Link>

            <button className="relative rounded-lg p-2 text-[var(--text-muted)] transition hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-ring)]">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[var(--bg-base)] bg-[var(--amber)]" />
            </button>

            <div className="hidden h-6 w-px bg-[var(--border)] sm:block" />

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-panel)] p-1.5 pr-3 transition-all duration-200 hover:border-[var(--accent-ring)] hover:bg-[var(--bg-elevated)]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7EE787] text-sm font-black text-[var(--bg-base)]">
                  {initials}
                </div>
                <span className="hidden text-sm font-bold text-[var(--text-primary)] sm:block">{name}</span>
                <ChevronDown className={`h-4 w-4 text-[var(--text-muted)] transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] py-2 shadow-2xl shadow-black/30">
                  <div className="border-b border-[var(--border)] px-4 py-3">
                    <p className="text-sm font-black text-[var(--text-primary)]">{name}</p>
                    <p className="truncate text-xs font-medium text-[var(--text-muted)]">{email}</p>
                  </div>

                  <div className="py-1">
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                      onClick={() => { setIsProfileOpen(false); navigate("/profile"); }}
                    >
                      <UserRound className="h-5 w-5" />
                      Profile Settings
                    </button>

                    <button
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                      onClick={() => { setIsProfileOpen(false); navigate("/"); }}
                    >
                      <Settings className="h-5 w-5" />
                      Add New Account
                    </button>
                  </div>

                  <div className="mt-1 border-t border-[var(--border)] pt-1">
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-semibold text-[var(--danger)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--danger)]"
                      onClick={() => { setIsProfileOpen(false); logout(); navigate("/"); }}
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
          <div className="border-t border-[var(--border)] py-3 lg:hidden">
            <div className="grid gap-2">
              {mobileLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-bold transition ${
                      isActive
                        ? "bg-[var(--accent)] text-[var(--bg-base)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={toggle}
                className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[var(--text-muted)] transition hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)]"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
