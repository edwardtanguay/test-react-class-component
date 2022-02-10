import { useState } from 'react';

export const RecordingManager = ({ audioManager }) => {
	const [isRecording, setIsRecording] = useState(false);
	const [recordingArray, setRecordingArray] = useState(['F', 'E']);

	const handleRecordButton = () => {
		setIsRecording(!isRecording);
	}

	const recordNote = (note) => {
		if (isRecording) {
			recordingArray.push(note);
			setRecordingArray([...recordingArray]);
		}
	}

	audioManager.injectRecordNote(recordNote);

	return (
		<>
			<div>Recording Manager</div>
			<button onClick={handleRecordButton}>Record</button>
			<div>{isRecording ? 'recording' : 'off'}</div>
			<div><button onClick={() => recordNote('C#')}>Record Note</button></div>
			{recordingArray.map((note, i) => {
				return (
					<div key={i}>{note}</div>
				)
			})}
		</>
	)
}