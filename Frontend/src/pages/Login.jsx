// import { useState, useCallback } from "react";
// import {
//   Mail,
//   Lock,
//   Zap,
//   ArrowRight,
//   CheckCircle,
//   AlertCircle,
//   Info,
// } from "lucide-react";
// import Nav from "../components/Nav";
// import { Link } from "react-router-dom";



// // ─── Toast Component ───────────────────────────────────────────────
// function Toast({ message, type, onRemove }) {
//   const [exiting, setExiting] = useState(false);

//   const handleClose = useCallback(() => {
//     setExiting(true);
//     setTimeout(onRemove, 300);
//   }, [onRemove]);

//   // Auto-dismiss after 3s
//   setTimeout(handleClose, 3000);

//   const styles = {
//     success: "bg-green-50 border-green-200 text-green-800",
//     error: "bg-red-50 border-red-200 text-red-800",
//     info: "bg-blue-50 border-blue-200 text-blue-800",
//   };
//   const Icon = { success: CheckCircle, error: AlertCircle, info: Info }[type];

//   return (
//     <div
//       className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium shadow-lg ${
//         styles[type]
//       } ${exiting ? "animate-[slideOutRight_0.3s_ease-in_forwards]" : "animate-[slideInRight_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"}`}
//     >
//       <Icon className="w-4 h-4 shrink-0" />
//       <span>{message}</span>
//     </div>
//   );
// }

// // ─── Google Icon (inline SVG — no external dep) ────────────────────
// function GoogleIcon() {
//   return (
//     <svg className="w-4 h-4" viewBox="0 0 24 24">
//       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
//       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" />
//       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//     </svg>
//   );
// }

// // ─── GitHub Icon (inline SVG) ──────────────────────────────────────
// function GitHubIcon() {
//   return (
//     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
//     </svg>
//   );
// }

// // ─── Spinner ────────────────────────────────────────────────────────
// function Spinner() {
//   return (
//     <svg
//       className="animate-spin w-5 h-5 text-white"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//     >
//       <circle
//         className="opacity-25"
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeWidth="4"
//       />
//       <path
//         className="opacity-75"
//         fill="currentColor"
//         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//       />
//     </svg>
//   );
// }

// // ─── Main Login Component ───────────────────────────────────────────
// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [toasts, setToasts] = useState([]);

//   // Toast helpers
//   const addToast = useCallback((message, type = "success") => {
//     const id = Date.now();
//     setToasts((prev) => [...prev, { id, message, type }]);
//   }, []);

//   const removeToast = useCallback((id) => {
//     setToasts((prev) => prev.filter((t) => t.id !== id));
//   }, []);

//   // Form submit
//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       setLoading(true);

//       // Simulate API call
//       await new Promise((r) => setTimeout(r, 1500));

//       setLoading(false);
//       addToast(`Welcome back! Signed in as ${email}`, "success");
//     },
//     [email, addToast]
//   );

//   return (
//     <>
//       <Nav/>
//       <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
//         {/* ── Left Branded Panel (lg+) ─────────────────────── */}
//         <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 xl:p-12 flex-col justify-between text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 xl:w-96 h-64 xl:h-96 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
//           <div className="absolute bottom-0 left-0 w-64 xl:w-96 h-64 xl:h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl -ml-20 -mb-20" />

//           <div className="relative z-10">
//             <h1 className="text-2xl xl:text-3xl font-bold tracking-tight">
//               Bridge Space
//             </h1>
//           </div>

//           <div className="relative z-10">
//             <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight mb-4">
//               Connect, collaborate, and create without limits.
//             </h2>
//             <p className="text-blue-100 text-base xl:text-lg max-w-md">
//               Join thousands of professionals building the future of work.
//             </p>
//           </div>

//           <div className="relative z-10 text-sm text-blue-200">
//             &copy; 2024 Bridge Space. All rights reserved.
//           </div>
//         </div>

