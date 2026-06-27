import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Container: Sticks to top, white background, subtle bottom shadow */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Inner Container: Centers content, adds horizontal padding, aligns items in a row */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <p className="text-2xl font-bold tracking-tight text-indigo-600">
            BridgeSpace
          </p>

          {/* Desktop Links (Hidden on mobile, flex on medium screens and up) */}
          <ul className="hidden md:flex items-center gap-8">
            <li className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
              Projects
            </li>
            <li className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
              Contact Us
            </li>
          </ul>

          {/* Desktop Sign Up Button (Hidden on mobile) */}
          <button className="hidden md:block bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">
            Sign Up
          </button>

          {/* Mobile Hamburger Button (Visible only on mobile) */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown (Only renders when isOpen is true) */}
        <div className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
          <ul className="flex flex-col items-center gap-4 pb-6 bg-white px-6">
            <li className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer">Projects</li>
            <li className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer">About Us</li>
            <li className="text-gray-700 font-medium hover:text-indigo-600 cursor-pointer">Contact Us</li>
            <button className="w-full max-w-xs bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer">
              Sign Up
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;