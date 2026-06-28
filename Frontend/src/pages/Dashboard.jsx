// --- Separated Component with Props ---
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";
import Charts from "../components/Recharts"
function ProjectDetails({ projectName, status, admin }) {
  // Extract the first letter of the admin's name for the avatar
  const adminInitial = admin ? admin.charAt(0).toUpperCase() : "?";

  return (
    /* Outer Wrapper - Full Width */
    <div className="w-full bg-white">
      {/* Inner Content Wrapper - matches max-width of top cards for perfect alignment */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-6 pt-2">
        
        {/* The Details Card */}
        <div className="relative overflow-hidden bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>

          {/* Project Name - Vibrant Gradient Text */}
          <p className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 whitespace-nowrap">
            {projectName}
          </p>

          {/* Status Pill - Dynamic text */}
          <p className="relative z-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              {status}
            </span>
          </p>

          {/* Admin Info - Dynamic initial & name */}
          <p className="relative z-10 flex items-center gap-3 text-gray-700 font-semibold">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-200 transition-transform hover:scale-110">
              {adminInitial}
            </div>
            <span className="truncate max-w-[150px]">{admin}</span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
  <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <DashNav />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="w-full bg-gradient-to-b from-slate-50 to-white">
            {/* Inner Content Wrapper */}
            <div className="max-w-5xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* 1. Members Card - Blue Theme */}
              <div className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-500">Team</p>
                    <div className="text-lg font-extrabold text-gray-800">Members of Project</div>
                  </div>
                </div>
              </div>

              {/* 2. Progress Card - Emerald Theme */}
              <div className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-md border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">Github</p>
                    <div className="text-lg font-extrabold text-gray-800">Progress Of Da Project (last github Commit)</div>
                  </div>
                </div>
              </div>

              {/* 3. Message Card - Purple Theme */}
              <div className="relative overflow-hidden bg-white p-6 rounded-2xl shadow-md border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg shadow-purple-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-500">Chat</p>
                    <div className="text-lg font-extrabold text-gray-800">Last Message</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <ProjectDetails 
          projectName="BridgeSpace MVP"
          status="Active"
          admin="Sarah Jenkins"
          />
          <Charts/>
        </main>
        
      </div>
  </div>
  );
}