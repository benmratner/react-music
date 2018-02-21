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
	'D': {
		longText: 'D',
		shortText: 'D',
		freq: 18.35,
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
	'A': {
		longText: 'A',
		shortText: 'A',
		freq: 27.50,
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
}

const functions = {
	getFrequency: (noteName, scale) => {
		return Notes[noteName].freq * Math.pow(2, scale);
	},
	getLongText: (noteName) => {
		return Notes[noteName].longText;
	},
	getShortText: (noteName) => {
		return Notes[noteName].shortText;
	}
}

export default functions;