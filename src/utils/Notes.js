const Notes = {
	'C': {
		longText: 'C',
		shortText: 'C',
		freq: 16.35,
	},
	'Csharp': {
		longText: 'C Sharp',
		shortText: 'C♯',
		freq: 17.32,
	},
	'Dflat': {
		longText: 'D Flat',
		shortText: 'D♭',
		freq: 17.32,
	},
	'D': {
		longText: 'D',
		shortText: 'D',
		freq: 18.35,
	},
	'Dsharp': {
		longText: 'D Sharp',
		shortText: 'D♯',
		freq: 19.45,
	},
	'Eflat': {
		longText: 'E Flat',
		shortText: 'E♭',
		freq: 19.45,
	},
	'E': {
		longText: 'E',
		shortText: 'E',
		freq: 20.60,
	},
	'Esharp': {
		longText: 'E Sharp',
		shortText: 'E♯',
		freq: 21.83,
	},
	'Fflat': {
		longText: 'F Flat',
		shortText: 'F♭',
		freq: 20.60,
	},
	'F': {
		longText: 'F',
		shortText: 'F',
		freq: 21.83,
	},
	'Fsharp': {
		longText: 'F Sharp',
		shortText: 'F♯',
		freq: 23.12,
	},
	'Gflat': {
		longText: 'G Flat',
		shortText: 'G♭',
		freq: 23.12,
	},
	'G': {
		longText: 'G',
		shortText: 'G',
		freq: 24.50,
	},
	'Gsharp': {
		longText: 'G Sharp',
		shortText: 'G♯',
		freq: 25.96,
	},
	'Aflat': {
		longText: 'A Flat',
		shortText: 'A♭',
		freq: 25.96,
	},
	'A': {
		longText: 'A',
		shortText: 'A',
		freq: 27.50,
	},
	'Asharp': {
		longText: 'A Sharp',
		shortText: 'A♯',
		freq: 29.14,
	},
	'Bflat': {
		longText: 'B Flat',
		shortText: 'B♭',
		freq: 29.14,
	},
	'B': {
		longText: 'B',
		shortText: 'B',
		freq: 30.87,
	},
	'Bsharp': {
		longText: 'B Sharp',
		shortText: 'B♯',
		freq: 16.35,
	},
	'Cflat': {
		longText: 'C Flat',
		shortText: 'C♭',
		freq: 30.87,
	},
}

const functions = {
	getFrequency: (noteName, octave) => {
		return Notes[noteName].freq * Math.pow(2, octave);
	},
	getLongText: (noteName) => {
		return Notes[noteName].longText;
	},
	getShortText: (noteName) => {
		console.log('short text', noteName)
		return Notes[noteName].shortText;
	}
}

export default functions;