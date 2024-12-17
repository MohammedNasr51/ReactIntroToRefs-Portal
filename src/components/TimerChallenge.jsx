import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerExpired, setTimerExpierd] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  function handleStartChallenge() {
    setTimerRunning(true);
    timer.current = setTimeout(() => {
      setTimerExpierd(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }
  function handleStopTimer() {
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} result={"lost"} targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>you lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerRunning ? handleStopTimer : handleStartChallenge}
          >
            {timerRunning ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timerRunning ? "active" : undefined}>
          {timerRunning ? "time is running" : "time is up"}
        </p>
      </section>
    </>
  );
}

// another use of useRef that if i have a value that i need to manage it in the component but i don't want to re-render the component when this value changes i can use the useRef hook to store this value and i can access it easely without re-rendering the component

//knowing that if this value has a direct effect on the UI i should use the useState hook instead of the useRef hook
