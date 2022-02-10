import { AudioManager } from "../classes/AudioManager";
import { RecordingManager } from "../components/RecordingManager";
import { getNoteFromNoteName } from "../utils/channelKeyMap";

const audioManager = new AudioManager();

export const Piano = () => {

	const handlePianoKeyPress = (noteName) => {
		const note = getNoteFromNoteName(noteName);
		audioManager.noteOn(note, 35);
		audioManager.noteOffWithKeyPress(note);
	}

	return (
		<div className="component_piano">
			<div className="piano">
				{['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'].map((letter, i) => {
					return (
						<button key={i} className="whiteKey" onClick={() => handlePianoKeyPress(letter)}>{letter.substring(1,0)}</button>
					)
				})}
			</div>
			<RecordingManager audioManager={audioManager} />
		</div>
	)
}