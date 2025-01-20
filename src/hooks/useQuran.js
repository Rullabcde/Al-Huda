import { useState, useEffect } from "react";

// Custom hook for fetching Quran data
export const useQuran = () => {
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

  return {
    surahs,
    selectedSurah,
    verses,
    loading,
    searchQuery,
    setSearchQuery,
    setSelectedSurah, // Make sure to return setSelectedSurah
    fetchSurahVerses,
    filteredSurahs,
  };
};
