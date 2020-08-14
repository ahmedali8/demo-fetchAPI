import React, { useState } from 'react';
import { useFetch } from './useFetch';

const App = () => {
	const [count, setCount] = useState(0);
	const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

	return (
		<div>
			<div>{!data ? 'loading...' : data}</div>
			<div>Count: {count}</div>
			<button onClick={() => setCount(c => c + 1)}>increment</button>
		</div>
	);
} 

export default App;