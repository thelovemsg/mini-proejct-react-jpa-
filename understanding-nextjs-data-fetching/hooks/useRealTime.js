import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function useRealTime() {
  const [realTime, setRealTime] = useState(format(new Date(), "kk:mm:ss O"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRealTime(format(new Date(), "kk:mm:ss O"));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return realTime;
}
