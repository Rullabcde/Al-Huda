import React from "react";
import { Link } from "react-router-dom";
import { Book, Users, Calendar, Images } from "lucide-react";
import { usePrayerTimes } from "../hooks/usePrayerTimes";

const Home = () => {
  const prayerTimes = usePrayerTimes();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Prayer Times */}
      <div className="py-4 text-white bg-emerald-700">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-5 gap-4 text-center">
            <div className="space-y-1">
              <p className="text-xs">Subuh</p>
              <p className="font-bold">{prayerTimes.fajr}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs">Dzuhur</p>
              <p className="font-bold">{prayerTimes.dhuhr}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs">Ashar</p>
              <p className="font-bold">{prayerTimes.asr}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs">Maghrib</p>
              <p className="font-bold">{prayerTimes.maghrib}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs">Isya</p>
              <p className="font-bold">{prayerTimes.isha}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Cards */}
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4">
          <Link to="/tpa-schedule" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Book className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Jadwal TPA</h3>
            </div>
          </Link>

          <Link to="/takjil" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Users className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Jadwal Takjil</h3>
            </div>
          </Link>

          <Link to="/kultum" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Users className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Jadwal Kultum</h3>
            </div>
          </Link>

          <Link to="/quran" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Calendar className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Al - Quran</h3>
            </div>
          </Link>

          <Link to="/gallery" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Images className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Gallery</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
