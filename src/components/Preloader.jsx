import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-50">
      <div className="relative flex flex-col items-center">
        {/* Logo Container with Pulse Effect */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <div className="w-24 h-24 rounded-full opacity-75 bg-emerald-200"></div>
          </div>
          <div className="relative">
            <img
              src="/logo.png"
              alt="Logo Masjid"
              className="w-24 h-24 rounded-full animate-bounce"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-4 text-emerald-800">
          <div className="flex items-center space-x-1">
            <span className="text-lg font-semibold">Masjid AL-HUDA</span>
            <span className="animate-bounce">.</span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              .
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              .
            </span>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 mt-4 overflow-hidden rounded-full bg-emerald-100">
          <div className="w-full h-full bg-emerald-600 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
