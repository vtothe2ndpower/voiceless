import React, { Component } from 'react';

class Statement extends Component {
	render() {
		const { statement, imgSrc, onClick } = this.props;
		return (
			<div className="statement">
				<h2>
					Statement: <em>{statement}</em>
				</h2>
				<img src={imgSrc} alt={statement} onClick={onClick} />
			</div>
		);
	}
}

export default Statement;
