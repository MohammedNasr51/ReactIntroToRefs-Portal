import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost ? <h2>you Lost!</h2> : <h2>your score: {score}</h2>}
      <p>
        Target time: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer in:{" "}
        <strong>{formattedTimeRemaining} seconds</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;

//now i wanted to refer to an element inside another component so i imported the 'forwarded' function to rap the component inside it and pass the ref parameter to be able to use it freely

// the dialog is a built in html element that is used to create a modal window that is used to display messages to the user and it is hidden by default and it is shown by the showModal method and it is hidden by the close method

// if there are others working with you in the project it will be confusing if they see the called refference like 'dialoge.currunt.showModal' that was out side this component becase the method is for only the dialog and if it was a div this will cause an error so that

// we use the useImparativeHandle hook to accept a ref and make the logic in it in another method that is made for this component specially so it will be easey to manibulate and understandig
