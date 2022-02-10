import { useState } from 'react';

export const RecordingManager = () => {
	const [isRecording, setIsRecording] = useState(false);
	const [recordingArray, setRecordingArray] = useState(['F', 'E']);

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
			{recordingArray.map(note => {
				return (
					<div>{note}</div>
				)
			})}
		</>
	)
}