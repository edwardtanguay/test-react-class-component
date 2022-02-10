import { useState } from 'react';
import { RiRecordCircleFill } from 'react-icons/ri';

export const RecordingManager = ({ audioManager }) => {
	const [isRecording, setIsRecording] = useState(false);
	const [recordingArray, setRecordingArray] = useState([]);

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
			<button className={`recordButton${isRecording ? ' recording' : ''}`} onClick={handleRecordButton}><RiRecordCircleFill className="icon" /><span>Record</span></button>
			<div className="recordedNotes">
				{recordingArray.map((note) => note).join(', ')}
			</div>
		</>
	)
}