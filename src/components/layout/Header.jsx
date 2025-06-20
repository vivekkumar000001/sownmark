import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import logo from '../layout/logo.jpg'; // ✅ Make sure your logo is in /src/assets/logo.png

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [logoFailed, setLogoFailed] = useState(false);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
  <div className="max-w-7x3 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
    
    {/* ✅ This is your logo block — it will stay left */}
    <Link to="/" className="flex items-end space-x-2">
      {!logoFailed ? (
        <img
          src={logo}
          alt="Sownmark Logo"
          className="h-10 w-left"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="text-2xl font-bold text-blue-600">
          Sown<span className="text-emerald-500">mark</span>
        </span>
      )}
    </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <NavItem to="/" label="Home" />
            <DropdownNavItem 
              label="Digital Marketing Mastery" 
              items={[
                { to: "/digital-marketing", label: "Overview" },
                { to: "/digital-marketing#courses", label: "Courses/Programs" },
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
            <NavItem to="/about" label="About Us" />
            <NavItem to="/contact" label="Contact Us" />
          </ul>
        </nav>

        {/* ✅ Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4">
            <MobileNavItem to="/" label="Home" />
            <MobileDropdownNavItem 
              label="Digital Marketing Mastery" 
              items={[
                { to: "/digital-marketing", label: "Overview" },
                { to: "/digital-marketing#courses", label: "Courses/Programs" },
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
            <MobileNavItem to="/about" label="About Us" />
            <MobileNavItem to="/contact" label="Contact Us" />
          </ul>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="font-medium text-slate-700 hover:text-blue-600 transition-colors"
    >
      {label}
    </Link>
  </li>
);

const DropdownNavItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center font-medium text-slate-700 hover:text-blue-600 transition-colors">
        {label} <HiChevronDown className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.to} 
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const MobileNavItem = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="block py-3 px-6 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      {label}
    </Link>
  </li>
);

const MobileDropdownNavItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button 
        className="flex items-center justify-between w-full py-3 px-6 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <HiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <ul className="bg-slate-50">
          {items.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.to} 
                className="block py-2 px-10 text-sm text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Header;
