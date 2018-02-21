import React, { Component } from 'react';
import Notes from '../utils/Notes';
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
	}

	componentWillMount() {
		// this.getTone(261.625565)
	}

	handleVolumeChange(e){
		this.setState({volume: e.target.value});
		// this.getTone(261.625565)
	}
	handleWaveChange(e){
		this.setState({waveSelected: e.target.value});
		// this.getTone(261.625565)
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
		this.osc = this.audioContext.createOscillator();
		this.osc.connect(this.masterGainNode)
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
				<div onMouseDown={()=>this.getTone(261.625565)} onMouseUp={()=>this.osc.stop()}>Click Me</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('C', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('C')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('Csharp', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('Csharp')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('D', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('D')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('Eflat', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('Eflat')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('E', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('E')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('F', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('F')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('Fsharp', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('Fsharp')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('G', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('G')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('Gsharp', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('Gsharp')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('A', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('A')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('Bflat', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('Bflat')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('B', 4))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('B')}</div>
				<div onMouseDown={()=>this.getTone(Notes.getFrequency('C', 5))} onMouseUp={()=>this.osc.stop()}>{Notes.getShortText('C')}</div>
			</div>
		)
	}
}

export default Main;