import React from 'react';

class AddToDo extends React.Component {

	render() {
		return (
			<div>Add Todo
				<input 
					name="addTodo" 
					value={this.props.newToDoValue}
					onChange={this.props.handleAddValueChange}/>
				<button onClick={this.props.handleAdd}>Add</button>
			</div>
		)
	}
}

export default AddToDo