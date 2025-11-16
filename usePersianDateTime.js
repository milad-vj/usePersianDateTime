"use client";
import { useEffect, useState } from "react";

export function usePersianDateTime() {
  const [dateText, setDateText] = useState("");
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();

      const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const timeFormatter = new Intl.DateTimeFormat("fa-IR", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      setDateText(dateFormatter.format(now));
      setTimeText(timeFormatter.format(now));
    }

    update(); 
    const interval = setInterval(update, 1000); 

    return () => clearInterval(interval);
  }, []);

  return { dateText, timeText };
}
