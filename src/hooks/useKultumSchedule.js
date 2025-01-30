import { useState, useMemo } from "react";
import {
  subuhSchedule,
  isyaSchedule,
  bukabersamaSchedule,
} from "../data/kultumData";

export const useKultumSchedule = () => {
  const [activeSchedule, setActiveSchedule] = useState("subuh");
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const currentSchedule = useMemo(() => {
    switch (activeSchedule) {
      case "subuh":
        return subuhSchedule;
      case "isya":
        return isyaSchedule;
      case "bukabersama":
        return bukabersamaSchedule;
      default:
        return subuhSchedule;
    }
  }, [activeSchedule]);

  return {
    activeSchedule,
    setActiveSchedule,
    selectedSchedule,
    setSelectedSchedule,
    currentSchedule,
  };
};
