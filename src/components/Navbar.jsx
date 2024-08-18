import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative w-full py-5 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span> </span>
          <span className="font-bold text-xl">SkillShowcase</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <Link
                className="font-semibold text-gray-800 hover:text-gray-900"
                to=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-gray-800 hover:text-gray-900"
                to="mcq"
              >
                MCQ
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="font-semibold text-gray-800 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contactus"
                className="font-semibold text-gray-800 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Account
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-2 bg-white shadow-md">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                className="font-semibold text-gray-800 hover:text-gray-900"
                to="/"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-gray-800 hover:text-gray-900"
                to="mcq"
                onClick={toggleMobileMenu}
              >
                MCQ
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="font-semibold text-gray-800 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contactus"
                className="font-semibold text-gray-800 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={toggleMobileMenu}
              >
                Account
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
