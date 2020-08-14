import React from 'react';
import { useFetch } from './useFetch';

const App = () => {
	const { data, loading } = useFetch('http://numbersapi.com/43/trivia')

	return (
		<div>
			<div>{!data ? 'loading...' : data}</div>
		</div>
	);
} 

export default App;