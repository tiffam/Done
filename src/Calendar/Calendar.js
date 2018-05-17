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
		//create an object so that we can use key
		let sorted = {};
		//created an array of all subjects to keep track of individual
		let allSubjects = [];
		let addClass = [];
		let cname= "inactive";

		this.noteData.map((note) => { 
			if (sorted[note.noteSubject] !== undefined){
				console.log(note, "note");
				allSubjects.push(note.noteSubject);
				sorted[note.noteSubject].push(note);
			} 
			if (sorted[note.noteSubject] === undefined) {
				console.log(note, "note");
				sorted[note.noteSubject] = [];
				sorted[note.noteSubject].push(note);	
			}

			console.log("inside map and printing sorted javascript", sorted); 
		});

		//we have an object that has 2 subjects with 2 entries in each of them.

		// all rows => <tr>


		function hasDate(array, subj, day){
			array.map((note=>{
				// console.log(note.noteSubject, subj, "noteSubject === subj");
				// console.log(note.noteDate, day, "note.noteDate === day");
				if(note.noteSubject == subj && note.noteDate === day) {
				cname = "active";
				
			} else {
				cname = 'inactive'
			}

		}))}
		

		let subjTitle = Object.keys(sorted).map((item)=>{
			Object.keys(sorted[item]).map((element) => {
				console.log(sorted[item][element], "sorted[item][element]");
				console.log(sorted[item], "sorted[item]");

			})

			return (
					 <tr>
						<th className="subject">{sorted[item][0].noteSubject}</th>
						{ 

								weekDays.map((day)=> {
								
									let currentRow = sorted[item][0].noteSubject;
									hasDate(this.noteData, currentRow, day);
									console.log(cname);
									// if(hasDate(this.noteData, currentRow, day)){
									// 	cname = "active";
									// 	console.log(cname);
									
									// console.log(sorted[item][0].noteDate, "sorted[item][0].noteDate");
									// console.log(sorted[item][0].noteSubject, "sorted[item][0].noteSubject");
									return(
									<th className={ cname }></th>)
								})			
						}
					</tr>);
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
				{subjTitle
				}
				</table>
			</div>
			)
		}
	}


		


export default Calendar;