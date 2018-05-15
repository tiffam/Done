import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
	
	constructor(props){
		super(props);
		this.noteContent = props.noteContent;
		this.noteDate = props.noteDate;
		this.noteSubject = props.noteSubject;
		this.noteId = props.noteId;
		this.handleRemoveNote = this.handleRemoveNote.bind(this);
	}

	handleRemoveNote(id){
		this.props.removeNote(id);
	}


	render(props){

		let display = <p className="noteContent subjectTag">{ this.noteSubject } </p>
	
		if (this.noteSubject.length === 0){
			 display = null;
		}

		return(
			<div className="note fade-in">
				<span className="closebtn"
				onClick={() => this.handleRemoveNote(this.noteId)}>&times;
				</span>
				<p className="noteContent">{ this.noteDate.slice(0, 15) } </p>
				<p className="noteContent">{ this.noteContent } </p>
				{display}
			</div>

		)
	}
}



export default Note;