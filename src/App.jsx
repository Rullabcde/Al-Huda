import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ScrollToTop } from "./utils/ScrollToTop";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import TPASchedule from "./pages/TPASchedule";
import TakjilSchedule from "./pages/TakjilSchedule";
import KultumSchedule from "./pages/KultumSchedule";
import QuranOnline from "./pages/QuranOnline";
import Gallery from "./pages/Gallery";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tpa-schedule" element={<TPASchedule />} />
          <Route path="/takjil" element={<TakjilSchedule />} />
          <Route path="/kultum" element={<KultumSchedule />} />
          <Route path="/quran" element={<QuranOnline />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
