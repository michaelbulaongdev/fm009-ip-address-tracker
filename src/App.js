import './App.css';
import {useState} from 'react';
import axios from 'axios';
import InputPanel from './components/InputPanel';
import InfoPanel from './components/InfoPanel';

function App() {
	const [data, setData] = useState({});
	const [input, setInput] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = (ip) => {
		axios
			.get(
				`https://geo.ipify.org/api/v2/country?apiKey=at_He23AoOSzVfPBtwXdzJRxJUtkZjBo&ipAddress=${ip}`,
			)
			.then((response) => {
				console.log(response.data);
				setData(response.data);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
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
		<div className='App'>
			<h1>IP Address Tracker</h1>
			<InputPanel handleChange={handleChange} handleSubmit={handleSubmit} />
			<InfoPanel data={data} loading={loading} error={error} />
		</div>
	);
}

export default App;
