import React from 'react';
import style from './Increment.module.css';

class Increment extends React.Component {

	render = () => {

		return (

			<div className={style.Increment}>
				<button onClick={this.props.IncrementCounter} disabled={this.props.counterDisable}>Inc</button>
			</div>

		);
	};


}

export default Increment;