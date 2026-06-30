import { CalendarDays, CheckCircle2, Clock3, GitBranch, Plus, UsersRound } from "lucide-react";
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";

const projects = [
  {
    id: 1,
    name: "BridgeSpace MVP",
    description: "Core workspace, project threads, and GitHub progress visibility.",
    status: "On Track",
    deadline: "Oct 31, 2026",
    progress: 74,
    repo: "bridgespace/app",
    accent: "bg-indigo-600",
    members: [
      { id: 1, name: "Elena Rodriguez", initials: "ER", role: "Design", color: "bg-rose-500" },
      { id: 2, name: "Marcus Chen", initials: "MC", role: "Frontend", color: "bg-sky-500" },
      { id: 3, name: "Sarah Jenkins", initials: "SJ", role: "Product", color: "bg-amber-500" },
    ],
  },
  {
    id: 2,
    name: "Client Portal",
    description: "External project updates, review requests, and shared deliverables.",
    status: "Review",
    deadline: "Nov 12, 2026",
    progress: 58,
    repo: "bridgespace/client-portal",
    accent: "bg-emerald-600",
    members: [
      { id: 4, name: "Ava Patel", initials: "AP", role: "Backend", color: "bg-emerald-500" },
      { id: 5, name: "Noah Kim", initials: "NK", role: "QA", color: "bg-violet-500" },
    ],
  },
  {
    id: 3,
    name: "Analytics Refresh",
    description: "Cleaner reporting panels for project health and team activity.",
    status: "Planning",
    deadline: "Dec 06, 2026",
    progress: 32,
    repo: "bridgespace/analytics",
    accent: "bg-orange-500",
    members: [
      { id: 6, name: "Mina Lee", initials: "ML", role: "Data", color: "bg-orange-500" },
      { id: 7, name: "Omar Haddad", initials: "OH", role: "PM", color: "bg-cyan-600" },
    ],
  },
];

function MemberStack({ members }) {
  return (
    <div className="flex items-center">
      {members.map((member, index) => (
        <div
          key={member.id}
          className={`${member.color} -ml-2 first:ml-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm`}
          title={`${member.name} - ${member.role}`}
          style={{ zIndex: members.length - index }}
        >
          {member.initials}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${project.accent}`}></span>
            <h2 className="truncate text-lg font-bold text-gray-950">{project.name}</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">{project.description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          {project.status}
        </span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-gray-500">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div className={`h-full rounded-full ${project.accent}`} style={{ width: `${project.progress}%` }}></div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-gray-400" />
          {project.deadline}
        </div>
        <div className="flex items-center gap-2 truncate">
          <GitBranch className="h-4 w-4 text-gray-400" />
          <span className="truncate">{project.repo}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <MemberStack members={project.members} />
        <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
          Open
        </button>
      </div>
    </article>
  );
}

export default function Project() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashNav title="Projects" subtitle="Track delivery, ownership, and repository activity" />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <section className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Project hub</p>
                  <h1 className="mt-2 text-2xl font-black text-gray-950 sm:text-3xl">Organized workspaces for every build</h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    Keep project status, team ownership, deadlines, and GitHub progress in one focused view.
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700">
                  <Plus className="h-4 w-4" />
                  New project
                </button>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Active projects", value: "12", icon: CheckCircle2, tone: "text-emerald-600 bg-emerald-50" },
                { label: "Team members", value: "38", icon: UsersRound, tone: "text-indigo-600 bg-indigo-50" },
                { label: "Due this month", value: "5", icon: Clock3, tone: "text-orange-600 bg-orange-50" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${stat.tone}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-black text-gray-950">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
