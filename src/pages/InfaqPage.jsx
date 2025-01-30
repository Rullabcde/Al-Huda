import React from "react";
import { Wallet, Users, TrendingUp, CreditCard } from "lucide-react";
import { useInfaq } from "../hooks/useInfaq";

const InfaqPage = () => {
  const {
    totalInfaq,
    totalDonors,
    dailyStats,
    bankAccounts,
    loading,
    formatCurrency,
  } = useInfaq();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="mx-auto space-y-8 max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-emerald-800">
            Infaq Ramadhan
          </h1>
          <p className="text-gray-600">
            Mari berbagi kebaikan di bulan yang penuh berkah
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-emerald-100">
                <Wallet className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Infaq Terkumpul</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {formatCurrency(totalInfaq)}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Donatur</p>
                <p className="text-2xl font-bold text-blue-600">
                  {totalDonors} Orang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Statistics */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-100">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <TrendingUp className="w-5 h-5" />
              Infaq Harian
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {dailyStats.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-0">
                  <div>
                    <p className="font-medium">{day.date}</p>
                    <p className="text-sm text-gray-600">
                      {day.donors} Donatur
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-emerald-600">
                      {day.formattedAmount}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total: {day.formattedRunningTotal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bank Information */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-100">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <CreditCard className="w-5 h-5" />
              Informasi Rekening
            </h2>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {bankAccounts.map((account, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50">
                  <p className="font-semibold text-gray-900">{account.bank}</p>
                  <p className="mt-1 font-mono text-lg">
                    {account.accountNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    a.n. {account.accountName}
                  </p>
                </div>
              ))}
              <div className="mt-4 text-sm text-gray-600">
                <p>Konfirmasi transfer dapat menghubungi:</p>
                <p className="mt-1 font-medium">WhatsApp: +62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfaqPage;
