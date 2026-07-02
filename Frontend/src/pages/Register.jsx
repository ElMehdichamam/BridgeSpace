import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Building2, Workflow } from "lucide-react";
import Nav from "../components/Nav";
import { useAuth } from "../hooks/useAuth";

const DEPARTMENTS = ["Dev", "Finance", "Sales", "Support", "Other"];

export default function Register() {
  const navigate = useNavigate();
  const { register: authRegister } = useAuth();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    organization: "",
    role: "",
    department: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.name || !form.password || !form.role || !form.department || !form.organization) return;
    try {
      setError("");
      setLoading(true);
      await authRegister({
        username: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
        department: form.department,
        organization: form.organization,
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />
      <div className="flex min-h-screen bg-[var(--bg-base)]">
        {/* Left panel */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 xl:p-14 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#F0A868 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[var(--amber-subtle)] blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[var(--accent-subtle)] blur-3xl" />

          <div className="relative z-10 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-panel)]">
              <Workflow className="h-4 w-4 text-[var(--accent)]" />
            </div>
            <span className="font-mono text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">
              bridgespace
            </span>
          </div>

          <div className="relative z-10 max-w-md">
            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] xl:text-[2.25rem]" style={{ fontFamily: "var(--font-sans)" }}>
              Bridge the gap
              <br />
              between teams.
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-[var(--text-muted)]">
              Join engineering, product, design, finance, and sales in one shared workspace.
            </p>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)]/80 p-5 font-mono text-[13px] leading-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <span className="text-[var(--amber)]">$</span>
                <span>bridgespace join --org {form.organization || "your-org"}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[var(--text-muted)]">
                <span className="text-[var(--accent)]">✓</span>
                <span>invite sent to {form.email || "you@company.com"}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                <span className="text-[var(--accent)]">✓</span>
                <span>workspace ready for {form.name || "your team"}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-xs font-mono text-[var(--text-dim)]">
            bridgespace &copy; 2024
          </div>
        </div>

        {/* Right panel */}
        <div className="flex w-full min-h-screen flex-col justify-center bg-[var(--bg-panel)] px-4 py-10 sm:px-6 md:py-12 lg:w-1/2 lg:min-h-0 lg:px-12 xl:px-20 2xl:px-24">
          <div className="lg:hidden mb-8 flex items-center justify-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-panel)]">
              <Workflow className="h-4 w-4 text-[var(--accent)]" />
            </div>
            <span className="font-mono text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">
              bridgespace
            </span>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 sm:mb-10">
              <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-[1.75rem]" style={{ fontFamily: "var(--font-sans)" }}>
                Create your workspace
              </h1>
              <p className="mt-2 text-sm text-[var(--text-muted)] sm:text-base">
                Get your team on the same page.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <Mail className="h-[17px] w-[17px] text-[var(--text-dim)]" />
                  </div>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] py-3 pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition duration-150 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] sm:py-3.5 sm:text-base"
                  />
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <User className="h-[17px] w-[17px] text-[var(--text-dim)]" />
                  </div>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] py-3 pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition duration-150 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] sm:py-3.5 sm:text-base"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <Lock className="h-[17px] w-[17px] text-[var(--text-dim)]" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={update("password")}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] py-3 pl-10 pr-11 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition duration-150 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] sm:py-3.5 sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--text-muted)] transition duration-150 hover:text-[var(--text-primary)] focus:text-[var(--accent)] focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-[17px] w-[17px]" /> : <Eye className="h-[17px] w-[17px]" />}
                  </button>
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Organization
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <Building2 className="h-[17px] w-[17px] text-[var(--text-dim)]" />
                  </div>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={update("organization")}
                    required
                    placeholder="Acme Inc."
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] py-3 pl-10 pr-4 text-sm text-[var(--text-primary)] placeholder-[#4B5163] transition duration-150 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] sm:py-3.5 sm:text-base"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Role
                </label>
                <div className="flex items-center gap-6">
                  {["admin", "member"].map((r) => (
                    <label key={r} className="flex cursor-pointer items-center gap-2 group">
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        checked={form.role === r}
                        onChange={update("role")}
                        className="h-4 w-4 border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--accent)] focus:ring-[var(--accent-ring)] focus:ring-offset-0"
                      />
                      <span className="text-sm font-medium capitalize text-[var(--text-muted)] transition group-hover:text-[var(--text-primary)]">
                        {r}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="mb-1.5 block text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Department
                </label>
                <select
                  value={form.department}
                  onChange={update("department")}
                  required
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--text-primary)] transition duration-150 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] sm:py-3.5 sm:text-base"
                >
                  <option value="" disabled>Select a department</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d} value={d.toLowerCase()}>{d}</option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="rounded-lg border border-[var(--danger)]/30 bg-[var(--danger)]/10 px-4 py-2.5 text-sm text-[var(--danger)]">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7EE787] px-4 py-3 text-sm font-semibold text-[var(--bg-base)] transition-all duration-200 hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[#7EE787] focus:ring-offset-2 focus:ring-offset-[var(--bg-panel)] active:scale-[0.98] disabled:opacity-60 sm:py-3.5 sm:text-base"
              >
                {loading ? "Creating..." : "Create workspace"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
              Already have an account?{" "}
              <Link to="/" className="font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]">
                Sign in
              </Link>
            </p>

            <p className="mt-6 text-center text-xs text-[var(--text-dim)]">
              By creating an account you agree to our{" "}
              <a href="#" className="font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]">Terms</a>{" "}
              &{" "}
              <a href="#" className="font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
