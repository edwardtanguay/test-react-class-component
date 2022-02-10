import { AudioManager } from "../classes/AudioManager";

const audioManager = new AudioManager();

export const Piano = () => {

	audioManager.noteOn();

	return (
		<div>piano</div>	
	)
}