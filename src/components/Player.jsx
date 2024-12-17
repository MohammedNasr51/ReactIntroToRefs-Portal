import { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const PlayerInput = useRef();
  const handleClick = () => {
    setPlayerName(PlayerInput.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {playerName??'unknown entity'}</h2>
      <p>
        <input ref={PlayerInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
//if you want to read a value from an input field, you can use the useRef hook instead of using multiple states like the example above
//know that that ref hook is actualy a pointer refer to any element has the property "ref" equals to the variable i store the useRef in so by the useRef hook i can access any property or method of the refered element easely accros the 'currunt' property of the useRef
