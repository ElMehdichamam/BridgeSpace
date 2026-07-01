import { NavLink } from "react-router-dom";
import { BarChart3, FolderKanban, MessageSquareText, UserRound, Sparkles } from "lucide-react";

export default function SideBar() {
  const navItems = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: BarChart3,
    },
    {
      name: "Projects",
      to: "/projects",
      icon: FolderKanban,
    },
    {
      name: "Threads",
      to: "/threads",
      icon: MessageSquareText,
    },
    {
      name: "Profile",
      to: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-slate-900/10 bg-slate-950 text-white lg:flex">
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">BridgeSpace</h1>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-5">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-lg shadow-black/20"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Team capacity</p>
          <div className="mt-3 flex items-end justify-between">
            <span className="text-3xl font-black">84%</span>
            <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-bold text-emerald-200">Healthy</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[84%] rounded-full bg-teal-300" />
          </div>
        </div>
      </div>

    </aside>
  );
}
