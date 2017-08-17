import React from 'react';

const Todo = (props) => {
	return (
			<li className={props.data.finished && "text-success"} 
				onClick={props.handleToDoEdit}>
					<input type="checkbox" onClick={props.handleCompleted} id={props.id} />
					{ props.title }
			</li>
	)
}

export default Todo