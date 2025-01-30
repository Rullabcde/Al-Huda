const ScheduleCard = ({ schedule, activeSchedule, onClick }) => {
  const getScheduleTime = () => {
    switch (activeSchedule) {
      case "subuh":
        return "04:30";
      case "isya":
        return "19:30";
      case "bukabersama":
        return "17:30";
      default:
        return "04:30";
    }
  };

  return (
    <div
      onClick={onClick}
      className="p-4 mb-4 transition-all bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-emerald-700">{schedule.date}</span>
        <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-800">
          {getScheduleTime()} WIB
        </span>
      </div>
      <div className="text-gray-600">
        <p className="text-sm">Tanggal: {schedule.day}</p>
        <p className="mt-1 text-sm font-medium text-emerald-600">
          {schedule.speaker}
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
