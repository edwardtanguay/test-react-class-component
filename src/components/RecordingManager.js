import { useState } from 'react';

export const RecordingManager = ({audioManager}) => {
	const [isRecording, setIsRecording] = useState(false);
	const [recordingArray, setRecordingArray] = useState(['F', 'E']);

	audioManager.noteOn('from recording manager');

	const handleRecordButton = () => {
		setIsRecording(!isRecording);
	}

	const recordNote = (note) => {
		recordingArray.push(note);
		setRecordingArray([...recordingArray]);
	}

	return (
		<>
			<div>Recording Manager</div>
			<button onClick={handleRecordButton}>Record</button>
			<div>{isRecording ? 'recording' : 'off'}</div>
			<div><button onClick={() => recordNote('C#')}>Record Note</button></div>
			{recordingArray.map((note,i) => {
				return (
					<div key={i}>{note}</div>
				)
			})}
		</>
	)
}