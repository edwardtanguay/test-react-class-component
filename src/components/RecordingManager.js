import { useState } from 'react';

export const RecordingManager = () => {
	const [isRecording, setIsRecording] = useState(false);

	const handleRecordButton = () => {
		setIsRecording(!isRecording);
	}
	return (
		<>
			<div>Recording Manager</div>
			<button onClick={handleRecordButton}>Record</button>
			<div>{isRecording ? 'recording' : 'off'}</div>
		</>
	)
}