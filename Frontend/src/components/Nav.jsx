import { useState } from "react";
import { Workflow, Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Projects", "About us", "Contact us"];

  return (
    <>
      {/* Main container: sticky, dark, hairline bottom border instead of a shadow */}
      <nav className="sticky top-0 z-50 bg-[#0B0D12]/90 backdrop-blur-sm border-b border-[#262B36]">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-[#12151C] border border-[#262B36] flex items-center justify-center group-hover:border-[#7EE787]/40 transition-colors duration-150">
              <Workflow className="w-4 h-4 text-[#7EE787]" />
            </div>
            <span className="font-mono text-[17px] font-semibold text-[#E6E8EB] tracking-tight">
              bridgespace
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-medium text-[#A8AEBB] hover:text-[#E6E8EB] transition-colors duration-150"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-[#7EE787] text-[#0B0D12] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#97F0A3] active:scale-[0.98] transition-all duration-150 cursor-pointer">
            Sign up
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#E6E8EB] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-[#262B36] ${
            isOpen ? "max-h-80" : "max-h-0 border-t-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-1 py-5 bg-[#0B0D12] px-6">
            {links.map((link) => (
              <li key={link} className="w-full">
                <a
                  href="#"
                  className="block text-center py-2.5 text-[#A8AEBB] hover:text-[#E6E8EB] font-medium transition-colors duration-150"
                >
                  {link}
                </a>
              </li>
            ))}
            <button className="w-full max-w-xs mt-2 bg-[#7EE787] text-[#0B0D12] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#97F0A3] active:scale-[0.98] transition-all duration-150 cursor-pointer">
              Sign up
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;