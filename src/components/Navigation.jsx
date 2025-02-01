import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="relative bg-white shadow-md">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.webp"
            alt="Logo Masjid"
            className="rounded-full w-14 h-14"
            width={56}
            height={56}
            loading="lazy" // Lazy load the logo
          />
          <span className="ml-2 font-bold text-emerald-800">AL-HUDA</span>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen ? "true" : "false"} // Accessibility for screen readers
          className="relative z-50 p-2 text-gray-600 transition-colors rounded-md hover:text-gray-900 hover:bg-gray-100">
          {isOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 rotate-180"
            />
          ) : (
            <Menu
              size={24}
              className="transition-transform duration-300 scale-105"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "80px" }}>
        <div className="px-6 pt-4 pb-8 space-y-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tpa-schedule", label: "Jadwal TPA" },
  { to: "/takjil", label: "Jadwal Takjil" },
  { to: "/kultum", label: "Jadwal Kultum" },
  { to: "/infaq", label: "Infaq Ramadhan" },
  { to: "/quran", label: "Al-Qur'an Online" },
  { to: "/gallery", label: "Gallery" },
];

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-800 hover:pl-4">
    {children}
  </Link>
);

export default Navigation;
