import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

import './App.css';

const App = () => {
	
	const localCount = JSON.parse(localStorage.getItem('count'));
	
	const [count, setCount] = useState(() => 
		(localCount ? localCount : 0)
	);

	const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

	useEffect(() => {
		localStorage.setItem('count', JSON.stringify(count));
	}, [count]);

	return (
		<div className="container">
			<div className="text">{!data ? 'loading...' : data}</div>
			<br />
			<div>Count: {count}</div>
			<button className="btn" onClick={() => setCount(c => c + 1)}>increment</button>
		</div>
	);
} 

export default App;