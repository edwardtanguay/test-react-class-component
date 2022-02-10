import { AudioManager } from "../classes/AudioManager";
import { RecordingManager } from "../components/RecordingManager";

const audioManager = new AudioManager();

export const Piano = () => {

	const handlePianoKeyPress = () => {
		audioManager.noteOn('from piano');
	}

	return (
		<div className="component_piano">
			<h1>Piano</h1>
			<button onClick={handlePianoKeyPress}>Piano Key</button>
			<RecordingManager audioManager={audioManager} />
		</div>
	)
}