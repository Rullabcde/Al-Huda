import React, { useState } from "react";
import { X, Calendar, Clock, Users, Info } from "lucide-react";
import { ramadanSchedule } from "../data/ramadanSchedule";

const TakjilSchedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchedule = ramadanSchedule.filter(
    (schedule) =>
      schedule.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.members.some((member) =>
        member.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center text-emerald-800">
            Jadwal Pembuat Takjil Ramadan 1446H
          </h1>

          {/* Search Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Cari berdasarkan tanggal atau nama..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredSchedule.map((schedule, index) => (
            <div
              key={index}
              className="p-4 transition-all bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:border-emerald-500"
              onClick={() => setSelectedSchedule(schedule)}>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 text-sm font-medium rounded-full text-emerald-700 bg-emerald-100">
                  {schedule.date}
                </span>
                <span className="text-sm text-gray-500">{schedule.menu}</span>
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{schedule.members.length} Anggota</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Box */}
        <div className="p-4 mt-6 rounded-lg bg-emerald-50">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 mt-1 text-emerald-700" />
            <div>
              <h3 className="mb-2 font-semibold text-emerald-800">
                Catatan Penting:
              </h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Takjil disediakan mulai pukul 17:00
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Perkiraan porsi 100 orang
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Harap hadir 2 jam sebelum waktu penyajian
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-emerald-800">
                Detail Jadwal Takjil
              </h2>
              <button
                onClick={() => setSelectedSchedule(null)}
                className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-50">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-emerald-700" />
                  <span className="font-medium text-emerald-800">
                    {selectedSchedule.date} - {selectedSchedule.menu}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium text-gray-700">Anggota Tim:</h3>
                <ul className="space-y-2">
                  {selectedSchedule.members.map((member, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 p-2 text-gray-800 rounded-lg bg-gray-50">
                      <Users className="w-4 h-4 text-emerald-600" />
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedSchedule.menuItems && (
                <div>
                  <h3 className="mb-2 font-medium text-gray-700">
                    Menu Takjil:
                  </h3>
                  <ul className="space-y-2">
                    {selectedSchedule.menuItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 p-2 text-gray-800 rounded-lg bg-gray-50">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakjilSchedule;
