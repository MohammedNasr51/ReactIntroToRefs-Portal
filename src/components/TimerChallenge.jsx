import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  let timerIsAtive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    clearInterval(targetTime * 1000);
  }

  function handleStartChallenge() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  function handleStopTimer() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerIsAtive ? handleStopTimer : handleStartChallenge}
          >
            {timerIsAtive ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timerIsAtive ? "active" : undefined}>
          {timerIsAtive ? "time is running" : "time is up"}
        </p>
      </section>
    </>
  );
}

// another use of useRef that if i have a value that i need to manage it in the component but i don't want to re-render the component when this value changes i can use the useRef hook to store this value and i can access it easely without re-rendering the component

//knowing that if this value has a direct effect on the UI i should use the useState hook instead of the useRef hook

//then i wanted to make the modal appears when i stop the timer or when the time is up so i used setInterval with just 10 milliseconds to make the timer more accurate and decrement the time remaining by 10 milliseconds every time the interval is called and when the time is up i clear the interval and open the modal and when i stop it by my self now i have the value that i need to pass to the modal so i passed it as a prop to the modal component and i used the ref hook to refer to the modal and open it when the time is up or when i stop the timer by my self
