import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>you {result}</h2>
      <p>
        Target time: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer in: <strong>X seconds</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;

//now i wanted to refer to an element inside another component so i imported the 'forwarded' function to rap the component inside it and pass the ref parameter to be able to use it freely

// the dialog is a built in html element that is used to create a modal window that is used to display messages to the user and it is hidden by default and it is shown by the showModal method and it is hidden by the close method