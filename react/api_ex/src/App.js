import { useEffect, useState } from 'react';

const Todos = () => {
	const [todos, setTodos] = useState({});
	useEffect(() => {
		fetch("http://localhost:5000/todos")
			.then((resp) => resp.json())
			.then((todos_from_server) => {
				setTodos(todos_from_server);
			})
			.catch((e) => {
				console.error("Problem with fetch to get todos: ", e);
			});
	});
	return (
		<ul>
			{ todos.values.map((t) => <li>{t.task}</li>) }
		</ul>
	);
};


function App() {
  return (
    <div className="App">
		<Todos />
    </div>
  );
}

export default App;
