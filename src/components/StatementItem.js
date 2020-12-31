import React, { Component } from 'react';

class StatementItem extends Component {
  render() {
    const { statement, imgSrc, onClick } = this.props;
    return (
      <div>
				<h2>
					Statement: <em>{statement}</em>
				</h2>
				<img src={imgSrc} alt={statement} onClick={onClick} />
			</div>
    )
  }
}

export default StatementItem;