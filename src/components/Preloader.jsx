import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-50">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 animate-ping">
            <div className="w-full h-full rounded-full opacity-75 bg-emerald-200"></div>
          </div>
          <img
            src="/logo.webp"
            alt="Logo Masjid"
            className="relative w-full h-full rounded-full animate-logo-bounce"
            width={96}
            height={96}
            loading="eager"
          />
        </div>

        {/* Text Loading */}
        <div className="flex mt-4 space-x-1 text-lg font-semibold text-emerald-800">
          <span>Masjid AL-HUDA</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot" style={{ animationDelay: "0.2s" }}>
            .
          </span>
          <span className="loading-dot" style={{ animationDelay: "0.4s" }}>
            .
          </span>
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
