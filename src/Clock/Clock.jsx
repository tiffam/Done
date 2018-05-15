import React, {Component} from 'react';
import './Clock.css';
import PropTypes from 'prop-types';

class Clock extends Component {
	constructor(props){
			super(props);
			this.state = {
			time: '',
			}
		}

	render(){

		return(
			<div className="clock">
				<div ><div className="hourHand"></div></div>
				<div className="minuteHand"></div>
			</div>
			)
	}
}

export default Clock;