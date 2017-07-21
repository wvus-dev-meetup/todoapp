import React from 'react';
import ToDo from './todo';

class ListToDos extends React.Component {
	constructor() {
		super();
	}

	render() {
		const toDoList = this.props.toDoList.map( (item) => {
			return <ToDo key={item.id} id={item.id} title={item.title} data={item} handleCompleted={this.props.handleCompleted}></ToDo>;
		});

		return (
			<ul>
				<h2>List of Todos</h2>
				{ toDoList }
			</ul>
		)
	}
}

export default ListToDos