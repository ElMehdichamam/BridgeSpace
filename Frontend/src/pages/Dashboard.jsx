import { Activity, GitCommit, MessageSquareText, UsersRound } from "lucide-react";
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";
import Charts from "../components/Recharts";

const stats = [
  {
    label: "Team members",
    value: "38",
    detail: "6 active squads",
    icon: UsersRound,
    tone: "bg-teal-50 text-teal-700 ring-teal-100",
  },
  {
    label: "Latest commit",
    value: "18m",
    detail: "bridgespace/app",
    icon: GitCommit,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    label: "Open threads",
    value: "24",
    detail: "9 need review",
    icon: MessageSquareText,
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
];

function ProjectDetails({ projectName, status, admin }) {
  const adminInitial = admin ? admin.charAt(0).toUpperCase() : "?";

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700">Primary workspace</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{projectName}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {status}
          </span>

          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">
              {adminInitial}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Admin</p>
              <p className="text-sm font-bold text-slate-800">{admin}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashNav title="Dashboard" subtitle="Overview of project health and workspace activity" />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-slate-950 text-white shadow-xl shadow-slate-200">
              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_320px] lg:items-end">
                <div>
                  <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-teal-200">
                    Command center
                  </p>
                  <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                    Ship decisions, commits, and team updates from one focused workspace.
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-300">
                    BridgeSpace keeps live project health, discussion threads, and delivery signals close together for fast review.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Weekly velocity</p>
                      <p className="mt-2 text-3xl font-black">+18%</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-300 text-slate-950">
                      <Activity className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-7 items-end gap-1.5">
                    {[32, 56, 44, 72, 64, 38, 82].map((height, index) => (
                      <div key={index} className="rounded-full bg-white/10">
                        <div className="rounded-full bg-teal-300" style={{ height: `${height}px` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-500">{stat.label}</p>
                      <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-slate-500">{stat.detail}</p>
                    </div>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg ring-1 ${stat.tone}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <ProjectDetails projectName="BridgeSpace MVP" status="Active" admin="Sarah Jenkins" />

            <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <Charts />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
