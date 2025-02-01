import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 5;

  const images = [
    {
      src: "/pict1.webp",
      alt: "Foto 1",
      caption: "Pengajian Akbar Ramadhan",
    },
    {
      src: "/pict2.webp",
      alt: "Foto 2",
      caption: "Buka Puasa Bersama",
    },
    {
      src: "/pict3.webp",
      alt: "Foto 3",
      caption: "Kegiatan Mengaji Anak-anak TPA",
    },
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Get current page's images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        Galeri Masjid
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md group hover:shadow-lg hover:scale-[1.02]">
              <div className="aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80">
                <p className="text-sm font-medium text-center">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}>
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  aria-label={`Page ${index + 1}`}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`w-8 h-8 rounded-lg transition-colors ${
                    currentPage === index + 1
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-emerald-600 hover:bg-emerald-50"
                  }`}>
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`p-2 rounded-lg transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
