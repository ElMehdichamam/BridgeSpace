import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Fake data
const projectStatusData = [
  { name: "Active", value: 5 },
  { name: "On Hold", value: 2 },
  { name: "Completed", value: 3 },
];

const activityData = [
  { day: "Mon", messages: 4 },
  { day: "Tue", messages: 8 },
  { day: "Wed", messages: 5 },
  { day: "Thu", messages: 12 },
  { day: "Fri", messages: 9 },
  { day: "Sat", messages: 3 },
  { day: "Sun", messages: 7 },
];

const COLORS = ["#0f766e", "#f59e0b", "#0284c7"];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white/95 px-4 py-3 shadow-xl shadow-slate-200 backdrop-blur">
      {label && <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>}
      <p className="text-sm font-bold text-slate-900">
        {payload[0].name || "Messages"}: {payload[0].value}
      </p>
    </div>
  );
}

// Charts Section
function Charts() {
  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700">Analytics</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Workspace overview</h2>
        </div>
        <p className="max-w-md text-sm font-medium leading-6 text-slate-500">
          Project status and weekly communication activity across the organization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

      {/* Pie Chart */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">Projects by Status</h3>
            <p className="mt-1 text-sm text-slate-400">Current delivery split</p>
          </div>
          <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">10 total</span>
        </div>
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
            <Legend iconType="circle" wrapperStyle={{ fontSize: 12, fontWeight: 700 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="rounded-lg border border-slate-900 bg-slate-950 p-5 text-white">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-teal-200">Activity This Week</h3>
            <p className="mt-1 text-sm text-slate-400">Messages by day</p>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-teal-100">48 msgs</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={activityData}>
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Line
              type="monotone"
              dataKey="messages"
              stroke="#2dd4bf"
              strokeWidth={3}
              dot={{ fill: "#f59e0b", stroke: "#ffffff", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 7, fill: "#2dd4bf", stroke: "#ffffff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      </div>
    </div>
  );
}
export default Charts;
