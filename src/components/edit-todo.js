import React from 'react';

const EditTodo = (props) => {
	return(
		<li>
			<input 
				type="text"
				onChange={props.handleEditChange}
				value={props.title}
				id={"edit" + props.id} 
				name={"edit" + props.id} />
		</li>
	);
}

export default EditTodo