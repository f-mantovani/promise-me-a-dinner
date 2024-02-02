import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useBroccoli() {
  const [broccoli, setBroccoli] = useState([]);
  const addItem = setter(setBroccoli)

	async function getBroccoliInstructions() {
		reset(setBroccoli)
		const food = 'broccoli';
		// Don't change the code above this line
		try{
			const step0 = await obtainInstruction("broccoli", 0)
			addItem(step0)
			const step1 = await obtainInstruction("broccoli", 1)
			addItem(step1)
			const step2 = await obtainInstruction("broccoli", 2)
			addItem(step2)
			const step3 = await obtainInstruction("broccoli", 3)
			addItem(step3)
			const step4 = await obtainInstruction("broccoli", 4)
			addItem(step4)
		}
		catch(err) {
			console.log(err)
		}
		
		// Don't change the code below this line
	}
  return [broccoli, getBroccoliInstructions]
}


export default useBroccoli