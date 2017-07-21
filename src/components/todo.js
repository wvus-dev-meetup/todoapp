import React from 'react';

class Todo extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (!this.props.data.finished ?
				<li className="text-primary">
					<input type="checkbox" onClick={this.props.handleCompleted} id={this.props.id} />
					{ this.props.title } 
				</li>
				:
				<li className="text-success">
					<input type="checkbox" onClick={this.props.handleCompleted} id={this.props.id} />
					<del>{ this.props.title }</del>
				</li>
		)
	}
}

export default Todo