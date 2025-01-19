import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  Book,
  Calendar,
  Users,
  Search,
  ChevronLeft,
  Volume2,
} from "lucide-react";
import Preloader from "./Preloader";

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
      teachers: ["Ust. Ahmad", "Ust. Budi", "Ust. Sulaiman"],
      time: "16:00 - 17:30",
    },
    {
      day: "Selasa",
      teachers: ["Ustz. Fatimah", "Ust. Yusuf"],
      time: "16:00 - 17:30",
    },
    {
      day: "Rabu",
      teachers: ["Ust. Ibrahim", "Ust. Hasan", "Ust. Ridwan"],
      time: "16:00 - 17:30",
    },
    {
      day: "Kamis",
      teachers: ["Ustz. Aisyah", "Ust. Farhan"],
      time: "16:00 - 17:30",
    },
    {
      day: "Jumat",
      teachers: ["Ust. Umar", "Ust. Khalid"],
      time: "16:00 - 17:30",
    },
    {
      day: "Sabtu",
      teachers: ["Ust. Ali", "Ust. Hamzah", "Ust. Zubair"],
      time: "16:00 - 17:30",
    },
    {
      day: "Minggu",
      teachers: ["Ust. Ahmad", "Ust. Budi", "Ust. Ibrahim", "Ustz. Fatimah"],
      time: "16:00 - 17:30",
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
              <p className="text-sm text-gray-500">Pengajar:</p>
              <ul className="space-y-2">
                {selectedSchedule.teachers.map((teacher, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {teacher}
                  </li>
                ))}
              </ul>
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
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://api.quran.gading.dev/surah");
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
        `https://api.quran.gading.dev/surah/${surahNumber}`
      );
      const data = await response.json();
      setVerses(data.data.verses);
      setSelectedSurah(data.data);
    } catch (error) {
      console.error("Error fetching verses:", error);
    }
    setLoading(false);
  };

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.transliteration.id
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      surah.name.translation.id
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      surah.number.toString().includes(searchQuery)
  );

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center p-4">
      <div className="w-8 h-8 border-4 rounded-full border-emerald-200 border-t-emerald-600 animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        Al-Qur'an Online
      </h1>

      {loading ? (
        <LoadingSpinner />
      ) : selectedSurah ? (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedSurah(null)}
            className="flex items-center px-4 py-2 mb-4 text-white rounded bg-emerald-600 hover:bg-emerald-700">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Surah
          </button>

          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-emerald-800">
              {selectedSurah.name.transliteration.id}
            </h2>
            <p className="text-gray-600">{selectedSurah.name.translation.id}</p>
            <p className="mt-2 text-sm text-gray-500">
              {selectedSurah.numberOfVerses} Ayat |{" "}
              {selectedSurah.revelation.id}
            </p>
          </div>

          <div className="space-y-6">
            {verses.map((verse) => (
              <div
                key={verse.number.inSurah}
                className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="flex items-center justify-between pb-2 mb-4 border-b">
                  <span className="flex items-center justify-center w-8 h-8 font-medium rounded-full bg-emerald-100 text-emerald-800">
                    {verse.number.inSurah}
                  </span>
                  <button className="p-2 transition-colors rounded-full hover:bg-gray-100">
                    <Volume2 className="w-5 h-5 text-emerald-600" />
                  </button>
                </div>

                <p className="mb-4 text-2xl leading-loose text-right font-arabic">
                  {verse.text.arab}
                </p>

                <p className="mb-3 italic text-gray-700">
                  {verse.text.transliteration.en}
                </p>

                <p className="text-gray-600">{verse.translation.id}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Cari surah..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSurahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => fetchSurahVerses(surah.number)}
                className="p-4 text-left transition-all bg-white rounded-lg shadow hover:shadow-lg hover:bg-emerald-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 mr-2 font-medium rounded-full bg-emerald-100 text-emerald-800">
                      {surah.number}
                    </span>
                    <span className="font-bold text-emerald-800">
                      {surah.name.transliteration.id}
                    </span>
                  </span>
                  <span className="text-sm text-gray-600">
                    {surah.numberOfVerses} ayat
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {surah.name.translation.id}
                </p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const TakjilSchedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const ramadanSchedule = [
    {
      date: "1 Ramadan",
      menu: "1 Maret 2025",
      members: ["Ibu Siti", "Ibu Aminah", "Ibu Fatimah", "Ibu Sarah"],
    },
    {
      date: "2 Ramadan",
      menu: "2 Maret 2025",
      members: ["Ibu Aisyah", "Ibu Maryam", "Ibu Khadijah", "Ibu Zahra"],
    },
    {
      date: "3 Ramadan",
      menu: "3 Maret 2025",
      members: ["Ibu Rahma", "Ibu Nur", "Ibu Halimah", "Ibu Zainab"],
    },
    {
      date: "4 Ramadan",
      menu: "4 Maret 2025",
      members: ["Ibu Hafshah", "Ibu Ruqayya", "Ibu Safiya", "Ibu Lubna"],
    },
    {
      date: "5 Ramadan",
      menu: "5 Maret 2025",
      members: ["Ahmad", "Faisal", "Ridwan", "Zaki", "Farid"],
    },
    {
      date: "6 Ramadan",
      menu: "6 Maret 2025",
      members: ["Ibu Asma", "Ibu Latifah", "Ibu Salma", "Ibu Nabila"],
    },
    {
      date: "7 Ramadan",
      menu: "7 Maret 2025",
      members: ["Bpk. Rahman", "Ibu Nur", "Ibu Dewi", "Ibu Maya"],
    },
    {
      date: "8 Ramadan",
      menu: "8 Maret 2025",
      members: ["Ibu Siti", "Ibu Aminah", "Ibu Fatimah", "Ibu Sarah"],
    },
    {
      date: "9 Ramadan",
      menu: "9 Maret 2025",
      members: ["Ibu Aisyah", "Ibu Maryam", "Ibu Khadijah", "Ibu Zahra"],
    },
    {
      date: "10 Ramadan",
      menu: "10 Maret 2025",
      members: ["Ibu Rahma", "Ibu Nur", "Ibu Halimah", "Ibu Zainab"],
    },
    {
      date: "11 Ramadan",
      menu: "11 Maret 2025",
      members: ["Ibu Hafshah", "Ibu Ruqayya", "Ibu Safiya", "Ibu Lubna"],
    },
    {
      date: "12 Ramadan",
      menu: "12 Maret 2025",
      members: ["Ahmad", "Faisal", "Ridwan", "Zaki", "Farid"],
    },
    {
      date: "13 Ramadan",
      menu: "13 Maret 2025",
      members: ["Ibu Asma", "Ibu Latifah", "Ibu Salma", "Ibu Nabila"],
    },
    {
      date: "14 Ramadan",
      menu: "14 Maret 2025",
      members: ["Bpk. Rahman", "Ibu Nur", "Ibu Dewi", "Ibu Maya"],
    },
    {
      date: "15 Ramadan",
      menu: "15 Maret 2025",
      members: ["Ibu Siti", "Ibu Aminah", "Ibu Fatimah", "Ibu Sarah"],
    },
    {
      date: "16 Ramadan",
      menu: "16 Maret 2025",
      members: ["Ibu Aisyah", "Ibu Maryam", "Ibu Khadijah", "Ibu Zahra"],
    },
    {
      date: "17 Ramadan",
      menu: "17 Maret 2025",
      members: ["Ibu Rahma", "Ibu Nur", "Ibu Halimah", "Ibu Zainab"],
    },
    {
      date: "18 Ramadan",
      menu: "18 Maret 2025",
      members: ["Ibu Hafshah", "Ibu Ruqayya", "Ibu Safiya", "Ibu Lubna"],
    },
    {
      date: "19 Ramadan",
      menu: "19 Maret 2025",
      members: ["Ahmad", "Faisal", "Ridwan", "Zaki", "Farid"],
    },
    {
      date: "20 Ramadan",
      menu: "20 Maret 2025",
      members: ["Ibu Asma", "Ibu Latifah", "Ibu Salma", "Ibu Nabila"],
    },
    {
      date: "21 Ramadan",
      menu: "21 Maret 2025",
      members: ["Bpk. Rahman", "Ibu Nur", "Ibu Dewi", "Ibu Maya"],
    },
    {
      date: "22 Ramadan",
      menu: "22 Maret 2025",
      members: ["Ibu Siti", "Ibu Aminah", "Ibu Fatimah", "Ibu Sarah"],
    },
    {
      date: "23 Ramadan",
      menu: "23 Maret 2025",
      members: ["Ibu Aisyah", "Ibu Maryam", "Ibu Khadijah", "Ibu Zahra"],
    },
    {
      date: "24 Ramadan",
      menu: "24 Maret 2025",
      members: ["Ibu Rahma", "Ibu Nur", "Ibu Halimah", "Ibu Zainab"],
    },
    {
      date: "25 Ramadan",
      menu: "25 Maret 2025",
      members: ["Ibu Hafshah", "Ibu Ruqayya", "Ibu Safiya", "Ibu Lubna"],
    },
    {
      date: "26 Ramadan",
      menu: "26 Maret 2025",
      members: ["Ahmad", "Faisal", "Ridwan", "Zaki", "Farid"],
    },
    {
      date: "27 Ramadan",
      menu: "27 Maret 2025",
      members: ["Ibu Asma", "Ibu Latifah", "Ibu Salma", "Ibu Nabila"],
    },
    {
      date: "28 Ramadan",
      menu: "28 Maret 2025",
      members: ["Bpk. Rahman", "Ibu Nur", "Ibu Dewi", "Ibu Maya"],
    },
    {
      date: "29 Ramadan",
      menu: "29 Maret 2025",
      members: ["Ibu Siti", "Ibu Aminah", "Ibu Fatimah", "Ibu Sarah"],
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
            </div>
            <div className="text-gray-600">
              <p className="text-sm">Tanggal: {schedule.menu}</p>
            </div>
          </div>
        ))}
        <div className="p-4 mt-6 rounded-lg bg-emerald-50">
          <p className="text-sm text-emerald-800">
            Catatan:
            <ul className="mt-2 ml-4 list-disc">
              <li>Takjil disediakan mulai pukul 17:00</li>
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

const KultumSchedule = () => {
  const [activeSchedule, setActiveSchedule] = useState("subuh");
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const subuhSchedule = [
    {
      date: "1 Ramadan",
      day: "1 Maret 2025",
      speaker: "Ust. Ahmad Fauzi",
      topic: "Keutamaan Puasa Ramadan",
    },
    {
      date: "2 Ramadan",
      day: "2 Maret 2025",
      speaker: "Ust. Muhammad Ridwan",
      topic: "Adab Berpuasa",
    },
    {
      date: "3 Ramadan",
      day: "3 Maret 2025",
      speaker: "Ust. Abdul Hakim",
      topic: "Membaca Al-Quran di Bulan Ramadan",
    },
    {
      date: "4 Ramadan",
      day: "4 Maret 2025",
      speaker: "Ust. Hasan Basri",
      topic: "Pentingnya Sahur",
    },
    {
      date: "5 Ramadan",
      day: "5 Maret 2025",
      speaker: "Ust. Idris Abdullah",
      topic: "Keutamaan Tarawih",
    },
    {
      date: "6 Ramadan",
      day: "6 Maret 2025",
      speaker: "Ust. Faiz Anwar",
      topic: "Menjaga Lisan saat Puasa",
    },
    {
      date: "7 Ramadan",
      day: "7 Maret 2025",
      speaker: "Ust. Ali Yusuf",
      topic: "Mendekatkan Diri kepada Allah",
    },
    {
      date: "8 Ramadan",
      day: "8 Maret 2025",
      speaker: "Ust. Rahmat Hidayat",
      topic: "Mendidik Anak di Bulan Ramadan",
    },
    {
      date: "9 Ramadan",
      day: "9 Maret 2025",
      speaker: "Ust. Nasrullah",
      topic: "Keutamaan Sedekah",
    },
    {
      date: "10 Ramadan",
      day: "10 Maret 2025",
      speaker: "Ust. Zulkifli",
      topic: "Puasa dan Kesehatan",
    },
    {
      date: "11 Ramadan",
      day: "11 Maret 2025",
      speaker: "Ust. Usman Hakim",
      topic: "Hikmah Berpuasa",
    },
    {
      date: "12 Ramadan",
      day: "12 Maret 2025",
      speaker: "Ust. Abdullah Khalid",
      topic: "Memanfaatkan Waktu di Bulan Ramadan",
    },
    {
      date: "13 Ramadan",
      day: "13 Maret 2025",
      speaker: "Ust. Burhanuddin",
      topic: "Mengenal Malam Lailatul Qadar",
    },
    {
      date: "14 Ramadan",
      day: "14 Maret 2025",
      speaker: "Ust. Syamsul Anwar",
      topic: "Puasa dan Kesabaran",
    },
    {
      date: "15 Ramadan",
      day: "15 Maret 2025",
      speaker: "Ust. Karim Abdullah",
      topic: "Zakat Fitrah dan Hikmahnya",
    },
    {
      date: "16 Ramadan",
      day: "16 Maret 2025",
      speaker: "Ust. Hadi Santoso",
      topic: "Mencintai Al-Quran",
    },
    {
      date: "17 Ramadan",
      day: "17 Maret 2025",
      speaker: "Ust. Ridho Ilahi",
      topic: "Nuzulul Quran",
    },
    {
      date: "18 Ramadan",
      day: "18 Maret 2025",
      speaker: "Ust. Lukman Hakim",
      topic: "Ibadah di Sepuluh Malam Terakhir",
    },
    {
      date: "19 Ramadan",
      day: "19 Maret 2025",
      speaker: "Ust. Faisal Rahman",
      topic: "Menggapai Lailatul Qadar",
    },
    {
      date: "20 Ramadan",
      day: "20 Maret 2025",
      speaker: "Ust. Ahmad Muzakir",
      topic: "Keutamaan Berdoa",
    },
    {
      date: "21 Ramadan",
      day: "21 Maret 2025",
      speaker: "Ust. Hamdan Alwi",
      topic: "Iktikaf di Bulan Ramadan",
    },
    {
      date: "22 Ramadan",
      day: "22 Maret 2025",
      speaker: "Ust. Fikri Harun",
      topic: "Tanda-Tanda Malam Lailatul Qadar",
    },
    {
      date: "23 Ramadan",
      day: "23 Maret 2025",
      speaker: "Ust. Anas Fauzan",
      topic: "Meningkatkan Keimanan di Ramadan",
    },
    {
      date: "24 Ramadan",
      day: "24 Maret 2025",
      speaker: "Ust. Yusuf Mahmud",
      topic: "Persiapan Zakat Fitrah",
    },
    {
      date: "25 Ramadan",
      day: "25 Maret 2025",
      speaker: "Ust. Farid Akbar",
      topic: "Memperbaiki Kualitas Ibadah",
    },
    {
      date: "26 Ramadan",
      day: "26 Maret 2025",
      speaker: "Ust. Ilham Syafii",
      topic: "Keutamaan Berbagi di Ramadan",
    },
    {
      date: "27 Ramadan",
      day: "27 Maret 2025",
      speaker: "Ust. Akmaluddin",
      topic: "Amalan Sunnah di Akhir Ramadan",
    },
    {
      date: "28 Ramadan",
      day: "28 Maret 2025",
      speaker: "Ust. Hafiz Ramli",
      topic: "Menyambut Idul Fitri dengan Iman",
    },
    {
      date: "29 Ramadan",
      day: "29 Maret 2025",
      speaker: "Ust. Rizal Hakim",
      topic: "Istiqamah Setelah Ramadan",
    },
  ];

  const isyaSchedule = [
    {
      date: "1 Ramadan",
      day: "1 Maret 2025",
      speaker: "Ust. Ahmad Fauzi",
      topic: "Keutamaan Puasa Ramadan",
    },
    {
      date: "2 Ramadan",
      day: "2 Maret 2025",
      speaker: "Ust. Muhammad Ridwan",
      topic: "Adab Berpuasa",
    },
    {
      date: "3 Ramadan",
      day: "3 Maret 2025",
      speaker: "Ust. Abdul Hakim",
      topic: "Membaca Al-Quran di Bulan Ramadan",
    },
    {
      date: "4 Ramadan",
      day: "4 Maret 2025",
      speaker: "Ust. Hasan Basri",
      topic: "Pentingnya Sahur",
    },
    {
      date: "5 Ramadan",
      day: "5 Maret 2025",
      speaker: "Ust. Idris Abdullah",
      topic: "Keutamaan Tarawih",
    },
    {
      date: "6 Ramadan",
      day: "6 Maret 2025",
      speaker: "Ust. Faiz Anwar",
      topic: "Menjaga Lisan saat Puasa",
    },
    {
      date: "7 Ramadan",
      day: "7 Maret 2025",
      speaker: "Ust. Ali Yusuf",
      topic: "Mendekatkan Diri kepada Allah",
    },
    {
      date: "8 Ramadan",
      day: "8 Maret 2025",
      speaker: "Ust. Rahmat Hidayat",
      topic: "Mendidik Anak di Bulan Ramadan",
    },
    {
      date: "9 Ramadan",
      day: "9 Maret 2025",
      speaker: "Ust. Nasrullah",
      topic: "Keutamaan Sedekah",
    },
    {
      date: "10 Ramadan",
      day: "10 Maret 2025",
      speaker: "Ust. Zulkifli",
      topic: "Puasa dan Kesehatan",
    },
    {
      date: "11 Ramadan",
      day: "11 Maret 2025",
      speaker: "Ust. Usman Hakim",
      topic: "Hikmah Berpuasa",
    },
    {
      date: "12 Ramadan",
      day: "12 Maret 2025",
      speaker: "Ust. Abdullah Khalid",
      topic: "Memanfaatkan Waktu di Bulan Ramadan",
    },
    {
      date: "13 Ramadan",
      day: "13 Maret 2025",
      speaker: "Ust. Burhanuddin",
      topic: "Mengenal Malam Lailatul Qadar",
    },
    {
      date: "14 Ramadan",
      day: "14 Maret 2025",
      speaker: "Ust. Syamsul Anwar",
      topic: "Puasa dan Kesabaran",
    },
    {
      date: "15 Ramadan",
      day: "15 Maret 2025",
      speaker: "Ust. Karim Abdullah",
      topic: "Zakat Fitrah dan Hikmahnya",
    },
    {
      date: "16 Ramadan",
      day: "16 Maret 2025",
      speaker: "Ust. Hadi Santoso",
      topic: "Mencintai Al-Quran",
    },
    {
      date: "17 Ramadan",
      day: "17 Maret 2025",
      speaker: "Ust. Ridho Ilahi",
      topic: "Nuzulul Quran",
    },
    {
      date: "18 Ramadan",
      day: "18 Maret 2025",
      speaker: "Ust. Lukman Hakim",
      topic: "Ibadah di Sepuluh Malam Terakhir",
    },
    {
      date: "19 Ramadan",
      day: "19 Maret 2025",
      speaker: "Ust. Faisal Rahman",
      topic: "Menggapai Lailatul Qadar",
    },
    {
      date: "20 Ramadan",
      day: "20 Maret 2025",
      speaker: "Ust. Ahmad Muzakir",
      topic: "Keutamaan Berdoa",
    },
    {
      date: "21 Ramadan",
      day: "21 Maret 2025",
      speaker: "Ust. Hamdan Alwi",
      topic: "Iktikaf di Bulan Ramadan",
    },
    {
      date: "22 Ramadan",
      day: "22 Maret 2025",
      speaker: "Ust. Fikri Harun",
      topic: "Tanda-Tanda Malam Lailatul Qadar",
    },
    {
      date: "23 Ramadan",
      day: "23 Maret 2025",
      speaker: "Ust. Anas Fauzan",
      topic: "Meningkatkan Keimanan di Ramadan",
    },
    {
      date: "24 Ramadan",
      day: "24 Maret 2025",
      speaker: "Ust. Yusuf Mahmud",
      topic: "Persiapan Zakat Fitrah",
    },
    {
      date: "25 Ramadan",
      day: "25 Maret 2025",
      speaker: "Ust. Farid Akbar",
      topic: "Memperbaiki Kualitas Ibadah",
    },
    {
      date: "26 Ramadan",
      day: "26 Maret 2025",
      speaker: "Ust. Ilham Syafii",
      topic: "Keutamaan Berbagi di Ramadan",
    },
    {
      date: "27 Ramadan",
      day: "27 Maret 2025",
      speaker: "Ust. Akmaluddin",
      topic: "Amalan Sunnah di Akhir Ramadan",
    },
    {
      date: "28 Ramadan",
      day: "28 Maret 2025",
      speaker: "Ust. Hafiz Ramli",
      topic: "Menyambut Idul Fitri dengan Iman",
    },
    {
      date: "29 Ramadan",
      day: "29 Maret 2025",
      speaker: "Ust. Rizal Hakim",
      topic: "Istiqamah Setelah Ramadan",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        Jadwal Kultum Ramadan
      </h1>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveSchedule("subuh")}
          className={`px-6 py-2 font-medium rounded-lg transition-colors ${
            activeSchedule === "subuh"
              ? "bg-emerald-600 text-white"
              : "bg-white text-emerald-600 hover:bg-emerald-50"
          }`}>
          Kultum Subuh
        </button>
        <button
          onClick={() => setActiveSchedule("isya")}
          className={`px-6 py-2 font-medium rounded-lg transition-colors ${
            activeSchedule === "isya"
              ? "bg-emerald-600 text-white"
              : "bg-white text-emerald-600 hover:bg-emerald-50"
          }`}>
          Kultum Isya
        </button>
      </div>

      {/* Schedule List */}
      <div className="max-w-2xl mx-auto">
        {(activeSchedule === "subuh" ? subuhSchedule : isyaSchedule).map(
          (schedule, index) => (
            <div
              key={index}
              onClick={() => setSelectedSchedule(schedule)}
              className="p-4 mb-4 transition-all bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-700">
                  {schedule.date}
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800">
                  {activeSchedule === "subuh" ? "04:30" : "19:30"} WIB
                </span>
              </div>
              <div className="text-gray-600">
                <p className="text-sm">Tanggal: {schedule.day}</p>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  {schedule.speaker}
                </p>
              </div>
            </div>
          )
        )}

        <div className="p-4 mt-6 rounded-lg bg-emerald-50">
          <p className="text-sm text-emerald-800">
            Catatan:
            <ul className="mt-2 ml-4 list-disc">
              <li>Kultum Subuh dimulai setelah sholat Subuh berjamaah</li>
              <li>Kultum Isya dimulai setelah sholat Tarawih</li>
              <li>Durasi kultum sekitar 7-10 menit</li>
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
                Detail Kultum
              </h2>
              <button
                onClick={() => setSelectedSchedule(null)}
                className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Pemateri:</p>
                <p className="mt-1 font-medium text-gray-800">
                  {selectedSchedule.speaker}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tema:</p>
                <p className="mt-1 font-medium text-gray-800">
                  {selectedSchedule.topic}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Waktu:</p>
                <p className="mt-1 font-medium text-gray-800">
                  {activeSchedule === "subuh" ? "04:30" : "19:30"} WIB
                </p>
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {/* Marquee Text */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <div className="py-1 overflow-hidden text-white bg-emerald-600 whitespace-nowrap">
              <div className="inline-block animate-[marquee_20s_linear_infinite]">
                Selamat datang di website Masjid AL-HUDA Tegalrejo No.Rt. 066,
                Srigading, Kec. Sanden, Kabupaten Bantul, Daerah Istimewa
                Yogyakarta. &nbsp;
              </div>
              <div className="inline-block animate-[marquee_20s_linear_infinite]">
                Selamat datang di website Masjid AL-HUDA Tegalrejo No.Rt. 066,
                Srigading, Kec. Sanden, Kabupaten Bantul, Daerah Istimewa
                Yogyakarta. &nbsp;
              </div>
            </div>

            {/* Navigation */}
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

              {/* Fullscreen Mobile Menu */}
              <div
                className={`fixed top-0 right-0 h-screen w-full md:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ paddingTop: "104px" }}>
                <div className="px-6 pt-6 pb-8 space-y-4">
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-600 hover:pl-4">
                    Beranda
                  </Link>
                  <Link
                    to="/tpa-schedule"
                    onClick={handleLinkClick}
                    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-600 hover:pl-4">
                    Jadwal TPA
                  </Link>
                  <Link
                    to="/takjil"
                    onClick={handleLinkClick}
                    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-600 hover:pl-4">
                    Jadwal Takjil
                  </Link>
                  <Link
                    to="/kultum"
                    onClick={handleLinkClick}
                    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-600 hover:pl-4">
                    Jadwal Kultum
                  </Link>
                  <Link
                    to="/quran"
                    onClick={handleLinkClick}
                    className="block py-3 text-lg font-medium text-gray-700 transition-all duration-300 border-b border-gray-100 hover:text-emerald-600 hover:pl-4">
                    Al-Qur'an Online
                  </Link>
                </div>
              </div>

              {/* Overlay when menu is open */}
              {isOpen && <div onClick={() => setIsOpen(false)} />}
            </nav>
          </div>

          {/* Main Content */}
          <div className="pt-[104px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tpa-schedule" element={<TPASchedule />} />
              <Route path="/quran" element={<QuranOnline />} />
              <Route path="/takjil" element={<TakjilSchedule />} />
              <Route path="/kultum" element={<KultumSchedule />} />
            </Routes>
          </div>

          {/* Footer */}
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
                    Tegalrejo No.Rt. 066, Srigading, Kec. Sanden, Kabupaten
                    Bantul, Daerah Istimewa Yogyakarta
                  </p>
                </div>
              </div>
              <div className="mt-6 text-sm text-center text-emerald-400">
                © 2025 Masjid AL-HUDA. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
