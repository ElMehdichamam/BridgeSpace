import Charts from "../components/Recharts";
import NavBar from "../components/DashNav";

export function ProfileCard() {
    return (
      <div className="relative w-full overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-600 to-violet-600" />
        <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-600 blur-md opacity-40" />
              <img
                src="https://ui-avatars.com/api/?name=Full+Name&background=0f172a&color=fff"
                alt="Profile"
                className="relative h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-xl shadow-slate-300/70"
              />
            </div>

            <div className="flex-1">
              <div className="mb-2 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Team profile
              </div>
              <p className="text-3xl font-black tracking-tight text-slate-950">FullName</p>
              <p className="mt-1 text-base font-semibold text-blue-700">Role</p>
              <p className="mt-2 text-sm font-medium text-slate-500">Organization</p>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 md:max-w-md">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
              <p className="text-2xl font-black text-slate-950">12</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Projects</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
              <p className="text-2xl font-black text-slate-950">84%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Progress</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
              <p className="text-2xl font-black text-slate-950">7</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Threads</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default function Profile() {
    return (
      <>
      <NavBar title="Profile" subtitle="Manage And See Your Work"/>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_32rem),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-4 sm:p-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
          <ProfileCard />

          <div className="w-full rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-6">
            <Charts />
          </div>
        </div>
      </section>
      </>

    );
  }
