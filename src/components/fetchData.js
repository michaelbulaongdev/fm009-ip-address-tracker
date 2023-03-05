import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.example.com/data')
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			{data.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	);
}

export default App;
