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
		this.noteData = props.noteData;
	}


	hasDate(array, subj, day){

		let cname = "inactive";
		array.map((note)=>{

		if(note.noteSubject === subj && note.noteDate === day) {
			cname = "active";
		};
	})
		return cname;
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

	//declare variables to be used in table
		let weekDays = [daySix, dayFive, dayFour, dayThree, dayTwo, dayOne, dayZero];

		let classZero;
		let classOne;
		let classTwo;
		let classThree;
		let classFour;
		let classFive;
		let classSix;
		let classNames = [classSix, classFive, classFour, classThree, classTwo, classOne, classZero];
		//create an object so that we can use key value pairs.
		let sorted = {};
		//created an array of all subjects to keep track of individual
		let allSubjects = [];
		let addClass = [];
		let cname= "";

		this.noteData.map((note) => { 
			if (sorted[note.noteSubject] !== undefined) {
				allSubjects.push(note.noteSubject);
				sorted[note.noteSubject].push(note);
			} 
			if (sorted[note.noteSubject] === undefined) {
				sorted[note.noteSubject] = [];
				sorted[note.noteSubject].push(note);	
			}
		});
		

		let subjTitle = Object.keys(sorted).map((item)=>{

			return (
					 <tr>
						<th className="subject">{sorted[item][0].noteSubject}</th>
						{ 
							weekDays.map((day)=> {
							console.log(sorted[item][0].noteSubject, "day");
							let currentRow = sorted[item][0].noteSubject;
						
							let foo = this.hasDate(this.noteData, currentRow, day);
								return(
									<th className={ foo }></th>)
							})
						}
					</tr>
				);
		})

		// all rows ( each column in a single row)
		const allRows = weekDays.map((day)=> {
			return(
				<th className="">{day}</th>)
		})

		return(<div className="tableContainer">
			<h3>Snapshot of your done list</h3>
			<table className="table">
			<tr>				
			<th className="">Subject</th>
			{allRows}
			</tr>
			{subjTitle}
			</table>
		</div>)
	}
}

export default Calendar;