import React from 'react';
import ToDo from './todo';
import EditTodo from './edit-todo';
import PropTypes from 'prop-types';

const ListToDos = (props) => {
	const toDoList = props.toDoList.map( (item) => {
		if(item.isEditing) {
			return <EditTodo 
						key={item.id} 
						id={item.id}
						title={item.title}
						tempValue={item.tempValue}
						handleEditChange={props.handleEditChange}
						handleEditBlur={props.handleEditBlur}
						/>
		} else {
			return <ToDo 	
						key={item.id} 
						id={item.id}
						title={item.title}
						data={item}
						handleCompleted={props.handleCompleted}
						handleToDoEdit={props.handleToDoEdit} />
		}
	});

	return (
		<ul>
			<h2>List of Todos</h2>
			{ toDoList }
		</ul>
	)
}

ListToDos.propTypes = {
	toDoList: PropTypes.array.isRequired,
	handleCompleted: PropTypes.func.isRequired,
	handleToDoEdit: PropTypes.func.isRequired,
}

export default ListToDos