const ScheduleToggle = ({ activeSchedule, setActiveSchedule }) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      <button
        onClick={() => setActiveSchedule("subuh")}
        className={`px-4 py-2 rounded ${
          activeSchedule === "subuh"
            ? "bg-emerald-600 text-white"
            : "bg-white text-emerald-600 border border-emerald-600"
        }`}>
        Subuh
      </button>
      <button
        onClick={() => setActiveSchedule("isya")}
        className={`px-4 py-2 rounded ${
          activeSchedule === "isya"
            ? "bg-emerald-600 text-white"
            : "bg-white text-emerald-600 border border-emerald-600"
        }`}>
        Tarawih
      </button>
      <button
        onClick={() => setActiveSchedule("bukabersama")}
        className={`px-4 py-2 rounded ${
          activeSchedule === "bukabersama"
            ? "bg-emerald-600 text-white"
            : "bg-white text-emerald-600 border border-emerald-600"
        }`}>
        Buka Bersama
      </button>
    </div>
  );
};

export default ScheduleToggle;
