import './App.css';
import {useState} from 'react';
import axios from 'axios';
import {Container} from '@mui/material';
import InputPanel from './components/InputPanel';
import InfoPanel from './components/InfoPanel';

function App() {
	const [data, setData] = useState({});
	const [input, setInput] = useState('');

	const fetchData = (ip) => {
		axios
			.get(
				`https://geo.ipify.org/api/v2/country?apiKey=at_He23AoOSzVfPBtwXdzJRxJUtkZjBo&ipAddress=${ip}`,
			)
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
				setData({});
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
		<Container className='App'>
			<h1>IP Address Tracker</h1>
			<InputPanel handleChange={handleChange} handleSubmit={handleSubmit} />
			<InfoPanel data={data} />
		</Container>
	);
}

export default App;
