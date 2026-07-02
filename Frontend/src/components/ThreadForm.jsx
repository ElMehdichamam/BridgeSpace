import { useState } from "react";

export default function ThreadForm({ projects = [], onSubmit, onClose }) {
  const [form, setForm] = useState({
    title: "",
    body: "",
    project: projects[0]?._id || "",
    deadline: "",
  });

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.project) return;

    onSubmit({
      title: form.title,
      project: form.project,
      deadline: form.deadline ? new Date(form.deadline).toISOString() : undefined,
    });

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Title</label>
        <input
          type="text"
          value={form.title}
          onChange={update("title")}
          required
          placeholder="Finalize thread permissions before backend integration"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Project</label>
        <select
          value={form.project}
          onChange={update("project")}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
        >
          {projects.length === 0 && <option value="">No projects available</option>}
          {projects.map((p) => (
            <option key={p._id} value={p._id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Deadline <span className="text-[var(--text-dim)]">(optional)</span></label>
        <input
          type="date"
          value={form.deadline}
          onChange={update("deadline")}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] [color-scheme:dark]"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-bold text-[var(--text-secondary)] transition hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-[#7EE787] px-4 py-2.5 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[var(--accent-hover)]"
        >
          Create thread
        </button>
      </div>
    </form>
  );
}
