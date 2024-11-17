/* eslint-disable react/prop-types */
import Child01 from "./Child01";
import Child02 from "./Child02";
import Child03 from "./Child03";

const Parent = ({ reset, timer, startTimer }) => {
	// return (
	// 	<>
	// 		<h1>{`${Math.floor(timer / 60)}.${timer % 60}`}</h1>
	// 		<Child01 startTimer={startTimer} />
	// 		<Child02 reset={reset} />
	// 		<Child03 />
	// 	</>
	// );
	/// =================================================================
	/// =================================================================
	/// =================================================================

	return (
		<>
			<Child01 />
			<Child02 />
			<Child03 />
		</>
	);
};

export default Parent;
