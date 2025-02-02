import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header with Marquee and Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <MarqueeText />
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="pt-[104px]">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const MarqueeText = () => (
  <div
    className="py-1 overflow-hidden text-white bg-emerald-700 whitespace-nowrap"
    aria-hidden="true">
    <div className="inline-block animate-[marquee_20s_linear_infinite]">
      Selamat datang di website Masjid AL-HUDA Tegalrejo No.Rt. 066, Srigading,
      Kec. Sanden, Kabupaten Bantul, Daerah Istimewa Yogyakarta. &nbsp;
    </div>
    <div className="inline-block animate-[marquee_20s_linear_infinite]">
      Selamat datang di website Masjid AL-HUDA Tegalrejo No.Rt. 066, Srigading,
      Kec. Sanden, Kabupaten Bantul, Daerah Istimewa Yogyakarta. &nbsp;
    </div>
  </div>
);

export default MainLayout;
