import { useState, useEffect } from "react";
import { CalendarClock, CheckCircle2, MessageCircle, Paperclip, Plus, Search, Send } from "lucide-react";
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";
import ThreadForm from "../components/ThreadForm";
import { useAuth } from "../hooks/useAuth";
import { getProjects } from "../services/project";
import * as threadService from "../services/thread";

function ThreadItem({ thread }) {
  const initials = (thread.createdBy?.username || thread.createdBy?.name || "?").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors = ["bg-[var(--accent)]", "bg-[var(--info)]", "bg-[var(--amber)]", "bg-[var(--danger)]", "bg-[#A78BFA]"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5 transition hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-black/20">
      <div className="flex gap-4">
        <div className={`${color} flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[var(--bg-base)] shadow-sm`}>
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span className="font-bold text-[var(--text-primary)]">{thread.createdBy?.username || thread.createdBy?.name || "Unknown"}</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span className="text-[var(--text-muted)]">@{thread.createdBy?.username || "user"}</span>
            <span className="text-[var(--text-dim)]">/</span>
            <span className="text-[var(--text-muted)]">{thread.createdAt ? new Date(thread.createdAt).toLocaleDateString() : "recent"}</span>
          </div>

          <h2 className="mt-2 text-base font-bold leading-6 text-[var(--text-primary)]">{thread.title}</h2>

          {thread.deadline && (
            <div className="mt-3 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
              <CalendarClock className="h-4 w-4 text-[var(--text-dim)]" />
              {new Date(thread.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Thread() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [threads, setThreads] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((p) => {
        setProjects(p);
        if (p.length > 0) setSelectedProject(p[0]._id);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    threadService
      .getThreads(selectedProject)
      .then((t) => setThreads(Array.isArray(t) ? t : []))
      .catch(() => setThreads([]));
  }, [selectedProject]);

  async function handleCreate(threadData) {
    try {
      await threadService.createThread(threadData);
      setShowModal(false);
      const t = await threadService.getThreads(selectedProject);
      setThreads(Array.isArray(t) ? t : []);
    } catch {}
  }

  return (
    <div className="flex min-h-screen bg-[var(--bg-base)]">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashNav title="Threads" subtitle="Discuss project decisions, blockers, and follow-ups" />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="min-w-0 space-y-4">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-[var(--text-primary)]">Project threads</h1>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">Prioritized conversations across every active project.</p>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7EE787] px-4 py-3 text-sm font-bold text-[var(--bg-base)] shadow-sm transition hover:bg-[var(--accent-hover)]"
                  >
                    <Plus className="h-4 w-4" />
                    New thread
                  </button>
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2">
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none"
                  >
                    {projects.length === 0 && <option value="">No projects</option>}
                    {projects.map((p) => (
                      <option key={p._id} value={p._id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-20 text-[var(--text-muted)]">Loading...</div>
              ) : threads.length === 0 ? (
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-12 text-center">
                  <p className="text-lg font-bold text-[var(--text-primary)]">No threads yet</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">Create the first thread for this project.</p>
                </div>
              ) : (
                threads.map((thread) => (
                  <ThreadItem key={thread._id} thread={thread} />
                ))
              )}
            </section>

            <aside className="space-y-4">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">Focus queue</h2>
                <div className="mt-4 space-y-2">
                  {["Permission model", "Mobile empty states", "Chart hierarchy"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-lg bg-[var(--bg-elevated)] px-3 py-2">
                      <span className="text-sm font-semibold text-[var(--text-secondary)]">{item}</span>
                      <span className="text-xs text-[var(--text-dim)]">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[var(--accent-ring)] bg-[var(--bg-panel)] p-5">
                <h2 className="text-lg font-bold text-[var(--text-primary)]">Quick reply</h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">Draft a short update for the selected project thread.</p>
                <textarea
                  className="mt-4 min-h-28 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-dim)] focus:ring-2 focus:ring-[var(--border-focus)]"
                  placeholder="Write an update..."
                />
                <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#7EE787] px-4 py-3 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[var(--accent-hover)]">
                  <Send className="h-4 w-4" />
                  Send update
                </button>
              </div>
            </aside>
          </div>

          <Modal open={showModal} onClose={() => setShowModal(false)} title="New thread">
            <ThreadForm
              projects={projects}
              onSubmit={handleCreate}
              onClose={() => setShowModal(false)}
            />
          </Modal>
        </main>
      </div>
    </div>
  );
}
