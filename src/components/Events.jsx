import React, { useRef, useState } from "react";
import { useCarousel } from "../hooks/useCarousel";
import { eventsData } from "../data/eventsData";

const UpcomingEvents = () => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
    eventsData.length
  );

  // Touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse drag handling
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.pageX;
    const difference = startX - currentX;

    if (Math.abs(difference) > minSwipeDistance) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="py-4 bg-emerald-600">
      <div className="px-4 mx-auto max-w-7xl">
        <div
          ref={sliderRef}
          className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
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
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full" // Perubahan di sini
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

          {/* Navigation dots */}
          <div className="absolute flex justify-center space-x-2 -translate-x-1/2 bottom-4 left-1/2">
            {eventsData.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-4 bg-white"
                    : "w-1.5 bg-emerald-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
