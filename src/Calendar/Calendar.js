import React, {Component} from 'react';
import styles from './Calendar.css';
import Moment from 'moment';

class Calendar extends Component {
	
	constructor(props){
		super(props);
		this.noteDate = props.noteDate;
		this.noteContent = props.noteContent;
		this.noteSubject = props.noteSubject;
		this.noteId = props.noteId;
		this.noteData = props.noteData
	}

	render(props){

		const dayZero = Moment().format("ddd MMM D YYYY").toString();
		console.log(dayZero);
		const dayOne = Moment().subtract(1, 'days').format("ddd MMM D YYYY").toString();
		const dayTwo = Moment().subtract(2, 'days').format("ddd MMM D YYYY").toString();
		const dayThree = Moment().subtract(3, 'days').format("ddd MMM D YYYY").toString();
		const dayFour = Moment().subtract(4, 'days').format("ddd MMM D YYYY").toString();
		const dayFive = Moment().subtract(5, 'days').format("ddd MMM D YYYY").toString();
		const daySix = Moment().subtract(6, 'days').format("ddd MMM D YYYY").toString();

		let classZero;
		let classOne;
		let classTwo;
		let classThree;
		let classFour;
		let classFive;
		let classSix;

		return(
			<div className="tableContainer">
				<h3>Snapshot of your done list</h3>
				<table className="table">
					<tr>
						<th className="subject + {class}">Subject</th>
						<th className="six">{daySix}</th>
						<th className="five">{dayFive}</th>
						<th className="four">{dayFour}</th>
						<th className="three">{dayThree}</th>
						<th className="two">{dayTwo}</th>
						<th className="one">{dayOne}</th>
						<th className=" subzero today">{dayZero}</th>
						<div className="arrow-up"></div>
					</tr>
						{ 		this.noteData.map((note) => {
									let allSubject = [];
									console.log(note);
									this.noteData.map((note) => {
										allSubject.push(note.noteSubject);
									});
									let uniqueSubject = Array.from(new Set(allSubject));
									console.log(uniqueSubject);

									for (let i = 0; i < uniqueSubject.length; i++){
										if(uniqueSubject[i] === note.noteSubject && daySix === note.noteDate) {
											classSix = "summary active"
										} else {
											classSix = "summary"
										}
										if(uniqueSubject[i] === note.noteSubject && dayFive === note.noteDate) {
											classFive="summary active"
										} else {
											classSix = "summary"
										}
										if(uniqueSubject[i] === note.noteSubject && dayFour === note.noteDate) {
											classFour="summary active"
										} else {
											classSix = "summary"
										}
										if(uniqueSubject[i] === note.noteSubject && dayThree === note.noteDate) {
											classThree="summary active"
										} else {
											classSix = "summary"
										}
										if(uniqueSubject[i] === note.noteSubject && dayTwo === note.noteDate) {
											classTwo="summary active"
										} else {
											classSix = "summary"
										}
										if(uniqueSubject[i] === note.noteSubject && dayOne === note.noteDate) {
											classOne="summary active"
										} else {
											classSix = "summary"
										}
										if(uniqueSubject[i] === note.noteSubject && dayZero === note.noteDate) {
											classZero="summary active"
										} else {
											classSix = "summary"
										}
									}

									return (
											<tr>
											<td key={note.id} className="subject">{note.noteSubject}</td>
											<td className={classSix}></td>
											<td className={classFive}></td>
											<td className={classFour}></td>
											<td className={classThree}></td>
											<td className={classTwo}></td>
											<td className={classOne}></td>
											<td className={classZero}></td>
											</tr>)
								
									} 
								)}
							</table>
						</div>
					)
				}
			}
		


export default Calendar;