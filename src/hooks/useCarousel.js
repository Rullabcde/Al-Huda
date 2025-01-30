import { useState } from "react";

export const useCarousel = (itemsLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === itemsLength - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? itemsLength - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};
