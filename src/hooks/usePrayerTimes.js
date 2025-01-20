import { useState, useEffect } from "react";

export const usePrayerTimes = () => {
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

  return prayerTimes;
};
