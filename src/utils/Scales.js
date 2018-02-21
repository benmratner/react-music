const Scales = {
	'Cmaj': {
		shortName: 'A',
		longName: 'A Major',
		notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B']
	},
	'Bmaj': {
		shortName: 'B',
		longName: 'B Major',
		notes: ['B', 'Csharp', 'Dsharp', 'E', 'Fsharp', 'Gsharp', 'Asharp']
	},
	'Eflatmin': {
		shortName: 'E♭m',
		longName: 'E Flat Minor',
		notes: ['Eflat', 'F', 'Gflat', 'Aflat', 'Bflat', 'Cflat', 'Dflat']
	}
}

const functions = {
	getScaleNotes: (scale) => {
		return Scales[scale].notes;
	}
}

export default functions;