import React from 'react';
import EditToDo from './edit-todo';
import AddToDo from './add-todo';
import ListToDos from './list-todos';

class App extends React.Component {
	constructor() {
		super();

		const initialState = [
			{
				id: 1,
				title: 'Take out the garbage',
				finished: false,
			},
			{
				id: 2,
				title: 'Clean the kitchen',
				finished: false,
			},
			{
				id: 3,
				title: 'Change the oil in the car',
				finished: false,
			},
		];

		this.state = {
			todos: initialState,
			newToDoValue: 'initial value',
		};
		this.handleCompleted = this.handleCompleted.bind(this);
		this.handleAddValueChange = this.handleAddValueChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleCompleted(e) {
		console.log(e);
		const currentId = e.target.id;
		this.setState((prevState) => {
			const newState = prevState.todos.map((item) => {
				if(item.id == currentId) {
					item.finished = !item.finished;
				}
				console.log('item', item);
				return item;
			});
			console.log('newState', newState);
			return newState;
		});
	}

	handleAdd() {
		const value = this.state.newToDoValue;
		this.setState((prevState) => {
			prevState.todos.push({
				id: prevState.todos.length + 1,
				title: value,
				finished: false,
			});
			return prevState;
		});
	}

	getNextId() {

	}

	handleAddValueChange(e) {
		const value = e.target.value;
		this.setState({newToDoValue: value});
	}

	render() {
		return(
			<div>
				<h1>Welcome to your React App!</h1>
				<AddToDo 
					newToDoValue={this.state.newToDoValue}
					handleAddValueChange={this.handleAddValueChange}
					handleAdd={this.handleAdd}
					/>
				<ListToDos 
					toDoList={this.state.todos} 
					handleCompleted={this.handleCompleted}
					/>
			</div>
		);
	}
}

export default App