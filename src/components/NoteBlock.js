import React, { Component } from 'react'
import Notes from '../utils/Notes';

class NoteBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	oscillator: null
        }
    }

    playTone = (freq, waveform) =>{
		const oscillator = this.props.audioContext.createOscillator();
		this.setState({ oscillator: oscillator }, () => {
			console.log(freq)
	    	oscillator.type = waveform;
	    	oscillator.frequency.value = freq;
			oscillator.connect(this.props.gainNode)
			oscillator.start();
		});
	}

    stopTone = () =>{
    	this.state.oscillator.stop();
    }
    
	render() {

		const { note, octave, waveform } = this.props;

		return (
				<div 
					onMouseDown={()=>this.playTone(Notes.getFrequency(note, octave), waveform)} 
					onMouseUp={this.stopTone}
				>
					{ Notes.getShortText(note) }
				</div>
		)
	}
}

export default NoteBlock;