import { NavLink } from "react-router-dom";
import { BarChart3, FolderKanban, MessageSquareText, UserRound } from "lucide-react";

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
    <aside className="hidden lg:flex w-64 shrink-0 min-h-screen bg-white border-r border-gray-200 flex-col">
      
      {/* Logo / Brand Name Area */}
      <div className="px-6 py-6 border-b border-gray-100">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          BridgeSpace
        </h1>
        <p className="text-xs text-gray-400 mt-1 font-medium">Workspace</p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 shadow-sm border-l-4 border-indigo-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Decoration / Pro Upgrade Section (Optional but adds polish) */}
      <div className="p-4 mt-auto">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
          <h3 className="font-bold text-sm">Upgrade to Pro</h3>
          <p className="text-xs text-indigo-100 mt-1 mb-3">Get access to unlimited projects.</p>
          <button className="w-full bg-white text-indigo-600 text-xs font-bold py-2 rounded-md hover:bg-indigo-50 transition shadow">
            Learn More
          </button>
        </div>
      </div>

    </aside>
  );
}
