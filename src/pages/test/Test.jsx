import { useEffect, useRef, useState } from "react";
import Parent from "./component/Parent";

const Test = () => {
	// // eslint-disable-next-line no-unused-vars
	// const [timer, setTime] = useState(0);
	// const countDown = setInterval(() => {
	// 	setTime((timer) => timer + 1);
	// 	console.log(timer);
	// }, 1000);
	// clearInterval(countDown);
	// const startTimer = () => {
	// 	countDown();
	// };
	// const stopTimer = () => {};
	// const reset = () => {
	// 	setTime(0);
	// };
	// return (
	// 	<>
	// 		<Parent timer={timer} startTimer={startTimer} reset={reset} />
	// 	</>
	// );
	// =================================================================
	// =================================================================
	// =================================================================
	// =================================================================
	// const [userInput, setInput] = useState(""); // User Input 01
	// const userInputRef = useRef("");
	// console.log(userInputRef);
	// console.log("Rendering...");
	// return (
	// 	<>
	// 		<input value={userInput} onChange={(e) => setInput(e.target.value)} />
	// 		<p>{userInput}</p>
	// 		<p>Use Ref user Input Area</p>
	// 		<input type="text" ref={userInputRef} />
	// 		<p>{userInputRef.current.value}</p>
	// 	</>
	// );

	return <Parent />;
};

export default Test;
