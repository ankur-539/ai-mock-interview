import { useEffect, useState } from "react";

function Timer() {

  const [time, setTime] = useState(600);

  useEffect(() => {

    const interval = setInterval(() => {

      setTime((prev) => {

        if (prev <= 1) {

          clearInterval(interval);

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <h2 className="text-red-600 font-bold">
      ⏱️ {time}s
    </h2>
  );
}

export default Timer;