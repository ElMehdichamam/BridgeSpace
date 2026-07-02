import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["var(--accent)", "var(--amber)", "var(--info)"];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)]/95 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur">
      {label && <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">{label}</p>}
      <p className="text-sm font-bold text-[var(--text-primary)]">
        {payload[0].name || "Value"}: {payload[0].value}
      </p>
    </div>
  );
}

function Charts({ projects = [] }) {
  const statusCounts = { active: 0, "on-hold": 0, completed: 0 };
  projects.forEach((p) => {
    const s = p.status || "active";
    if (statusCounts[s] !== undefined) statusCounts[s]++;
  });

  const projectStatusData = [
    { name: "Active", value: statusCounts.active },
    { name: "On Hold", value: statusCounts["on-hold"] },
    { name: "Completed", value: statusCounts.completed },
  ].filter((d) => d.value > 0);

  const activityData = [
    { day: "Mon", messages: 4 },
    { day: "Tue", messages: 8 },
    { day: "Wed", messages: 5 },
    { day: "Thu", messages: 12 },
    { day: "Fri", messages: 9 },
    { day: "Sat", messages: 3 },
    { day: "Sun", messages: 7 },
  ];

  const totalProjects = projects.length;
  const totalMsgs = activityData.reduce((s, d) => s + d.messages, 0);

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">
            Analytics
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--text-primary)]">Workspace overview</h2>
        </div>
        <p className="max-w-md text-sm font-medium leading-6 text-[var(--text-muted)]">
          Project status and weekly communication activity across the organization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--text-muted)]">Projects by Status</h3>
              <p className="mt-1 text-sm text-[var(--text-dim)]">Current delivery split</p>
            </div>
            <span className="rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-xs font-bold text-[var(--accent)]">{totalProjects} total</span>
          </div>
          {projectStatusData.length === 0 ? (
            <div className="flex h-[280px] items-center justify-center text-sm text-[var(--text-dim)]">
              No project data yet
            </div>
          ) : (
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
              <Legend
                iconType="circle"
                wrapperStyle={{ fontSize: 12, fontWeight: 700, color: "var(--text-dim)" }}
              />
            </PieChart>
          </ResponsiveContainer>
          )}
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)] p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[var(--accent)]">Activity This Week</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">Messages by day</p>
            </div>
            <span className="rounded-full bg-[var(--amber-subtle)] px-3 py-1 text-xs font-bold text-[var(--amber)]">{totalMsgs} msgs</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={activityData}>
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--text-dim)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "var(--text-dim)" }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Line
                type="monotone"
                dataKey="messages"
                stroke="var(--accent)"
                strokeWidth={2.5}
                dot={{ fill: "var(--amber)", stroke: "var(--bg-base)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "var(--accent)", stroke: "var(--bg-base)", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;
