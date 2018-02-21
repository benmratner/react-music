import React, { Component } from 'react'
import NoteBlock from './NoteBlock';
import Notes from '../utils/Notes';
import Scales from '../utils/Scales';

class Scale extends Component {
	render() {
		const { audioContext, gainNode, scale, note, octave, waveform} = this.props;
		return (
			<div>
				{	
					Scales.getScaleNotes([scale]).map(note => {
						console.log(note)
						return <NoteBlock 
							audioContext={audioContext}
							gainNode={gainNode}
							note={note}
							octave={octave}
							waveform={waveform}
						/>
					})
				}
			</div>
		)
	}
}

export default Scale;