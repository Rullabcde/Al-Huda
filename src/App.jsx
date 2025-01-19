import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  X,
  Clock,
  Book,
  Calendar,
  Users,
  DollarSign,
  Heart,
  UtensilsCrossed,
} from "lucide-react";

const Home = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: "--:--",
    dhuhr: "--:--",
    asr: "--:--",
    maghrib: "--:--",
    isha: "--:--",
  });

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Yogyakarta&country=Indonesia&method=11"
        );
        const data = await response.json();
        const timings = data.data.timings;
        setPrayerTimes({
          fajr: timings.Fajr,
          dhuhr: timings.Dhuhr,
          asr: timings.Asr,
          maghrib: timings.Maghrib,
          isha: timings.Isha,
        });
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, []);

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
              <p className="text-sm text-gray-600">
                Hadir dalam kajian mingguan bersama ustadz terpercaya
              </p>
            </div>
          </Link>

          <Link to="/quran" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Calendar className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Al - Quran</h3>
              <p className="text-sm text-gray-600">
                Informasi kegiatan masjid terkini
              </p>
            </div>
          </Link>

          <Link to="/takjil" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <Users className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Jadwal Takjil</h3>
              <p className="text-sm text-gray-600">
                Pendidikan Al-Quran untuk anak-anak
              </p>
            </div>
          </Link>

          <Link to="/infaq" className="block">
            <div className="p-6 text-center transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <DollarSign className="mx-auto mb-3 text-emerald-600" size={32} />
              <h3 className="mb-2 text-lg font-semibold">Infaq Online</h3>
              <p className="text-sm text-gray-600">
                Kemudahan berinfaq melalui transfer bank
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const TPASchedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const scheduleData = [
    {
      day: "Senin",
      teacher: "Ust. Ahmad",
      class: "Iqro 1-2",
      time: "16:00 - 17:30",
    },
    {
      day: "Selasa",
      teacher: "Ustz. Fatimah",
      class: "Iqro 3-4",
      time: "16:00 - 17:30",
    },
    {
      day: "Rabu",
      teacher: "Ust. Ibrahim",
      class: "Iqro 5-6",
      time: "16:00 - 17:30",
    },
    {
      day: "Kamis",
      teacher: "Ustz. Aisyah",
      class: "Al-Quran",
      time: "16:00 - 17:30",
    },
    {
      day: "Jumat",
      teacher: "Ust. Umar",
      class: "Tahfidz",
      time: "16:00 - 17:30",
    },
    {
      day: "Sabtu",
      teacher: "Ust. Ali",
      class: "Tajwid",
      time: "09:00 - 10:30",
    },
    {
      day: "Minggu",
      teacher: "Semua Pengajar",
      class: "Evaluasi",
      time: "09:00 - 11:00",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        Jadwal Pengajar TPA
      </h1>
      <div className="max-w-2xl mx-auto">
        {scheduleData.map((schedule) => (
          <div
            key={schedule.day}
            onClick={() => setSelectedSchedule(schedule)}
            className="p-4 mb-4 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-emerald-700">{schedule.day}</h3>
                <span className="px-2 py-1 text-sm rounded bg-emerald-100 text-emerald-800">
                  {schedule.time}
                </span>
              </div>
              <div className="text-gray-600">
                <p className="font-medium">{schedule.teacher}</p>
                <p className="text-sm">{schedule.class}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-emerald-800">
                Detail Jadwal {selectedSchedule.day}
              </h2>
              <button
                onClick={() => setSelectedSchedule(null)}
                className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="pb-2 border-b">
                <p className="text-sm text-gray-500">Waktu</p>
                <p className="font-medium text-gray-800">
                  {selectedSchedule.time}
                </p>
              </div>

              <div className="pb-2 border-b">
                <p className="text-sm text-gray-500">Pengajar</p>
                <p className="font-medium text-gray-800">
                  {selectedSchedule.teacher}
                </p>
              </div>

              <div className="pb-2">
                <p className="text-sm text-gray-500">Kelas</p>
                <p className="font-medium text-gray-800">
                  {selectedSchedule.class}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const QuranOnline = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await response.json();
        setSurahs(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching surahs:", error);
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const fetchSurahVerses = async (surahNumber) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.alquran.cloud/v1/surah/${surahNumber}`
      );
      const data = await response.json();
      setVerses(data.data.ayahs);
      setSelectedSurah(data.data);
    } catch (error) {
      console.error("Error fetching verses:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        Al-Qur'an Online
      </h1>

      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : selectedSurah ? (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedSurah(null)}
            className="px-4 py-2 mb-4 text-white rounded bg-emerald-600 hover:bg-emerald-700">
            Kembali ke Daftar Surah
          </button>
          <h2 className="mb-4 text-xl font-bold text-center">
            {selectedSurah.name} ({selectedSurah.englishName})
          </h2>
          <div className="space-y-4">
            {verses.map((verse) => (
              <div
                key={verse.number}
                className="p-4 bg-white rounded-lg shadow">
                <p className="mb-2 text-2xl text-right font-arabic">
                  {verse.text}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Ayat {verse.numberInSurah}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              onClick={() => fetchSurahVerses(surah.number)}
              className="p-4 text-left transition-shadow bg-white rounded-lg shadow hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-800">
                  {surah.number}. {surah.englishName}
                </span>
                <span className="text-sm text-gray-600">
                  {surah.numberOfAyahs} ayat
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {surah.englishNameTranslation}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const TakjilSchedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const ramadanSchedule = [
    {
      date: "1 Ramadan",
      group: "RT 01",
      menu: "Kolak & Kurma",
      members: ["Ibu Siti", "Ibu Aminah", "Ibu Fatimah", "Ibu Sarah"],
    },
    {
      date: "2 Ramadan",
      group: "RT 02",
      menu: "Es Buah & Gorengan",
      members: ["Ibu Aisyah", "Ibu Maryam", "Ibu Khadijah", "Ibu Zahra"],
    },
    {
      date: "3 Ramadan",
      group: "RT 03",
      menu: "Bubur Sumsum",
      members: ["Ibu Rahma", "Ibu Nur", "Ibu Halimah", "Ibu Zainab"],
    },
    {
      date: "4 Ramadan",
      group: "RT 04",
      menu: "Ta'jil Lengkap",
      members: ["Ibu Hafshah", "Ibu Ruqayya", "Ibu Safiya", "Ibu Lubna"],
    },
    {
      date: "5 Ramadan",
      group: "Karang Taruna",
      menu: "Soup Buah & Takjil",
      members: ["Ahmad", "Faisal", "Ridwan", "Zaki", "Farid"],
    },
    {
      date: "6 Ramadan",
      group: "Ibu-ibu PKK",
      menu: "Menu Spesial",
      members: ["Ibu Asma", "Ibu Latifah", "Ibu Salma", "Ibu Nabila"],
    },
    {
      date: "7 Ramadan",
      group: "Donatur 1",
      menu: "Takjil Variasi",
      members: ["Bpk. Rahman", "Ibu Nur", "Ibu Dewi", "Ibu Maya"],
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        Jadwal Pembuat Takjil
      </h1>
      <div className="max-w-2xl mx-auto">
        {ramadanSchedule.map((schedule, index) => (
          <div
            key={index}
            className="p-4 mb-4 transition-all bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedSchedule(schedule)}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-700">
                {schedule.date}
              </span>
              <span className="px-2 py-1 text-sm rounded bg-emerald-100 text-emerald-800">
                {schedule.group}
              </span>
            </div>
            <div className="text-gray-600">
              <p className="text-sm">Menu: {schedule.menu}</p>
            </div>
          </div>
        ))}
        <div className="p-4 mt-6 rounded-lg bg-emerald-50">
          <p className="text-sm text-emerald-800">
            Catatan:
            <ul className="mt-2 ml-4 list-disc">
              <li>Takjil disediakan mulai pukul 17:00</li>
              <li>Mohon konfirmasi menu H-1</li>
              <li>Perkiraan porsi 100 orang</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-emerald-800">
                Detail Takjil
              </h2>
              <button
                onClick={() => setSelectedSchedule(null)}
                className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Tanggal</p>
                  <p className="font-medium text-gray-800">
                    {selectedSchedule.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-2 border-b">
                <Users className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Kelompok</p>
                  <p className="font-medium text-gray-800">
                    {selectedSchedule.group}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-2 border-b">
                <UtensilsCrossed className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Menu</p>
                  <p className="font-medium text-gray-800">
                    {selectedSchedule.menu}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="mb-2 text-sm text-gray-500">Anggota Tim:</p>
                <ul className="space-y-2">
                  {selectedSchedule.members.map((member, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Marquee Text */}
      <div className="py-1 overflow-hidden text-white bg-emerald-600 whitespace-nowrap">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          🌟 Selamat datang di Masjid Al-Hidayah • Menerima Zakat, Infaq, dan
          Sedekah • Kajian Rutin Setiap Ahad Pagi &nbsp;
        </div>
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          🌟 Selamat datang di Masjid Al-Hidayah • Menerima Zakat, Infaq, dan
          Sedekah • Kajian Rutin Setiap Ahad Pagi &nbsp;
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="Logo Masjid"
                className="w-10 h-10 rounded-full"
              />
              <span className="ml-2 font-semibold text-emerald-800">
                Masjid Al-Hidayah
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                Beranda
              </Link>
              <Link
                to="/tpa-schedule"
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                Jadwal TPA
              </Link>
              <Link
                to="/quran"
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                Al-Qur'an Online
              </Link>
              <Link
                to="/takjil"
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">
                Jadwal Takjil
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tpa-schedule" element={<TPASchedule />} />
        <Route path="/quran" element={<QuranOnline />} />
        <Route path="/takjil" element={<TakjilSchedule />} />
      </Routes>

      {/* Footer */}
      <footer className="mt-8 text-white bg-emerald-800">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold">Masjid Al-Hidayah</h2>
            <p className="text-sm text-emerald-200">
              Memakmurkan Masjid, Membangun Umat
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-emerald-700">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <Heart size={20} className="text-emerald-400" />
                <span className="text-sm">Mari Makmurkan Masjid</span>
              </div>
              <p className="text-sm text-emerald-300">
                Jl. Masjid No. 123, Yogyakarta
              </p>
              <p className="text-sm text-emerald-300">Telp: (0274) 123456</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-center text-emerald-400">
            © 2024 Masjid Al-Hidayah. All rights reserved.
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
