export class AudioManager {
	
	constructor() {
		this.recordNote = null;
	}

	injectRecordNote(recordNote) {
		this.recordNote = recordNote;
	}

	noteOn(note) {
		console.log('note play: ' + note);	
		// record note in recording manager
		this.recordNote(note);
	}
}