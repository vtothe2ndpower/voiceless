import React, { Component } from 'react';

class StatementForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			statement: '',
			imgSrc: ''
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.addItem(this.state);
		this.setState({ statement: '', imgSrc: '' });
	};

	render() {
		return (
			<div className="form-body">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="statement">Statement: </label>
					<input
						type="text"
						id="statement"
						name="statement"
						value={this.state.statement}
						onChange={this.handleChange}
						placeholder="Statement"
					/>
					<br />
					<br />
					<label htmlFor="imgSrc">Image Source: </label>
					<input
						type="text"
						id="imgSrc"
						name="imgSrc"
						value={this.state.imgSrc}
						onChange={this.handleChange}
						placeholder="Image source"
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default StatementForm;

