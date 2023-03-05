import './App.css';
import {useState} from 'react';
import axios from 'axios';
import InputPanel from './components/InputPanel';
import InfoPanel from './components/InfoPanel';

function App() {
	const [data, setData] = useState([]);
	const [input, setInput] = useState('');

	const fetchData = (ipAddress) => {
		axios
			.get(
				`https://geo.ipify.org/api/v2/country?apiKey=at_He23AoOSzVfPBtwXdzJRxJUtkZjBo&ipAddress=${ipAddress}`,
			)
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		fetchData(input);
	};

	return (
		<div className='App'>
			<div className='blue-area'>
				<h1>IP Address Tracker</h1>
				<InputPanel handleChange={handleChange} handleSubmit={handleSubmit} />
				<InfoPanel data={data} />
			</div>
			<div className='map-area'></div>
		</div>
	);
}

export default App;
