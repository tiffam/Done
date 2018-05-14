import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			newNoteContent: '',
			newDate: ''
		}

		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeNote = this.writeNote.bind(this);
	}
//when user input changes, set the newNoteContent.
// to the value of what is in the input box.
	handleUserInput(event){
		this.setState({
			newNoteContent: event.target.value //value of text input
		})
	}

	writeNote(event){
		//calls the method that set the notecontent for a note
		this.state.newDate = new Date;
		//to the value of the input
		this.props.addNote(this.state.newNoteContent, this.state.newDate);
		//sets newNoteContent back to an empty string

		this.setState({
			newNoteContent: '',
			newDate: ''
		})
	}

	render() {
		return(
			<div className="formWrapper">
				<input className="noteInput"
					placeholder="Write a new note..."
					value={this.state.newNoteContent}
					onChange={this.handleUserInput} />
				<button className="noteButton" 
				onClick={this.writeNote}>Done
				</button>
			</div>
		)
	}
}

export default NoteForm;