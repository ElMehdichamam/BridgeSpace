import { NavLink } from "react-router-dom";
import { BarChart3, FolderKanban, MessageSquareText, UserRound, Workflow, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function SideBar() {
  const { theme, toggle } = useTheme();
  const navItems = [
    { name: "Dashboard", to: "/dashboard", icon: BarChart3 },
    { name: "Projects", to: "/projects", icon: FolderKanban },
    { name: "Threads", to: "/threads", icon: MessageSquareText },
    { name: "Profile", to: "/profile", icon: UserRound },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--bg-base)] text-white lg:flex">
      <div className="border-b border-[var(--border)] px-5 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-panel)]">
            <Workflow className="h-[18px] w-[18px] text-[var(--accent)]" />
          </div>
          <div>
            <h1 className="text-[17px] font-semibold tracking-tight text-[var(--text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
              bridgespace
            </h1>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-dim)]" style={{ fontFamily: "var(--font-mono)" }}>
              Workspace
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition-all duration-150 ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--bg-base)] shadow-sm"
                      : "text-[var(--text-muted)] hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)]"
                  }`
                }
              >
                <item.icon className="h-[18px] w-[18px]" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto p-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]" style={{ fontFamily: "var(--font-mono)" }}>
            Team capacity
          </p>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-2xl font-black text-[var(--text-primary)]">84%</span>
            <span className="rounded-full bg-[var(--accent-subtler)] px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]" style={{ fontFamily: "var(--font-mono)" }}>
              Healthy
            </span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
            <div className="h-full w-[84%] rounded-full bg-[var(--accent)]" />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] p-3">
        <button
          onClick={toggle}
          className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-[var(--text-muted)] transition hover:bg-[var(--bg-panel)] hover:text-[var(--text-primary)]"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </aside>
  );
}
