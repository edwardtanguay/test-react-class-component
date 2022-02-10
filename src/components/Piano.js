import { AudioManager } from "../classes/AudioManager";
import { RecordingManager } from "../components/RecordingManager";

const audioManager = new AudioManager();

export const Piano = () => {

	const handlePianoKeyPress = () => {
		audioManager.noteOn();
	}

	return (
		<div className="component_piano">
			<h1>Piano</h1>
			<button onClick={handlePianoKeyPress}>Piano Key</button>
			<RecordingManager />
		</div>
	)
}