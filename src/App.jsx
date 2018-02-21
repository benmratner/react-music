import { Component } from 'react';
import Main from './components/Main';
import './App.css';

export default class App extends Component {
	state = {
		name: 'react_music'
	};

	render() {
		return (
			<Main />
		);
	}
}
