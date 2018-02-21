import React, { Component } from 'react';
import Notes from '../utils/Notes';
import NoteBlock from './NoteBlock'
import Scale from './Scale'
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			volume: 0.5,
			waveSelected: 'sine',
		}
		this.audioContext = new (window.AudioContext || window.webkitAudioContext);

		this.masterGainNode = this.audioContext.createGain();
		this.masterGainNode.connect(this.audioContext.destination);
		this.masterGainNode.gain.value = this.state.volume;

		this.osc = this.audioContext.createOscillator();
		this.osc.connect(this.masterGainNode)
	}

	handleVolumeChange(e){
		this.setState({volume: e.target.value}, () => {
			this.masterGainNode.gain.value = this.state.volume;
			this.osc.connect(this.masterGainNode)

		});
	}
	handleWaveChange(e){
		this.setState({waveSelected: e.target.value});
	}

	init(){
		let oscList = [];
		let masterGainNode = null;
		let keyboard = document.querySelector(".keyboard");
		let wavePicker = document.querySelector("select[name='waveform']");
		let volumeControl = document.querySelector("input[name='volume']");
		let noteFreq = null;
		let customWaveform = null;
		let sineTerms = null;
		let cosineTerms = null;

		masterGainNode = audioContext.createGain();
		masterGainNode.connect(audioContext.destination);
		masterGainNode.gain.value = volumeControl.value;
	}

	getTone(freq){

		if (this.state.waveSelected == "custom") {
			this.osc.setPeriodicWave(customWaveform);
		} else {
			this.osc.type = this.state.waveSelected;
		}
		this.osc.frequency.value = freq;
		this.osc.start();

		// return osc;
	}
	
	render() {
		return (
			<div className="settingsBar">
				<div className="left">
					<span>Volume: </span>
					<input 
						type="range" 
						min="0.0"
						max="1.0" 
						step="0.01"
						value={this.state.volume}
						list="volumes" 
						name="volume"
						onChange={this.handleVolumeChange.bind(this)}
					/>
					<datalist id="volumes">
						<option value="0.0" label="Mute" />
						<option value="1.0" label="100%" />
					</datalist>
				</div>
				<div>{this.masterGainNode.gain.value}</div>
				<div className="right">
					<span>Current waveform: </span>
					<select 
						name="waveform"
						value={this.state.waveSelected}
						onChange={this.handleWaveChange.bind(this)}
					>
						<option value="sine">Sine</option>
						<option value="square">Square</option>
						<option value="sawtooth">Sawtooth</option>
						<option value="triangle">Triangle</option>
						<option value="custom">Custom</option>
					</select>
				</div>
				<Scale
					scale={'Cmaj'}
					octave={4}
					waveform={this.state.waveSelected}
					audioContext={this.audioContext}
					gainNode={this.masterGainNode}
				/>
				<Scale
					scale={'Eflatmin'}
					octave={4}
					waveform={this.state.waveSelected}
					audioContext={this.audioContext}
					gainNode={this.masterGainNode}
				/>
			</div>
		)
	}
}

export default Main;