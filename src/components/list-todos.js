import React from 'react';
import ToDo from './todo';

const ListToDos = (props) => {
	const toDoList = props.toDoList.map( (item) => (
		<ToDo 	
			key={item.id} 
			id={item.id}
			title={item.title}
			data={item}
			handleCompleted={props.handleCompleted} />
	));

	return (
		<ul>
			<h2>List of Todos</h2>
			{ toDoList }
		</ul>
	)
}

export default ListToDos