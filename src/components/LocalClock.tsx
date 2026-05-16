import { useEffect, useState } from "react";

function getBandungTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function LocalClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState(getBandungTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(getBandungTime()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={"font-mono tabular-nums " + className}>
      {time}
      <span className="ml-1 text-ink-200 dark:text-ink-300">WIB</span>
    </span>
  );
}
