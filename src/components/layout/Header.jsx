import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import logo from '../../assets/mast.png';
; // ✅ Make sure your logo is in src/assets/

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
      <div className="max-w-7x2 mx-auto px-6 flex justify-between items-center">
        {/* ✅ Logo Image instead of text */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Sownmark Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <NavItem to="/" label="Home" />
          <DropdownNavItem
            label="Digital Marketing Mastery"
            items={[
              { to: "/digital-marketing", label: "Overview" },
              { to: "/digital-marketing#courses", label: "Courses" },
              { to: "/digital-marketing#testimonials", label: "Testimonials" },
            ]}
          />
          <DropdownNavItem
            label="Hiring Solutions"
            items={[
              { to: "/hiring-solutions", label: "For Companies" },
              { to: "/hiring-solutions#job-seekers", label: "For Job Seekers" },
            ]}
          />
          <NavItem to="/#agency" label="Digital Marketing Agency" />
          <NavItem to="/#web-dev" label="Website Development" />

          {/* ✅ Blog added before About Us */}
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/about" label="About Us" />

          <Link
            to="/contact"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4 px-4 gap-2 text-slate-700 font-medium">
            <MobileNavItem to="/" label="Home" />
            <MobileDropdownNavItem
              label="Digital Marketing Mastery"
              items={[
                { to: "/digital-marketing", label: "Overview" },
                { to: "/digital-marketing#courses", label: "Courses" },
                { to: "/digital-marketing#testimonials", label: "Testimonials" },
              ]}
            />
            <MobileDropdownNavItem
              label="Hiring Solutions"
              items={[
                { to: "/hiring-solutions", label: "For Companies" },
                { to: "/hiring-solutions#job-seekers", label: "For Job Seekers" },
              ]}
            />
            <MobileNavItem to="/#agency" label="Digital Marketing Agency" />
            <MobileNavItem to="/#web-dev" label="Website Development" />

            {/* ✅ Blog added to mobile menu */}
            <MobileNavItem to="/blog" label="Blog" />
            <MobileNavItem to="/about" label="About Us" />
            <MobileNavItem to="/contact" label="Contact Us" />
          </ul>
        </div>
      )}
    </header>
  );
};

// Reusable Components
const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="relative hover:text-blue-600 transition duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300"
  >
    {label}
  </Link>
);

const DropdownNavItem = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600 transition">
        {label}
        <HiChevronDown className="text-base" />
      </button>
      {open && (
        <div className="absolute top-full left-0 w-52 mt-2 bg-white shadow-md rounded-md z-50">
          <ul className="flex flex-col p-2">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 rounded"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({ to, label }) => (
  <Link to={to} className="block py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-600">
    {label}
  </Link>
);

const MobileDropdownNavItem = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-50 hover:text-blue-600"
      >
        {label}
        <HiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="bg-slate-50 rounded px-2 py-1">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block py-1 px-4 text-sm text-slate-700 hover:bg-blue-100 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
