window.AudioContext = window.AudioContext || window.webkitAudioContext;

export class AudioManager {

	constructor() {
		this.ctx = new AudioContext();
		this.recordNote = null;
		this.oscillators = {};
	}

	injectRecordNote(recordNote) {
		this.recordNote = recordNote;
	}

	midiToFrequency(number) {
		const a = 440;
		return (a / 32) * 2 ** ((number - 9) / 12);
	}

	noteOn(note, velocity) {
		const oscGain = this.ctx.createGain();
		oscGain.gain.value = 0.33;
		const velocityGainAmount = (1 / 127) * velocity;
		const velocityGain = this.ctx.createGain();

		const osc = this.ctx.createOscillator();
		osc.type = 'sine';
		osc.frequency.value = this.midiToFrequency(note);
		velocityGain.gain.value = velocityGainAmount;

		osc.connect(oscGain);
		osc.connect(velocityGain);
		velocityGain.connect(this.ctx.destination);

		osc.gain = oscGain;

		console.log(osc.frequency.value);
		this.oscillators[note.toString()] = osc;
		osc.start();
		this.recordNote(note);
	}
}