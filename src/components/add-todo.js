import React from 'react';

const AddToDo = (props) => {
	return (
		<div>Add Todo
			<input 
				name="addTodo" 
				value={props.newToDoValue}
				onChange={props.handleAddValueChange}/>
			<button onClick={props.handleAdd}>Add</button>
		</div>
	)
}

export default AddToDo