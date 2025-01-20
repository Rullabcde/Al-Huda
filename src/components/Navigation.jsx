import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo Masjid"
              className="rounded-full w-14 h-14"
            />
            <span className="font-bold text-emerald-800">AL-HUDA</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 p-2 text-gray-600 transition-colors rounded-md hover:text-gray-900 hover:bg-gray-100">
            {isOpen ? (
              <X size={24} className="animate-spin-once" />
            ) : (
              <Menu size={24} className="animate-bounce-slight" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "104px" }}>
        <div className="px-6 pt-6 pb-8 space-y-4">
          <NavLink to="/" onClick={handleLinkClick}>
            Beranda
          </NavLink>
          <NavLink to="/tpa-schedule" onClick={handleLinkClick}>
            Jadwal TPA
          </NavLink>
          <NavLink to="/takjil" onClick={handleLinkClick}>
            Jadwal Takjil
          </NavLink>
          <NavLink to="/kultum" onClick={handleLinkClick}>
            Jadwal Kultum
          </NavLink>
          <NavLink to="/quran" onClick={handleLinkClick}>
            Al-Qur'an Online
          </NavLink>
          <NavLink to="/gallery" onClick={handleLinkClick}>
            Gallery
          </NavLink>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-800 hover:pl-4">
    {children}
  </Link>
);

export default Navigation;
