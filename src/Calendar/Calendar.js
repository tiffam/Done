import React, {Component} from 'react';
import styles from './Calendar.css'

class Calendar extends Component {
	
	constructor(props){
		super(props);
		this.noteDate = props.noteDate;
		this.noteContent = props.noteContent;
		this.noteSubject = props.noteSubject;
		this.noteId = props.noteId;
		this.noteData = props.noteData
	}

			// <div><p>Month</p>
			// 	<p>{ this.noteDate.slice(3, 7) } </p>
			// </div>


		// this.noteData.map((note) => {
  //             return (
		// 	let display = <tr>
		// 				<td className="subject">{</td>
		// 				<td className="summary"></td>
		// 				<td className="summary"></td>
		// 				<td className="summary active"></td>
		// 				<td className="summary active"></td>
		// 				<td className="summary active"></td>
		// 				<td className="summary"></td>
		// 				<td className="summary active"></td>
		// 			</tr>


	render(props){
		let today = new Date
		let yesterday = new Date
		yesterday = new Date(yesterday.setDate(yesterday.getDate() - 1))

// {yesterday.toString().slice(0, 10)}
		return(
			<div className="tableContainer">
				<h3>7 days listing</h3>
				<table className="table">
					<tr>
						<th className="subject">Subject</th>
						<th>9 May</th>
						<th>10 May</th>
						<th>11 May</th>
						<th>12 May</th>
						<th>13 May</th>
						<th>14 May</th>
						<th>15 May</th>
						<th className="today">TODAY </th>
						<div className="arrow-up"></div>
					</tr>
					<tr>
		 				<td className="subject">Javascript</td>
						<td className="summary"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary active today"></td>
					</tr>
					<tr>
		 				<td className="subject">Postgres</td>
						<td className="summary"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary active"></td>
						<td className="summary"></td>
						<td className="summary"></td>
						<td className="summary"></td>
						<td className="summary"></td>
					</tr>
					<tr>
		 				<td className="subject">HTML</td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary"></td>
						<td className="summary active"></td>
						<td className="summary active"></td>
						<td className="summary"></td>
						<td className="summary"></td>
						<td className="summary"></td>
					</tr>

					
				</table>
			</div>

		)
	}
}

export default Calendar;