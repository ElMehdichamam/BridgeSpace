import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [organization, setOrganization] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

  function validateInputs() {
    if (!email || !name || !password || !role || !department || !organization) {
      console.log("All fields required");
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateInputs()) return;
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Card Wrapper - Styling moved here from the form */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Create Account</h2>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
              placeholder="you@example.com"
            />
          </div>

          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
              placeholder="John Doe"
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={(e) => setPass(e.target.value)} 
                required 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 pr-12" 
                placeholder="••••••••"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {!showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Organization Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
            <input 
              type="text" 
              value={organization} 
              onChange={e => setOrganization(e.target.value)} 
              required 
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" 
              placeholder="Acme Inc."
            />
          </div>

          {/* Role Radio Buttons */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center cursor-pointer group">
                <input 
                  type="radio" 
                  name="role"  
                  value='admin' 
                  onChange={(e) => setRole(e.target.value)} 
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" 
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition">Admin</span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <input 
                  type="radio" 
                  name="role" 
                  value='member' 
                  onChange={(e) => setRole(e.target.value)} 
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" 
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition">Member</span>
              </label>
            </div>
          </div>

          {/* Department Select */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select 
              value={department} 
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            >
              <option value="" disabled>Select a department</option>
              <option value="dev">Dev</option>
              <option value="finance">Finance</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-95"
          >
            Register
          </button>
        </form>

        {/* Login Link - Placed outside the form to avoid triggering validation errors when clicked */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link 
            to="/login" 
            className="font-semibold text-indigo-600 hover:text-indigo-500 transition duration-200"
          >
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;