//         {/* ── Right Form Panel (all screens) ───────────────── */}
//         <div className="flex flex-col justify-center w-full lg:w-1/2 py-8 px-4 sm:px-6 md:py-12 lg:px-12 xl:px-20 2xl:px-24 min-h-screen lg:min-h-0">
//           {/* Mobile Logo */}
//           <div className="lg:hidden mb-6 sm:mb-8 flex items-center justify-center gap-2.5">
//             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
//               <Zap className="w-4 h-4 text-white" />
//             </div>
//             <span className="text-xl font-bold text-gray-900">
//               Bridge Space
//             </span>
//           </div>

//           <div className="mx-auto w-full max-w-md">
//             {/* Heading */}
//             <div className="mb-8 sm:mb-10">
//               <h2 className="text-2xl text-center sm:text-3xl font-bold text-gray-900 tracking-tight">
//                 Welcome back
//               </h2>
//               <p className="mt-2 text-sm text-center sm:text-base text-gray-500">
//                 Please enter your details to sign in.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
//                 >
//                   Email
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
//                     <Mail className="w-[18px] h-[18px] text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="w-full pl-10 pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
//                     <Lock className="w-[18px] h-[18px] text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="w-full pl-10 pr-20 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium focus:outline-none transition duration-200 px-1 py-1"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               {/* Links Row */}
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 pt-1">
//                 <p className="text-sm text-gray-500">
//                   Don't have an account?{" "}
//                   <Link to="/register" className="font-medium text-blue-600 hover:text-blue-700 transition-colors" >Register</Link>
//                 </p>
//                 <a
//                   href="#"
//                   className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors sm:ml-auto"
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:from-blue-600 disabled:hover:to-indigo-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 mt-2"
//               >
//                 {loading ? (
//                   <>
//                     <Spinner />
//                     Signing in...
//                   </>
//                 ) : (
//                   <>
//                     Log In
//                     <ArrowRight className="w-4 h-4" />
//                   </>
//                 )}
//               </button>

//               {/* Divider */}
//               <div className="relative flex items-center gap-4 py-1">
//                 <div className="flex-1 h-px bg-gray-200" />
//                 <span className="text-xs text-gray-400 font-medium uppercase tracking-wider whitespace-nowrap">
//                   or continue with
//                 </span>
//                 <div className="flex-1 h-px bg-gray-200" />
//               </div>

//               {/* Social Buttons */}
//               <div className="grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
//                 >
//                   <GoogleIcon />
//                   <span>Google</span>
//                 </button>
//                 <button
//                   type="button"
//                   className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
//                 >
//                   <GitHubIcon />
//                   <span>GitHub</span>
//                 </button>
//               </div>
//             </form>

//             {/* Footer */}
//             <p className="mt-8 sm:mt-10 text-center text-xs text-gray-400">
//               By signing in you agree to our{" "}
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
//               >
//                 Terms
//               </a>{" "}
//               &{" "}
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
//               >
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ── Toast Layer ────────────────────────────────────── */}
//       <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
//         {toasts.map((t) => (
//           <Toast
//             key={t.id}
//             message={t.message}
//             type={t.type}
//             onRemove={() => removeToast(t.id)}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Mail,
  Lock,
  Workflow,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Info,
  Eye,
  EyeOff,
} from "lucide-react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// ─── Design tokens ──────────────────────────────────────────────────
// bg-base   #0B0D12   near-black navy, the app shell
// bg-panel  #12151C   form panel / terminal card
// bg-field  #171B24   inputs, elevated surfaces
// border    #262B36   hairline borders
// accent    #7EE787   terminal green — "linked" / success / focus
// accent-2  #F0A868   warm amber — CTA gradient partner
// text      #E6E8EB   primary text
// muted     #7A8194   secondary text
// danger    #F87171   errors

