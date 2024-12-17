import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpierd] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  function handleStartChallenge() {
    setTimerRunning(true);
    setTimeout(() => {
      setTimerExpierd(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>you lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStartChallenge}>
          {timerRunning ? "stop" : "start"} challenge
        </button>
      </p>
      <p className={timerRunning ? "active" : undefined}>
        {timerRunning ? "time is running" : "time is up"}{" "}
      </p>
    </section>
  );
}
