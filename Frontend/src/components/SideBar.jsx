export default function SideBar() {
  // You can later replace this with a state variable like: const [activeTab, setActiveTab] = useState("Dashboard");
  const activeTab = "Dashboard"; 

  const navItems = [
    {
      name: "Dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      name: "Form",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  ];

  return (
    /* 
      Fixed sidebar container. 
      z-40 ensures it stays below the NavBar (which is z-50).
      pt-16 pushes the content down so it doesn't hide behind the sticky NavBar.
    */
    <aside className="w-64 shrink-0 min-h-full bg-white border-r border-gray-200 flex flex-col bg-white border-r border-gray-200 flex flex-col">
      
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
              <button
                // onClick={() => setActiveTab(item.name)} // Uncomment when you want to handle state
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === item.name
                    ? "bg-indigo-50 text-indigo-700 shadow-sm border-l-4 border-indigo-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
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