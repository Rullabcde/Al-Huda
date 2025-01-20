import React from "react";
import { X } from "lucide-react";

const ScheduleModal = ({ schedule, activeSchedule, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-emerald-800">Detail Kultum</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100">
          <X className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Pemateri:</p>
          <p className="mt-1 font-medium text-gray-800">{schedule.speaker}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Tema:</p>
          <p className="mt-1 font-medium text-gray-800">{schedule.topic}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Waktu:</p>
          <p className="mt-1 font-medium text-gray-800">
            {activeSchedule === "subuh" ? "04:30" : "19:30"} WIB
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ScheduleModal;
