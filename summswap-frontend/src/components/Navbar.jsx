import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#101212]">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20V20H4V4Z"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10L12 6L16 10"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 14L12 18L8 14"
                    stroke="#28CC9D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h1 className="text-2xl font-bold text-white">SummSwap</h1>
                
              </div>
              
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
            <Link to="/dashboard" className="text-white font-bold p-4 text-xl hover:text-gray-600">Dashboard</Link>
              <Searchbar />
              <Link
                to="/login"
                className="text-base text-white hover:text-opacity-80"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold text-white bg-white/20 hover:bg-white/40 rounded-lg"
              >
                Signup for free
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="lg:hidden mt-2 space-y-4 bg-black">
            <Link to="/dashboard" className="text-white font-bold hover:text-indigo-600">Dashboard</Link>
              <Searchbar />
              <Link
                to="/login"
                className="block text-white px-4 py-2 hover:bg-white/10 rounded-md"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block text-white px-4 py-2 bg-white/20 hover:bg-white/40 rounded-md"
              >
                Signup for free
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
