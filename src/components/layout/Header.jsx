import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/mast.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Sownmark Logo" className="h-10 w-auto" />
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <NavItem to="/home" label="Home" />
          <NavItem to="/digital-marketing" label="Digital Marketing" />
          <NavItem to="/hiring-solutions" label="Hiring Solutions" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/about" label="About Us" />
          <Link
            to="/contact"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4 px-4 gap-2 text-slate-700 font-medium">
            <MobileNavItem to="/home" label="Home" />
            <MobileNavItem to="/digital-marketing" label="Digital Marketing" />
            <MobileNavItem to="/hiring-solutions" label="Hiring Solutions" />
            <MobileNavItem to="/blog" label="Blog" />
            <MobileNavItem to="/about" label="About Us" />
            <MobileNavItem to="/contact" label="Contact Us" />
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

// ---------------------
// 🧩 Simple Nav Item Components
// ---------------------

const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="relative hover:text-blue-600 transition duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
  >
    {label}
  </Link>
);

const MobileNavItem = ({ to, label }) => (
  <Link
    to={to}
    className="block py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-600"
  >
    {label}
  </Link>
);
