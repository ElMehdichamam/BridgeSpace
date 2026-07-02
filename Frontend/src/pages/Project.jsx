import { useState, useEffect } from "react";
import { CalendarDays, CheckCircle2, Clock3, GitBranch, Plus, UsersRound, X } from "lucide-react";
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";
import ProjectForm from "../components/ProjectForm";
import { useAuth } from "../hooks/useAuth";
import { getProjects, createProject, addMember } from "../services/project";
import { searchUsers } from "../services/user";

const STATUS_MAP = { active: "On Track", "on-hold": "On Hold", completed: "Completed" };
const ACCENT_MAP = { active: { accent: "bg-[#7EE787]", ring: "ring-[var(--accent-ring)]", textAccent: "text-[var(--accent)]" }, "on-hold": { accent: "bg-[#F0A868]", ring: "ring-[var(--amber-subtle)]", textAccent: "text-[var(--amber)]" }, completed: { accent: "bg-[#7DA9F0]", ring: "ring-[var(--info)]/20", textAccent: "text-[var(--info)]" } };
const MEMBER_COLORS = ["bg-rose-500", "bg-sky-500", "bg-amber-500", "bg-emerald-500", "bg-violet-500", "bg-orange-500", "bg-cyan-600"];

function MemberStack({ members }) {
  return (
    <div className="flex items-center">
      {(members || []).map((member, index) => {
        const name = member.username || member.name || "?";
        const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
        const color = MEMBER_COLORS[index % MEMBER_COLORS.length];
        return (
          <div
            key={member._id || index}
            className={`${color} -ml-2 first:ml-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--bg-base)] text-[11px] font-bold text-white shadow-sm`}
            title={name}
            style={{ zIndex: (members.length || 1) - index }}
          >
            {initials}
          </div>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, isAdmin, onAddMember }) {
  const s = project.status || "active";
  const style = ACCENT_MAP[s] || ACCENT_MAP.active;
  const progress = s === "completed" ? 100 : s === "active" ? 74 : 32;
  const [showList, setShowList] = useState(false);
  const [orgUsers, setOrgUsers] = useState([]);

  useEffect(() => {
    if (showList && orgUsers.length === 0) {
      searchUsers("").then(setOrgUsers).catch(() => {});
    }
  }, [showList, orgUsers.length]);

  const memberIds = new Set((project.members || []).map((m) => m._id));
  const available = orgUsers.filter((u) => !memberIds.has(u._id) && u._id !== project.admin?._id);

  async function handleAdd(userId) {
    try {
      await addMember(project._id, userId);
      setShowList(false);
      onAddMember?.();
    } catch {}
  }

  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${style.accent}`} />
            <h2 className="truncate text-lg font-black text-[var(--text-primary)]">{project.name}</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{project.description}</p>
        </div>
        <span className={`shrink-0 rounded-full ${style.accent}/10 px-3 py-1 text-xs font-bold ${style.textAccent} ring-1 ${style.ring}`}>
          {STATUS_MAP[s] || s}
        </span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs font-bold text-[var(--text-muted)]">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
          <div className={`h-full rounded-full ${style.accent}`} style={{ width: `${progress}%`, opacity: 0.8 }} />
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm font-medium text-[var(--text-muted)] sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-[var(--text-dim)]" />
          {project.deadline ? new Date(project.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "No deadline"}
        </div>
        <div className="flex items-center gap-2 truncate">
          <GitBranch className="h-4 w-4 shrink-0 text-[var(--text-dim)]" />
          <span className="truncate">bridgespace/{project.name?.toLowerCase().replace(/\s+/g, "-")}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <MemberStack members={project.members} />
        <div className="flex items-center gap-2">
          {isAdmin && (
            <button
              onClick={() => setShowList(!showList)}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm font-bold text-[var(--text-secondary)] transition hover:border-[var(--accent-ring)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent)]"
            >
              + Add
            </button>
          )}
          <button className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm font-bold text-[var(--text-secondary)] transition hover:border-[var(--accent-ring)] hover:bg-[var(--bg-hover)] hover:text-[var(--accent)]">
            Open
          </button>
        </div>
      </div>

      {showList && (
        <div className="mt-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Organization members</span>
            <button onClick={() => setShowList(false)} className="text-[var(--text-dim)] hover:text-[var(--text-primary)]">
              <X className="h-4 w-4" />
            </button>
          </div>
          {available.length === 0 ? (
            <p className="py-3 text-center text-xs text-[var(--text-dim)]">No other members to add</p>
          ) : (
            <ul className="max-h-48 space-y-1 overflow-y-auto">
              {available.map((u, i) => {
                const uname = u.username || u.email || "?";
                const letter = uname[0].toUpperCase();
                const color = MEMBER_COLORS[i % MEMBER_COLORS.length];
                return (
                  <li key={u._id} className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-[var(--border)]">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full ${color} text-[10px] font-bold text-white`}>
                        {letter}
                      </div>
                      <span className="text-[var(--text-primary)]">{uname}</span>
                    </div>
                    <button
                      onClick={() => handleAdd(u._id)}
                      className="rounded bg-[#7EE787] px-2 py-1 text-xs font-bold text-[var(--bg-base)] hover:bg-[var(--accent-hover)]"
                    >
                      Add
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}

export default function Project() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loadProjects() {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch {} finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadProjects(); }, []);

  async function handleCreate(projectData) {
    try {
      await createProject(projectData);
      setShowModal(false);
      await loadProjects();
    } catch {}
  }

  const activeCount = projects.filter((p) => p.status === "active").length;
  const memberCount = projects.reduce((s, p) => s + (p.members?.length || 0), 0);

  return (
    <div className="flex min-h-screen bg-[var(--bg-base)]">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashNav title="Projects" subtitle="Track delivery, ownership, and repository activity" />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <section className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5 sm:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">Project hub</p>
                  <h1 className="mt-2 text-2xl font-black tracking-tight text-[var(--text-primary)] sm:text-3xl">
                    Organized workspaces for every build
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">
                    Keep project status, team ownership, deadlines, and GitHub progress in one focused view.
                  </p>
                </div>
                {isAdmin && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7EE787] px-4 py-3 text-sm font-bold text-[var(--bg-base)] shadow-sm transition hover:bg-[var(--accent-hover)]"
                  >
                    <Plus className="h-4 w-4" />
                    New project
                  </button>
                )}
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Active projects", value: activeCount.toString(), icon: CheckCircle2, bg: "bg-[var(--accent-subtle)]", color: "text-[var(--accent)]" },
                { label: "Team members", value: memberCount.toString(), icon: UsersRound, bg: "bg-[var(--info)]/10", color: "text-[var(--info)]" },
                { label: "Total projects", value: projects.length.toString(), icon: Clock3, bg: "bg-[var(--amber-subtle)]", color: "text-[var(--amber)]" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-black text-[var(--text-primary)]">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </section>

            {loading ? (
              <div className="flex items-center justify-center py-20 text-[var(--text-muted)]">Loading...</div>
            ) : projects.length === 0 ? (
              <section className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-12 text-center">
                <p className="text-xl font-bold text-[var(--text-primary)]">No projects yet</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {isAdmin ? "Create your first project to get started." : "Ask an admin to create a project."}
                </p>
              </section>
            ) : (
              <section className="grid gap-5 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} isAdmin={isAdmin} onAddMember={loadProjects} />
                ))}
              </section>
            )}
          </div>
        </main>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} title="New project">
        <ProjectForm onSubmit={handleCreate} onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}
