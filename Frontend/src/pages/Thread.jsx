import { CalendarClock, CheckCircle2, MessageCircle, Paperclip, Plus, Search, Send } from "lucide-react";
import DashNav from "../components/DashNav";
import SideBar from "../components/SideBar";

const threads = [
  {
    id: 1,
    author: "Sarah Jenkins",
    handle: "@sarah_pm",
    initials: "SJ",
    project: "BridgeSpace MVP",
    title: "Finalize thread permissions before backend integration",
    body: "We need admin controls for closing threads and member controls for replies before connecting the live message endpoint.",
    time: "2h",
    deadline: "Today, 5:00 PM",
    replies: 8,
    attachments: 2,
    color: "bg-indigo-600",
  },
  {
    id: 2,
    author: "Marcus Chen",
    handle: "@marcus_dev",
    initials: "MC",
    project: "Client Portal",
    title: "Review responsive layout for external client view",
    body: "Mobile spacing is stable now. Need one more pass on empty states and long project names.",
    time: "4h",
    deadline: "Tomorrow",
    replies: 5,
    attachments: 1,
    color: "bg-sky-600",
  },
  {
    id: 3,
    author: "Elena Rodriguez",
    handle: "@elena_design",
    initials: "ER",
    project: "Analytics Refresh",
    title: "Dashboard cards need clearer visual hierarchy",
    body: "The key health metrics should scan first, then chart details. Proposed layout is ready for frontend implementation.",
    time: "1d",
    deadline: "Friday",
    replies: 11,
    attachments: 3,
    color: "bg-rose-600",
  },
];

function ThreadItem({ thread }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
      <div className="flex gap-4">
        <div className={`${thread.color} flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm`}>
          {thread.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span className="font-bold text-gray-950">{thread.author}</span>
            <CheckCircle2 className="h-4 w-4 text-sky-500" />
            <span className="text-gray-500">{thread.handle}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">{thread.time}</span>
          </div>

          <h2 className="mt-2 text-base font-bold leading-6 text-gray-950">{thread.title}</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{thread.body}</p>

          <div className="mt-3 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            #{thread.project}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-4 w-4" />
              {thread.deadline}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-4 w-4" />
              {thread.replies} replies
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Paperclip className="h-4 w-4" />
              {thread.attachments} files
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Thread() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashNav title="Threads" subtitle="Discuss project decisions, blockers, and follow-ups" />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <section className="min-w-0 space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-gray-950">Project threads</h1>
                    <p className="mt-1 text-sm text-gray-500">Prioritized conversations across every active project.</p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700">
                    <Plus className="h-4 w-4" />
                    New thread
                  </button>
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-500">
                  <Search className="h-4 w-4" />
                  <input
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    placeholder="Search by title, project, or teammate"
                  />
                </div>
              </div>

              {threads.map((thread) => (
                <ThreadItem key={thread.id} thread={thread} />
              ))}
            </section>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">Focus queue</h2>
                <div className="mt-4 space-y-3">
                  {["Permission model", "Mobile empty states", "Chart hierarchy"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                      <span className="text-sm font-semibold text-gray-700">{item}</span>
                      <span className="text-xs text-gray-400">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-indigo-600 p-5 text-white shadow-sm">
                <h2 className="text-lg font-bold">Quick reply</h2>
                <p className="mt-1 text-sm text-indigo-100">Draft a short update for the selected project thread.</p>
                <textarea
                  className="mt-4 min-h-28 w-full resize-none rounded-xl border border-white/20 bg-white/10 p-3 text-sm text-white outline-none placeholder:text-indigo-100 focus:ring-2 focus:ring-white/40"
                  placeholder="Write an update..."
                />
                <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50">
                  <Send className="h-4 w-4" />
                  Send update
                </button>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