// ─── Toast ──────────────────────────────────────────────────────────
function Toast({ message, type, onRemove }) {
  const [exiting, setExiting] = useState(false);

  const handleClose = useCallback(() => {
    setExiting(true);
    setTimeout(onRemove, 250);
  }, [onRemove]);

  useEffect(() => {
    const t = setTimeout(handleClose, 3000);
    return () => clearTimeout(t);
  }, [handleClose]);

  const cfg = {
    success: { border: "border-l-[#7EE787]", icon: CheckCircle2, iconColor: "text-[var(--accent)]" },
    error: { border: "border-l-[#F87171]", icon: AlertCircle, iconColor: "text-[var(--danger)]" },
    info: { border: "border-l-[#7DA9F0]", icon: Info, iconColor: "text-[var(--info)]" },
  }[type];
  const Icon = cfg.icon;

  return (
    <div
      className={`flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-md border border-[var(--border)] ${cfg.border} border-l-2 bg-[var(--bg-panel)] text-[var(--text-primary)] text-sm font-mono shadow-xl shadow-black/20 ${
        exiting ? "animate-[toastOut_.25s_ease-in_forwards]" : "animate-[toastIn_.35s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      }`}
    >
      <Icon className={`w-4 h-4 shrink-0 ${cfg.iconColor}`} />
      <span>{message}</span>
    </div>
  );
}

// ─── Icons ──────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

// ─── Signature element: the handshake log ──────────────────────────
// Literalizes "BridgeSpace" as a session log connecting each team
// function to the person logging in — the one thing this screen
// should be remembered by.
const HANDSHAKE_LINES = [
  { text: "bridgespace connect --workspace", type: "cmd" },
  { text: "resolving handshake...", type: "info" },
  { text: "engineering     linked", type: "ok" },
  { text: "product         linked", type: "ok" },
  { text: "design          linked", type: "ok" },
  { text: "you             ready", type: "you" },
];

function HandshakeLog() {
  const [visible, setVisible] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(HANDSHAKE_LINES.length);
      return;
    }
    function step(i) {
      timeoutRef.current = setTimeout(() => {
        setVisible(i);
        if (i < HANDSHAKE_LINES.length) {
          step(i + 1);
        } else {
          timeoutRef.current = setTimeout(() => {
            setVisible(0);
            step(1);
          }, 2600);
        }
      }, i === 0 ? 300 : 480);
    }
    step(1);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-panel)]/80 backdrop-blur-sm overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--bg-panel)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--danger)]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--amber)]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]/70" />
        <span className="ml-2 text-xs font-mono text-[var(--text-muted)] tracking-wide">
          session
        </span>
      </div>
      {/* log body */}
      <div className="px-4 py-4 font-mono text-[13px] leading-6 min-h-[168px]">
        {HANDSHAKE_LINES.slice(0, visible).map((line, i) => (
          <div key={i} className="flex items-baseline gap-2">
            {line.type === "cmd" ? (
              <>
                <span className="text-[var(--amber)]">$</span>
                <span className="text-[var(--text-primary)]">{line.text}</span>
              </>
            ) : line.type === "info" ? (
              <span className="text-[var(--text-muted)] pl-4">{line.text}</span>
            ) : (
              <span className="pl-4 flex items-baseline gap-2">
                <span className={line.type === "you" ? "text-[var(--amber)]" : "text-[var(--accent)]"}>
                  ✓
                </span>
                <span className={line.type === "you" ? "text-[var(--amber)]" : "text-[var(--text-secondary)]"}>
                  {line.text}
                </span>
              </span>
            )}
          </div>
        ))}
        <span
          className="inline-block w-[7px] h-[15px] bg-[var(--accent)] align-middle ml-[2px]"
          style={{ animation: "cursorBlink 1s step-end infinite" }}
        />
      </div>
    </div>
  );
}

