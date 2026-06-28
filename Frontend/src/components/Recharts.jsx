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

const COLORS = ["#6366f1", "#f59e0b", "#10b981"];

// Charts Section
function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Projects by Status</h3>
        <ResponsiveContainer width="100%" height={250}>
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
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Activity This Week</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={activityData}>
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="messages"
              stroke="#6366f1"
              strokeWidth={2.5}
              dot={{ fill: "#6366f1", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
export default Charts;