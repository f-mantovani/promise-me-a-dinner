import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset } from "../javascript/stateChanger.js";

function useBrusselSprouts(){
  const [brusselSprouts, setBrusselSprouts] = useState([]);

	function getBrusselSproutsInstructions() {
		reset(setBrusselSprouts)
		const food = 'brusselsSprouts';
		// Don't change the code above this line

		const brusselsSteps = [
			obtainInstruction(food, 0),
			obtainInstruction(food, 1),
			obtainInstruction(food, 2),
			obtainInstruction(food, 3),
			obtainInstruction(food, 4),
			obtainInstruction(food, 5),
			obtainInstruction(food, 6),
			obtainInstruction(food, 7),
		];
    
		Promise.all([...brusselsSteps])
			.then((steps) => {
				const addReady = [...steps, 'Brussel sprouts are ready!']
				setBrusselSprouts(addReady);
			})
			.catch((e) => console.log(e));
	}

	// Don't change the code below this line
  return [brusselSprouts, getBrusselSproutsInstructions]
}

export default useBrusselSprouts