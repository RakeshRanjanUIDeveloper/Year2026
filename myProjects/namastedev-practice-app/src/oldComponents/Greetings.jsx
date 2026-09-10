import React, { useEffect, useState } from "react";

const Greetings = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); 
  }, []);

  const hour = time.getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon! 🌤️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening! 🌆";
  } else {
    greeting = "Good Night! 🌙✨";
  }

  return (
    <div className="greeting-container">
      <div className="time-card">
        <h2 data-testid="greeting">{greeting}</h2>
        <p data-testid="time">
          {time
            .toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })
            .replace(" ", "")}
        </p>
      </div>
    </div>
  );
};

export default Greetings;
