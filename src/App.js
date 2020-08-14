import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	let data = { title: 'Waiting for Data...' };
	const [todo, setTodo] = useState(data);
	const [isData, setData] = useState(false);
	const [isFetching, setFetching] = useState(false);



	useEffect(() => {
		async function fetchData() {
			setFetching(true);
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
			console.log("Response: ", response);

			const data2 = await response.json();
			setTodo(data2);

			setFetching(false);
			console.log("Data: ", todo);
		}
		fetchData();
	}, [isData]);

	if (isFetching) {
		return <div>Data loading...</div>
	}


	return (
		<div>
			<span>Title: {data.title}</span>
			<br />
			<span>Title: {todo.title}</span>
		</div>
	);
}

export default App;