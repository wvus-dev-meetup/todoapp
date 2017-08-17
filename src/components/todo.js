import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
	const toggleToDoEditing = (id) => {
		props.handleToDoEdit(id);
	}

	return (
			<li className={"checkbox " + (props.data.finished ? "text-success" : '')}>
					<input 
						type="checkbox" 
						onClick={props.handleCompleted} 
						id={props.id} 
						name={"todo" + props.id} />
					<label
						htmlFor={"todo" + props.id} 
						onClick={toggleToDoEditing.bind(null, props.id)}>
						{ props.title }
					</label>

			</li>
	)
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	data: PropTypes.object.isRequired,
	handleToDoEdit: PropTypes.func.isRequired,
	handleCompleted: PropTypes.func.isRequired,
}


export default Todo

