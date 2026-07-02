import { useState, useEffect } from "react";
import { Activity, GitCommit, MessageSquareText, UsersRound } from "lucide-react";
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";
import Charts from "../components/Recharts";
import { useAuth } from "../hooks/useAuth";
import { getProjects } from "../services/project";
import * as threadService from "../services/thread";

export default function Dashboard() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [threadCount, setThreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const projs = await getProjects();
        setProjects(projs);
        let tc = 0;
        for (const p of projs) {
          try {
            const threads = await threadService.getThreads(p._id);
            tc += threads.length;
          } catch {}
        }
        setThreadCount(tc);
      } catch {} finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const canViewGitHub = user?.role === "admin" || user?.role === "dev";

  const stats = [
    {
      label: "Team members",
      value: projects.reduce((s, p) => s + (p.members?.length || 0), 0).toString() || "0",
      detail: `${projects.length} active project(s)`,
      icon: UsersRound,
      bg: "bg-[var(--accent-subtle)]",
      color: "text-[var(--accent)]",
    },
    ...(canViewGitHub
      ? [{
          label: "Latest commit",
          value: "—",
          detail: "bridgespace/app",
          icon: GitCommit,
          bg: "bg-[var(--amber-subtle)]",
          color: "text-[var(--amber)]",
        }]
      : []),
    {
      label: "Open threads",
      value: threadCount.toString(),
      detail: `${threadCount} across all projects`,
      icon: MessageSquareText,
      bg: "bg-[var(--info)]/10",
      color: "text-[var(--info)]",
    },
  ];

  const activeProject = projects[0];
  const adminUser = activeProject?.admin;

  return (
    <div className="flex min-h-screen bg-[var(--bg-base)]">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashNav title="Dashboard" subtitle="Overview of project health and workspace activity" />
        <main className="flex-1 p-4 sm:p-6">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-[var(--text-muted)]">Loading...</div>
          ) : (
          <div className="mx-auto max-w-7xl space-y-6">
            <section className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-panel)]">
              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_320px] lg:items-end">
                <div>
                  <p className="inline-flex rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">
                    Command center
                  </p>
                  <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[var(--text-primary)] sm:text-4xl">
                    Ship decisions, commits, and team updates from one focused workspace.
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-[var(--text-muted)]">
                    BridgeSpace keeps live project health, discussion threads, and delivery signals close together for fast review.
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                        Weekly velocity
                      </p>
                      <p className="mt-2 text-3xl font-black text-[var(--text-primary)]">+{projects.length * 6}%</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#7EE787] text-[var(--bg-base)]">
                      <Activity className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-7 items-end gap-1.5">
                    {[32, 56, 44, 72, 64, 38, 82].map((height, index) => (
                      <div key={index} className="rounded-full bg-[var(--border)]">
                        <div
                          className="rounded-full bg-[var(--accent)]/70"
                          style={{ height: `${height}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={`grid gap-4 ${stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-black/20">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-[var(--text-muted)]">{stat.label}</p>
                      <p className="mt-3 text-3xl font-black tracking-tight text-[var(--text-primary)]">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-[var(--text-dim)]">{stat.detail}</p>
                    </div>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {activeProject ? (
              <section className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">
                      Primary workspace
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--text-primary)]">{activeProject.name}</h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-subtle)] px-3 py-1.5 text-sm font-bold text-[var(--accent)] ring-1 ring-[var(--accent-ring)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      {activeProject.status}
                    </span>
                    <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--amber)] text-xs font-black text-[var(--bg-base)]">
                        {(adminUser?.username?.[0] || adminUser?.name?.[0] || "?").toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Admin</p>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{adminUser?.username || adminUser?.name || "—"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-8 text-center">
                <p className="text-lg font-bold text-[var(--text-muted)]">No projects yet</p>
                <p className="mt-1 text-sm text-[var(--text-dim)]">Create your first project to get started.</p>
              </section>
            )}

            <section className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-4 sm:p-6">
              <Charts projects={projects} />
            </section>
          </div>
          )}
        </main>
      </div>
    </div>
  );
}
