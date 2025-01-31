import React, { useEffect } from "react";
import { useQuran } from "../hooks/useQuran";
import { ChevronLeft, Search, Volume2 } from "lucide-react";

const QuranOnline = () => {
  const {
    surahs,
    selectedSurah,
    verses,
    loading,
    searchQuery,
    setSearchQuery,
    setSelectedSurah,
    fetchSurahVerses,
    filteredSurahs,
  } = useQuran();

  // Effect to scroll to top when selectedSurah changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedSurah]);

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

export default QuranOnline;
