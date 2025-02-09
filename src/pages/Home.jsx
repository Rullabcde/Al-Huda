import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book, Users, Calendar, Images, Wallet } from "lucide-react";
import { usePrayerTimes } from "../hooks/usePrayerTimes";
import "../styles/animations.css";
import Events from "../components/Events";

const Home = () => {
  const prayerTimes = usePrayerTimes();

  return (
    <div className="bg-gray-50">
      {/* Prayer Times */}
      <div className="py-4 bg-emerald-800">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-5 gap-4 text-center">
            {[
              { name: "Subuh", time: prayerTimes.fajr },
              { name: "Dzuhur", time: prayerTimes.dhuhr },
              { name: "Ashar", time: prayerTimes.asr },
              { name: "Maghrib", time: prayerTimes.maghrib },
              { name: "Isya", time: prayerTimes.isha },
            ].map((prayer, index) => (
              <div
                key={prayer.name}
                className="space-y-1 transition-all duration-300 transform cursor-pointer hover:scale-105"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s backwards`,
                }}>
                <p className="text-sm text-gray-100">{prayer.name}</p>{" "}
                <p className="font-bold text-white">{prayer.time}</p>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Carousel */}
      <Events />

      {/* Cards */}
      <div className="flex items-center flex-1 px-4 py-12 mx-auto max-w-7xl min-h-[calc(100vh-320px)]">
        <div className="w-full max-w-5xl mx-auto">
          {/* Top Row - 4 Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4 md:gap-8">
            {[
              { to: "/tpa-schedule", Icon: Book, title: "Jadwal TPA" },
              { to: "/takjil", Icon: Users, title: "Jadwal Takjil" },
              { to: "/kultum", Icon: Users, title: "Jadwal Kultum" },
              {
                onClick: () => window.open("https://infaqalhuda.vercel.app"),
                Icon: Wallet,
                title: "Infaq Ramadhan",
              },
            ].map((card, index) =>
              card.onClick ? (
                // For Infaq Ramadhan, use div with onClick
                <div
                  key={card.title}
                  onClick={card.onClick}
                  className="block cursor-pointer group transform-gpu"
                  style={{
                    animation: `fadeSlideUp 0.6s ease-out ${
                      index * 0.2
                    }s backwards`,
                  }}>
                  <div className="relative h-full p-6 overflow-hidden text-center transition-all duration-500 bg-white rounded-lg shadow-md md:p-8 hover:shadow-2xl hover:bg-emerald-50 group-hover:-translate-y-2">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:scale-x-100" />
                      <div className="absolute top-0 right-0 w-1 h-full transition-transform duration-500 origin-top transform scale-y-0 bg-gradient-to-b from-emerald-600 to-emerald-400 group-hover:scale-y-100" />
                      <div className="absolute bottom-0 right-0 w-full h-1 transition-transform duration-500 origin-right transform scale-x-0 bg-gradient-to-l from-emerald-400 to-emerald-600 group-hover:scale-x-100" />
                      <div className="absolute top-0 left-0 w-1 h-full transition-transform duration-500 origin-bottom transform scale-y-0 bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:scale-y-100" />
                    </div>

                    <card.Icon className="w-12 h-12 mx-auto mb-4 transition-all duration-500 text-emerald-600 md:w-16 md:h-16 md:mb-6 group-hover:scale-125 group-hover:rotate-12" />
                    <h3 className="relative z-10 text-lg font-semibold transition-colors duration-300 md:text-xl group-hover:text-emerald-700">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ) : (
                // For other cards, use Link
                <Link
                  key={card.title}
                  to={card.to}
                  className="block cursor-pointer group transform-gpu"
                  style={{
                    animation: `fadeSlideUp 0.6s ease-out ${
                      index * 0.2
                    }s backwards`,
                  }}>
                  <div className="relative h-full p-6 overflow-hidden text-center transition-all duration-500 bg-white rounded-lg shadow-md md:p-8 hover:shadow-2xl hover:bg-emerald-50 group-hover:-translate-y-2">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:scale-x-100" />
                      <div className="absolute top-0 right-0 w-1 h-full transition-transform duration-500 origin-top transform scale-y-0 bg-gradient-to-b from-emerald-600 to-emerald-400 group-hover:scale-y-100" />
                      <div className="absolute bottom-0 right-0 w-full h-1 transition-transform duration-500 origin-right transform scale-x-0 bg-gradient-to-l from-emerald-400 to-emerald-600 group-hover:scale-x-100" />
                      <div className="absolute top-0 left-0 w-1 h-full transition-transform duration-500 origin-bottom transform scale-y-0 bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:scale-y-100" />
                    </div>

                    <card.Icon className="w-12 h-12 mx-auto mb-4 transition-all duration-500 text-emerald-600 md:w-16 md:h-16 md:mb-6 group-hover:scale-125 group-hover:rotate-12" />
                    <h3 className="relative z-10 text-lg font-semibold transition-colors duration-300 md:text-xl group-hover:text-emerald-700">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              )
            )}
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:px-24">
            {[
              { to: "/quran", Icon: Calendar, title: "Al - Quran" },
              { to: "/gallery", Icon: Images, title: "Gallery" },
            ].map((card, index) => (
              <Link
                key={card.title}
                to={card.to}
                className="block group transform-gpu"
                style={{
                  animation: `fadeSlideUp 0.6s ease-out ${
                    (index + 4) * 0.2
                  }s backwards`,
                }}>
                <div className="relative h-full p-6 overflow-hidden text-center transition-all duration-500 bg-white rounded-lg shadow-md md:p-8 hover:shadow-2xl hover:bg-emerald-50 group-hover:-translate-y-2">
                  {/* Animated border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:scale-x-100" />
                    <div className="absolute top-0 right-0 w-1 h-full transition-transform duration-500 origin-top transform scale-y-0 bg-gradient-to-b from-emerald-600 to-emerald-400 group-hover:scale-y-100" />
                    <div className="absolute bottom-0 right-0 w-full h-1 transition-transform duration-500 origin-right transform scale-x-0 bg-gradient-to-l from-emerald-400 to-emerald-600 group-hover:scale-x-100" />
                    <div className="absolute top-0 left-0 w-1 h-full transition-transform duration-500 origin-bottom transform scale-y-0 bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:scale-y-100" />
                  </div>

                  <card.Icon className="w-12 h-12 mx-auto mb-4 transition-all duration-500 text-emerald-600 md:w-16 md:h-16 md:mb-6 group-hover:scale-125 group-hover:rotate-12" />
                  <h3 className="relative z-10 text-lg font-semibold transition-colors duration-300 md:text-xl group-hover:text-emerald-700">
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
