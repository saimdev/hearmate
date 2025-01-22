import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Link as ScrollLink } from "react-scroll";
import logo from '../assets/logo-with-text.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 transition duration-300 bg-white shadow-md md:px-20 dark:bg-gray-900">
      
      <div className="flex items-center">
      <img src={logo} alt="" style={{width:'70px', borderRadius:'10px'}} className="mx-2"/>
        {/* <h1 className="text-2xl font-extrabold md:text-3xl text-cyan-500 dark:text-teal-300">
          Portfolio
        </h1> */}
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden gap-6 md:flex">
        {[
          { to: "hero", label: "Home" },
          { to: "solution", label: "Solution" },
          { to: "product", label: "Product" },
          { to: "features", label: "Features" },
          { to: "approvals", label: "Approvals" },
          { to: "pricing", label: "Pricing" },
          { to: "blogs", label: "Blogs" },
          { to: "contact", label: "Contact" },
        ].map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth
            duration={500}
            spy
            activeClass="text-cyan-500 dark:text-teal-300 font-bold border-b-2 border-cyan-500 dark:border-teal-300"
            className="transition duration-300 cursor-pointer hover:text-cyan-400 dark:hover:text-teal-400"
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>

      <div className="flex items-center justify-between gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Mobile Menu Toggle */}
        <button
          className="flex items-center justify-center w-10 h-10 text-2xl md:hidden text-cyan-500 dark:text-teal-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 flex flex-col items-center justify-center ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 1000 }}
        >
          <nav className="flex flex-col items-center gap-8 text-lg">
            {[
              { to: "hero", label: "Home" },
              { to: "solution", label: "Solution" },
              { to: "product", label: "Product" },
              { to: "features", label: "Features" },
              { to: "approvals", label: "Approvals" },
              { to: "pricing", label: "Pricing" },
              { to: "blogs", label: "Blogs" },
              { to: "contact", label: "Contact" },
            ].map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                spy
                activeClass="text-cyan-500 dark:text-teal-300 font-bold"
                className="transition duration-300 cursor-pointer hover:text-cyan-400 dark:hover:text-teal-400"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
