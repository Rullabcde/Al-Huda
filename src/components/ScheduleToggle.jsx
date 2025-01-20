const ScheduleToggle = ({ activeSchedule, setActiveSchedule }) => (
  <div className="flex justify-center gap-4 mb-6">
    <button
      onClick={() => setActiveSchedule("subuh")}
      className={`px-6 py-2 font-medium rounded-lg transition-colors ${
        activeSchedule === "subuh"
          ? "bg-emerald-600 text-white"
          : "bg-white text-emerald-600 hover:bg-emerald-50"
      }`}>
      Kultum Subuh
    </button>
    <button
      onClick={() => setActiveSchedule("isya")}
      className={`px-6 py-2 font-medium rounded-lg transition-colors ${
        activeSchedule === "isya"
          ? "bg-emerald-600 text-white"
          : "bg-white text-emerald-600 hover:bg-emerald-50"
      }`}>
      Kultum Isya
    </button>
  </div>
);

export default ScheduleToggle;
