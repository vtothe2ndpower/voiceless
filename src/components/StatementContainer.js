import React, { Component } from 'react';
import StatementForm from './StatementForm';
import StatementItem from './StatementItem';

class Statement extends Component {
	constructor(props) {
		super(props);

		this.state = {
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

	addItem = (item) => {
		this.setState((curState) => ({
			entries: [...curState.entries, item]
		}));
	}

	handleClick = (e) => {
		this.getSpeech(e.target.alt);
	};

	getSpeech = (text) => {
		let msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
	};

	render() {
		const { entries } = this.state;
		return (
			<div>
				<StatementForm addItem={this.addItem} /> 
				{entries.slice(0).reverse().map((item, index) => {
						return (<StatementItem
							key={index}
							statement={item.statement}
							imgSrc={item.imgSrc}
							onClick={this.handleClick}
						/>);
				})}
			</div>
			);
	}
}

export default Statement;
// Add an ease-in on new additions?