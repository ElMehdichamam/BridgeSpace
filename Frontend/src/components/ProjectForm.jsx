import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const STATUS_OPTIONS = ["active", "on-hold", "completed"];

export default function ProjectForm({ onSubmit, onClose }) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "active",
    deadline: "",
  });

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.description || !form.deadline) return;

    onSubmit({
      name: form.name,
      description: form.description,
      status: form.status,
      deadline: new Date(form.deadline).toISOString(),
      organization: user?.organization?._id,
    });

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={update("name")}
          required
          placeholder="BridgeSpace MVP"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Description</label>
        <textarea
          value={form.description}
          onChange={update("description")}
          required
          rows={3}
          placeholder="Core workspace, project threads, and GitHub progress visibility."
          className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Status</label>
          <select
            value={form.status}
            onChange={update("status")}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)]"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">Deadline</label>
          <input
            type="date"
            value={form.deadline}
            onChange={update("deadline")}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] transition focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] [color-scheme:dark]"
          />
        </div>
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
          Create project
        </button>
      </div>
    </form>
  );
}
