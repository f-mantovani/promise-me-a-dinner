import { useState } from 'react';
import { obtainInstruction } from '../javascript/obtainInstruction.js';
import { reset, setter } from '../javascript/stateChanger.js';

function useSteak() {
	const [steak, setSteak] = useState([]);
	const addItem = setter(setSteak);

	function getSteakInstructions() {
		reset(setSteak);
		const food = 'steak';

		obtainInstruction("steak", 0)
			.then((step0) => {
				addItem(step0)
			})
			obtainInstruction("steak", 1)
				.then((step1) => {
					addItem(step1)
				})
				obtainInstruction("steak", 2)
					.then((step2) => {
					addItem(step2)
					})
					obtainInstruction("steak", 3)
						.then((step3) => {
						addItem(step3)
					})
					obtainInstruction("steak", 4)
						.then((step4) => {
						addItem(step4)
					})
			}
	
	return [steak, getSteakInstructions];
}

export default useSteak;
