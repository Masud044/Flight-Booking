import { useState, useEffect } from 'react';

export const useCountdown = (initialTime = 120) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const resetCountdown = () => setTime(initialTime);

  return { time, resetCountdown };
};
