import React, { useRef, useState, useCallback } from "react";
import { useCarousel } from "../hooks/useCarousel";
import { eventsData } from "../data/eventsData";

const UpcomingEvents = () => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
    eventsData.length
  );

  // Touch handling
  const [touchStart, setTouchStart] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (!touchStart) return;
      const distance = touchStart - e.changedTouches[0].clientX;
      if (distance > minSwipeDistance) nextSlide();
      if (distance < -minSwipeDistance) prevSlide();
      setTouchStart(null);
    },
    [touchStart, nextSlide, prevSlide]
  );

  // Mouse drag handling
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const onMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const distance = startX - e.pageX;
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) nextSlide();
        else prevSlide();
        setIsDragging(false);
      }
    },
    [isDragging, startX, nextSlide, prevSlide]
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  return (
    <div className="py-4 bg-emerald-700">
      <div className="px-4 mx-auto max-w-7xl">
        <div
          ref={sliderRef}
          className="relative overflow-hidden rounded-lg select-none cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${eventsData.length * 100}%`,
            }}>
            {eventsData.map((event) => (
              <div key={event.id} className="flex-shrink-0 w-full px-2">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="relative w-1/3 h-1/3 md:h-72">
                    <img
                      src={event.image.replace(".jpg", ".webp")}
                      alt={event.title}
                      width="800"
                      height="450"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white">
                        {event.title}
                      </h3>
                      <div className="flex items-center mt-1 space-x-2 text-sm text-emerald-200">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots with improved touch targets */}
          <div className="absolute bottom-0 flex items-center justify-center -translate-x-1/2 left-1/2">
            {eventsData.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className="relative p-4 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
                onClick={() => goToSlide(index)}>
                <span
                  className={`block h-2 transition-all ${
                    currentIndex === index
                      ? "w-6 bg-white"
                      : "w-2 bg-emerald-300 group-hover:bg-white/80"
                  } rounded-full`}
                />
                <span className="absolute inset-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
