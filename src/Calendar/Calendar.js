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
		const dayOne = Moment().subtract(1, 'days').format("ddd MMM D YYYY").toString();
		const dayTwo = Moment().subtract(2, 'days').format("ddd MMM D YYYY").toString();
		const dayThree = Moment().subtract(3, 'days').format("ddd MMM D YYYY").toString();
		const dayFour = Moment().subtract(4, 'days').format("ddd MMM D YYYY").toString();
		const dayFive = Moment().subtract(5, 'days').format("ddd MMM D YYYY").toString();
		const daySix = Moment().subtract(6, 'days').format("ddd MMM D YYYY").toString();

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
						{ 
							this.noteData.map((note, index) => {
								let allSubject = [];
								this.noteData.map((note) => {
									allSubject.push(note.noteSubject);
								});
								let uniqueSubject = Array.from(new Set(allSubject));
								console.log(uniqueSubject);
								for (let i = 0; i < uniqueSubject.length; i++){
									if(uniqueSubject[i]===note.noteSubject) {
										return (
											<tr>
											<td key={note.id} className="subject">{note.noteSubject}</td>
											<td className="summary daySix">{note.noteDate === daySix ? 1 : 0}</td>
											<td className="summary dayFive">{note.noteDate === dayFive ? 1 : 0}</td>
											<td className="summary dayFour">{note.noteDate === dayFour ? 1 : 0}</td>
											<td className="summary dayThree">{note.noteDate === dayThree ? 1 : 0}</td>
											<td className="summary dayTwo">{note.noteDate === dayTwo ? 1 : 0}</td>
											<td className="summary dayOne">{note.noteDate === dayOne ? 1 : 0}</td>
											<td className="summary dayZero">{note.noteDate === dayZero ? 1 : 0}</td>
											</tr>)
									} 
								}
							})
						}
				</table>
			</div>

		)
	}
}

export default Calendar;