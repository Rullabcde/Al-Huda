// import React, { useState } from "react";
// import { X, Clock, Users, Book, Calendar } from "lucide-react";
// import { scheduleData } from "../data/tpaSchedule";

// const TPASchedule = () => {
//   const [selectedSchedule, setSelectedSchedule] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredSchedule = scheduleData.filter(
//     (schedule) =>
//       schedule.day.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       schedule.teachers.some((teacher) =>
//         teacher.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );

//   return (
//     <div className="min-h-screen p-4 bg-gray-50">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="mb-6 text-2xl font-bold text-center text-emerald-800">
//           Jadwal Pengajar TPA
//         </h1>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Cari berdasarkan hari atau nama pengajar..."
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Schedule Cards */}
//         <div className="space-y-4">
//           {filteredSchedule.map((schedule) => (
//             <div
//               key={schedule.day}
//               onClick={() => setSelectedSchedule(schedule)}
//               className="p-4 transition-all bg-white border rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border-emerald-500">
//               <div className="flex flex-col space-y-2">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <Calendar className="w-5 h-5 text-emerald-600" />
//                     <h3 className="font-bold text-emerald-700">
//                       {schedule.day}
//                     </h3>
//                   </div>
//                   <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800">
//                     {schedule.time}
//                   </span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Users className="w-4 h-4 mr-2" />
//                   {schedule.teachers.length} Pengajar
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Notes Section */}
//         <div className="p-4 mt-6 rounded-lg bg-emerald-50">
//           <h3 className="mb-3 font-semibold text-emerald-800">
//             Informasi Penting:
//           </h3>
//           <ul className="space-y-2 text-sm text-emerald-700">
//             <li className="flex items-center gap-2">
//               <Clock className="w-4 h-4" />
//               Harap datang 15 menit sebelum jadwal
//             </li>
//             <li className="flex items-center gap-2">
//               <Book className="w-4 h-4" />
//               Membawa Al-Qur'an dan alat tulis
//             </li>
//             <li className="flex items-center gap-2">
//               <Users className="w-4 h-4" />
//               Berbusana muslim/muslimah
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Detail Modal */}
//       {selectedSchedule && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-bold text-emerald-800">
//                 Detail Jadwal {selectedSchedule.day}
//               </h2>
//               <button
//                 onClick={() => setSelectedSchedule(null)}
//                 className="p-1 rounded-full hover:bg-gray-100">
//                 <X className="w-6 h-6 text-gray-500" />
//               </button>
//             </div>

//             <div className="space-y-6">
//               {/* Time Section */}
//               <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50">
//                 <Clock className="w-5 h-5 text-emerald-600" />
//                 <span className="font-medium text-emerald-800">
//                   {selectedSchedule.time}
//                 </span>
//               </div>

//               {/* Teachers Section */}
//               <div>
//                 <h3 className="flex items-center gap-2 mb-3 font-medium text-gray-700">
//                   <Users className="w-5 h-5 text-emerald-600" />
//                   Pengajar:
//                 </h3>
//                 <ul className="space-y-2">
//                   {selectedSchedule.teachers.map((teacher, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center gap-2 p-2 text-gray-800 rounded-lg bg-gray-50">
//                       <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
//                       {teacher}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Subjects Section */}
//               {selectedSchedule.subjects && (
//                 <div>
//                   <h3 className="flex items-center gap-2 mb-3 font-medium text-gray-700">
//                     <Book className="w-5 h-5 text-emerald-600" />
//                     Mata Pelajaran:
//                   </h3>
//                   <ul className="space-y-2">
//                     {selectedSchedule.subjects.map((subject, index) => (
//                       <li
//                         key={index}
//                         className="flex items-center gap-2 p-2 text-gray-800 rounded-lg bg-gray-50">
//                         <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
//                         {subject}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TPASchedule;

import React from "react";
import { Construction } from "lucide-react";

const TPASchedule = () => {
  return (
    <div className="p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-emerald-800">
            Jadwal Pengajar TPA
          </h1>

          <div className="flex justify-center mb-6">
            <Construction className="w-16 h-16 text-emerald-600 animate-pulse" />
          </div>

          <h2 className="mb-4 text-xl font-semibold text-emerald-700">
            Segera Hadir
          </h2>

          <p className="mb-6 text-gray-600">
            Halaman ini sedang dalam perbaikan untuk memberikan pengalaman yang
            lebih baik. Silakan kembali dalam waktu dekat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TPASchedule;
