import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 text-white bg-emerald-800">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">Masjid AL-HUDA</h2>
          <p className="text-sm text-emerald-200">
            Memakmurkan Masjid, Membangun Umat
          </p>
        </div>
        <div className="pt-6 mt-6 border-t border-emerald-700">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-center text-emerald-300">
              Tegalrejo No.Rt. 066, Srigading, Kec. Sanden, Kabupaten Bantul,
              Daerah Istimewa Yogyakarta
            </p>
          </div>
        </div>
        <div className="mt-6 text-sm text-center text-emerald-400">
          © 2025 Masjid AL-HUDA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
