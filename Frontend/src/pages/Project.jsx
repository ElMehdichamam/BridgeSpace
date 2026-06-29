// Project.jsx

// 1. Define MemberList FIRST (no export default here)
const MemberList = ({ members = [] }) => {
  if (!Array.isArray(members)) return null; 

  return (
    <div className="mt-2 rounded-xl bg-gray-50/50 border border-gray-100 p-1.5">
      <ul className="space-y-1">
        {members.map((member) => (
          <li 
            key={member.id || member.initials} 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group"
          >
            {/* Left Side: Avatar + Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient || 'from-gray-400 to-gray-500'} text-white flex items-center justify-center text-sm font-bold shadow-sm ring-2 ring-white`}>
                  {member.initials}
                </div>
                {member.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
                )}
              </div>
              
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {member.email || member.role}
                </p>
              </div>
            </div>

            {/* Right Side: Role Badge & Actions */}
            <div className="flex items-center gap-2 shrink-0 ml-4">
              <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wide uppercase bg-gray-100 text-gray-500 px-2.5 py-1 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                {member.role}
              </span>
              
              <button className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-gray-100 transition-all">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


// 2. Define ProjectCard SECOND
const ProjectCard = () => {
  const teamMembers = [
    { id: 1, name: "Elena Rodriguez", initials: "ER", role: "Lead Designer", email: "elena@company.com", gradient: "from-pink-500 to-rose-500", isOnline: true },
    { id: 2, name: "Marcus Chen", initials: "MC", role: "Frontend Dev", email: "marcus.c@company.com", gradient: "from-sky-400 to-indigo-500", isOnline: true },
    { id: 3, name: "Sarah Jenkins", initials: "SJ", role: "PM", email: "s.jenkins@company.com", gradient: "from-amber-400 to-orange-500", isOnline: false },
  ];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-md w-full">
        
        <div className="flex items-start justify-between gap-4 mb-3">
          <p className="text-lg font-bold text-gray-900 leading-tight">Name Of the Project</p>
          <span className="shrink-0 text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
            On Track
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          A brief description of the project scope and main deliverables for this quarter.
        </p>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Deadline: Oct 31, 2023</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Team Members</p>
          <span className="text-xs text-indigo-500 font-medium cursor-pointer hover:text-indigo-700">+ Add</span>
        </div>

        {/* Since they are in the same file, React already knows what MemberList is! */}
        <MemberList members={teamMembers} />

      </div>
    </>
  );
};

// 3. Export ONLY the main component at the very bottom
export default ProjectCard;