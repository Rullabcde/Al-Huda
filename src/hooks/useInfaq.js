import { useState, useEffect } from "react";
import { dailyInfaq, bankAccounts } from "../data/infaqData";

export const useInfaq = () => {
  const [totalInfaq, setTotalInfaq] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [dailyStats, setDailyStats] = useState(dailyInfaq);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  useEffect(() => {
    const total = dailyInfaq.reduce((sum, day) => sum + day.amount, 0);
    const donors = dailyInfaq.reduce((sum, day) => sum + day.donors, 0);

    let runningTotal = 0;
    const processedStats = dailyInfaq.map((day) => {
      runningTotal += day.amount;
      return {
        ...day,
        runningTotal,
        formattedAmount: formatCurrency(day.amount),
        formattedRunningTotal: formatCurrency(runningTotal),
      };
    });

    setTotalInfaq(total);
    setTotalDonors(donors);
    setDailyStats(processedStats);
  }, []);

  return {
    totalInfaq,
    totalDonors,
    dailyStats,
    bankAccounts,
    formatCurrency,
  };
};
