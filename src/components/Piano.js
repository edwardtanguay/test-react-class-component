import { AudioManager } from "../classes/AudioManager";
import { RecordingManager } from "../components/RecordingManager";

const audioManager = new AudioManager();

export const Piano = () => {

	const handlePianoKeyPress = (note) => {
		audioManager.noteOn(note, 35);
		audioManager.noteOffWithKeyPress(note);
	}

	return (
		<div className="component_piano">
			<div className="piano">
				{['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'].map((letter, i) => {
					return (
						<button key={i} className="whiteKey" onClick={() => handlePianoKeyPress(72)}>{letter}</button>
					)
				})}
			</div>
			<RecordingManager audioManager={audioManager} />
		</div>
	)
}