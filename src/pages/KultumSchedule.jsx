import React from "react";
import { useKultumSchedule } from "../hooks/useKultumSchedule";
import ScheduleToggle from "../components/ScheduleToggle";
import ScheduleCard from "../components/ScheduleCard";
import ScheduleModal from "../components/ScheduleModal";
import ScheduleNotes from "../components/ScheduleNotes";

const KultumSchedule = () => {
  const {
    activeSchedule,
    setActiveSchedule,
    selectedSchedule,
    setSelectedSchedule,
    currentSchedule,
  } = useKultumSchedule();

  const getScheduleTitle = () => {
    switch (activeSchedule) {
      case "subuh":
        return "Jadwal Kultum Subuh";
      case "isya":
        return "Jadwal Kultum Tarawih";
      case "bukabersama":
        return "Jadwal Kultum Buka Bersama";
      default:
        return "Jadwal Kultum Ramadan";
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
        {getScheduleTitle()}
      </h1>

      <ScheduleToggle
        activeSchedule={activeSchedule}
        setActiveSchedule={setActiveSchedule}
      />

      <div className="max-w-2xl mx-auto">
        {currentSchedule.map((schedule, index) => (
          <ScheduleCard
            key={index}
            schedule={schedule}
            activeSchedule={activeSchedule}
            onClick={() => setSelectedSchedule(schedule)}
          />
        ))}

        <ScheduleNotes />
      </div>

      {selectedSchedule && (
        <ScheduleModal
          schedule={selectedSchedule}
          activeSchedule={activeSchedule}
          onClose={() => setSelectedSchedule(null)}
        />
      )}
    </div>
  );
};

export default KultumSchedule;