// ─── Main Login Component ───────────────────────────────────────────
export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await login({ email, password });
        navigate("/dashboard");
      } catch (err) {
        const msg = err.response?.data?.message || "Login failed";
        addToast(msg, "error");
      } finally {
        setLoading(false);
      }
    },
    [email, password, login, navigate, addToast]
  );

  return (
    <>
      <Nav />

      <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--bg-base)]">
        {/* ── Left panel ─────────────────────────────────────── */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 xl:p-14 overflow-hidden">
          {/* subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#7EE787 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--accent-subtle)] rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-[var(--amber-subtle)] rounded-full blur-3xl" />

          <div className="relative z-10 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[var(--bg-panel)] border border-[var(--border)] flex items-center justify-center">
              <Workflow className="w-4 h-4 text-[var(--accent)]" />
            </div>
            <span className="font-mono text-[15px] font-semibold text-[var(--text-primary)] tracking-tight">
              bridgespace
            </span>
          </div>

          <div className="relative z-10 max-w-md">
            <h2 className="text-3xl xl:text-[2.25rem] font-mono font-bold leading-tight text-[var(--text-primary)] mb-3 tracking-tight">
              Where specs turn into
              <br />
              shipped work.
            </h2>
            <p className="text-[var(--text-muted)] text-[15px] mb-8 leading-relaxed">
              One workspace for the people who write the ticket and the people who close it.
            </p>
            <HandshakeLog />
          </div>

          <div className="relative z-10 text-xs font-mono text-[var(--text-dim)]">
            bridgespace © 2024
          </div>
        </div>

        {/* ── Right panel ────────────────────────────────────── */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 py-10 px-4 sm:px-6 md:py-12 lg:px-12 xl:px-20 2xl:px-24 min-h-screen lg:min-h-0 bg-[var(--bg-panel)]">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex items-center justify-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[var(--bg-panel)] border border-[var(--border)] flex items-center justify-center">
              <Workflow className="w-4 h-4 text-[var(--accent)]" />
            </div>
            <span className="font-mono text-[15px] font-semibold text-[var(--text-primary)] tracking-tight">
              bridgespace
            </span>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-[1.75rem] font-mono font-bold text-[var(--text-primary)] tracking-tight">
                Welcome back
              </h1>
              <p className="mt-2 text-sm sm:text-base text-[var(--text-muted)]">
                Sign in to pick up where your team left off.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="w-[17px] h-[17px] text-[var(--text-dim)]" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 sm:py-3.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[#4B5163] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] focus:border-[var(--accent)] transition duration-150"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="w-[17px] h-[17px] text-[var(--text-dim)]" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-11 py-3 sm:py-3.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] placeholder-[#4B5163] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] focus:border-[var(--accent)] transition duration-150"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] focus:outline-none focus:text-[var(--accent)] transition duration-150 p-1"
                  >
                    {showPassword ? <EyeOff className="w-[17px] h-[17px]" /> : <Eye className="w-[17px] h-[17px]" />}
                  </button>
                </div>
              </div>

              {/* Links row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 pt-1">
                <p className="text-sm text-[var(--text-muted)]">
                  No account?{" "}
                  <Link to="/register" className="font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
                    Register
                  </Link>
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors sm:ml-auto"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 rounded-lg text-sm sm:text-base font-semibold text-[var(--bg-base)] bg-[#7EE787] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-panel)] focus:ring-[#7EE787] transition-all duration-200 mt-2"
              >
                {loading ? (
                  <>
                    <Spinner />
                    Signing in...
                  </>
                ) : (
                  <>
                    Log in
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative flex items-center gap-4 py-1">
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider whitespace-nowrap">
                  or continue with
                </span>
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--bg-hover)] hover:border-[var(--border-hover)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#262B36] transition-all duration-150"
                >
                  <GoogleIcon />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--bg-hover)] hover:border-[var(--border-hover)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#262B36] transition-all duration-150"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </button>
              </div>
            </form>

            <p className="mt-8 sm:mt-10 text-center text-xs text-[var(--text-dim)]">
              By signing in you agree to our{" "}
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium transition-colors">
                Terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ── Toast layer ────────────────────────────────────── */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <Toast key={t.id} message={t.message} type={t.type} onRemove={() => removeToast(t.id)} />
        ))}
      </div>
    </>
  );
}