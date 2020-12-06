import React, { Component } from 'react';
import Statement from './Statement';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			statement: '',
			imgSrc: '',
			entries: [
				{
					statement: 'I am hungry',
					imgSrc:
						'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/gettyimages-79050550.jpg?itok=M9SXlxFd'
				},
				{
					statement: 'I am sleepy',
					imgSrc: 'https://images.news18.com/ibnlive/uploads/2020/06/1592996485_untitled-design-93.jpg'
				},
				{
					statement: 'I am excited',
					imgSrc: 'https://cdn.pixabay.com/photo/2017/08/16/22/29/excited-2649320_1280.jpg'
				},
				{
					statement: 'I am stressed',
					imgSrc:
						'https://www.personneltoday.com/wp-content/uploads/sites/8/2018/04/stressed-IT-employees.jpg'
				}
			]
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { statement, imgSrc } = this.state;

		this.setState((curState) => {
			let newArr = [ ...curState.entries, { statement, imgSrc } ];
			return { entries: newArr };
		});

		this.setState({ statement: '', imgSrc: '' });
	};

	handleClick = (e) => {
		this.getSpeech(e.target.alt);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	getSpeech = (text) => {
		let msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	};

	render() {
		const { entries } = this.state;
		return (
			<div className="form-body">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="statement"
						value={this.state.statement}
						onChange={this.handleChange}
						placeholder="Statement"
					/>
					<input
						type="text"
						name="imgSrc"
						value={this.state.imgSrc}
						onChange={this.handleChange}
						placeholder="Image source"
					/>
					<button type="submit">Submit</button>
				</form>
				{entries.slice(0).reverse().map((item, index) => {
					return (
						<Statement
							key={index}
							statement={item.statement}
							imgSrc={item.imgSrc}
							onClick={this.handleClick}
						/>
					);
				})}
			</div>
		);
	}
}

export default Form;
// Make labels for forms
