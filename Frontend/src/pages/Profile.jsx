import { useState, useEffect } from "react";
import Charts from "../components/Recharts";
import NavBar from "../components/DashNav";
import SideBar from "../components/SideBar";
import { useAuth } from "../hooks/useAuth";
import { getProjects } from "../services/project";
import * as threadService from "../services/thread";

export default function Profile() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [threadCount, setThreadCount] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const p = await getProjects();
        setProjects(p);
        let tc = 0;
        for (const proj of p) {
          try {
            const t = await threadService.getThreads(proj._id);
            tc += t.length;
          } catch {}
        }
        setThreadCount(tc);
      } catch {}
    }
    load();
  }, []);

  const name = user?.username || user?.name || "User";
  const email = user?.email || "";
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "U";
  const role = user?.role || "";
  const orgName = user?.organization?.name || "";

  return (
    <div className="flex min-h-screen bg-[var(--bg-base)]">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <NavBar title="Profile" subtitle="Manage and view your workspace profile" />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            <div className="w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--accent-ring)] bg-[var(--bg-elevated)] shadow-lg shadow-black/20">
                    <span className="text-3xl font-black text-[var(--accent)]">{initials}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 inline-flex rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      Team profile
                    </div>
                    <p className="text-3xl font-black tracking-tight text-[var(--text-primary)]">{name}</p>
                    <p className="mt-1 text-base font-semibold text-[var(--amber)]">{role}</p>
                    <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">{orgName || email}</p>
                  </div>
                </div>

                <div className="grid w-full grid-cols-3 gap-3 md:max-w-sm">
                  {[
                    { value: projects.length.toString(), label: "Projects" },
                    { value: projects.length > 0 ? "—" : "0%", label: "Progress" },
                    { value: threadCount.toString(), label: "Threads" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-4 text-center">
                      <p className="text-2xl font-black text-[var(--text-primary)]">{stat.value}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-4 sm:p-6">
              <Charts projects={projects} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
