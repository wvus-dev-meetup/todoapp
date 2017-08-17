import React from 'react';

const EditTodo = (props) => {
	const inputChanged = (id, e) => {
		const value = e.target.value;
		props.handleEditChange(id, value);
	}
	const inputBlur = (id) => {
		props.handleEditBlur(id);
	}

	return(
		<li>
			<input 
				type="text"
				onChange={inputChanged.bind(null, props.id)}
				onBlur={inputBlur.bind(null, props.id)}
				value={props.title}
				id={"edit" + props.id} 
				name={"edit" + props.id} />
		</li>
	);
}

export default EditTodo