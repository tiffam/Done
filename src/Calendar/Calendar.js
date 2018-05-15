import React, {Component} from 'react';
import styles from './Calendar.css'

class Calendar extends Component {
	
	constructor(props){
		super(props);
		this.noteDate = props.noteDate;
	}

			// <div><p>Month</p>
			// 	<p>{ this.noteDate.slice(3, 7) } </p>
			// </div>

	render(props){
		return(
			<div className="tableContainer">
				<h3>7 days</h3>
				<table className="table">
					<tr>
						<th className="subject">Subject</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
						<th>Sun</th>
					</tr>
					<tr>
						<td className="subject"></td>
						<td className="summary"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary active"></td>
						<td className="summary active"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
					</tr>
				</table>
			</div>

		)
	}
}

export default Calendar;