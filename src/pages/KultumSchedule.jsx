import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      x: 20,
      opacity: 0,
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <motion.h1
        className="mb-6 text-2xl font-bold text-center text-emerald-800"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        key={activeSchedule}>
        {getScheduleTitle()}
      </motion.h1>

      <ScheduleToggle
        activeSchedule={activeSchedule}
        setActiveSchedule={setActiveSchedule}
      />

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSchedule}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            {currentSchedule.map((schedule, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ScheduleCard
                  schedule={schedule}
                  activeSchedule={activeSchedule}
                  onClick={() => setSelectedSchedule(schedule)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScheduleNotes />
      </div>

      <AnimatePresence>
        {selectedSchedule && (
          <ScheduleModal
            schedule={selectedSchedule}
            activeSchedule={activeSchedule}
            onClose={() => setSelectedSchedule(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default KultumSchedule;
