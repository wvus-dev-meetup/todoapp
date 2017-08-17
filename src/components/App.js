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
				title: 'Add Search to our app',
				finished: false,
				isEditing: false,
			},
			{
				id: 2,
				title: 'Add Search to our app',
				finished: false,
				isEditing: false,
			},
			{
				id: 3,
				title: 'Convert child components to stateless functional components',
				finished: false,
				isEditing: false,
			},
			{
				id: 4,
				title: 'Save ToDo data to localstorage',
				finished: false,
				isEditing: false,
			},
			{
				id: 5,
				title: 'Hide completed items (filter?)',
				finished: false,
				isEditing: false,
			},
		];


		this.state = {
			todos: initialState,
			newToDoValue: 'initial value',
		};
		this.handleCompleted = this.handleCompleted.bind(this);
		this.handleAddValueChange = this.handleAddValueChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleToDoEdit = this.handleToDoEdit.bind(this);
		this.handleEditChange = this.handleEditChange.bind(this);
	}

	handleCompleted(e) {
		const currentId = e.target.id;
		this.setState((prevState) => {
			const newState = prevState.todos.map((item) => {
				if(item.id == currentId) {
					item.finished = !item.finished;
				}
				return item;
			});
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

	handleToDoEdit(id) {
		
		console.log(id);

		this.setState((prevState) => {
			return prevState.todos.map((todo) => {
				if (todo.id === id) todo.isEditing = true;
				return todo;
			});
		});

	}

	handleEditChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		console.log(value, name);
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
					handleToDoEdit={this.handleToDoEdit}
					handleEditChange={this.handleEditChange}
					/>
			</div>
		);
	}
}

export default App