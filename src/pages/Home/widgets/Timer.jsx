import React, { useState } from "react";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleHoursChange = (e) => {
    setHours(parseInt(e.target.value, 10));
  };

  const handleMinutesChange = (e) => {
    setMinutes(parseInt(e.target.value, 10));
  };

  const handleSecondsChange = (e) => {
    setSeconds(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;

    const intervalId = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        setTimer(null);
        return;
      }

      setTimer(remainingSeconds);
      remainingSeconds--;
    }, 1000);
  };

  return (
    
      <form onSubmit={handleSubmit} className="card timer-card">
        <label>
          Hours:
          <input type="number" value={hours} onChange={handleHoursChange} />
        </label>
        <label>
          Minutes:
          <input type="number" value={minutes} onChange={handleMinutesChange} />
        </label>
        <label>
          Seconds:
          <input type="number" value={seconds} onChange={handleSecondsChange} />
        </label>
        <label>timer: {Math.floor(timer/3600)}</label>
        <button type="submit">Start Timer</button>
      </form>
      
  );
}

export default Timer;