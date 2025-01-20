import { useState } from "react";
import { subuhSchedule, isyaSchedule } from "../data/kultumData";

export const useKultumSchedule = () => {
  const [activeSchedule, setActiveSchedule] = useState("subuh");
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const currentSchedule =
    activeSchedule === "subuh" ? subuhSchedule : isyaSchedule;
  const scheduleTime = activeSchedule === "subuh" ? "04:30" : "19:30";

  return {
    activeSchedule,
    setActiveSchedule,
    selectedSchedule,
    setSelectedSchedule,
    currentSchedule,
    scheduleTime,
  };
};
