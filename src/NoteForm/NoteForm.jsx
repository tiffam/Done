import React, {Component} from 'react';
import './NoteForm.css';
import Moment from 'moment';

class NoteForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			newNoteContent: '',
			newDate: '',
			newSubject: ''
		}

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleUserInput2 = this.handleUserInput2.bind(this);
		this.writeNote = this.writeNote.bind(this);
	}
//when user input changes, set the newNoteContent.
// to the value of what is in the input box.
	handleUserInput(event){
		this.setState({
			newNoteContent: event.target.value //value of text input
		})
	}

	handleUserInput2(event){
		this.setState({ //value of text input
		newSubject: event.target.value})
	}

	writeNote(event){
		//calls the method that set the notecontent for a note
		this.state.newDate = Moment().format("ddd MMM D YYYY").toString();
		//to the value of the input
		this.props.addNote(this.state.newNoteContent, this.state.newDate, this.state.newSubject);
		//sets newNoteContent back to an empty string

		this.setState({
			newNoteContent: '',
			newDate: '',
			newSubject: ''
		})
	}

	render() {
		return(
			<div className="formWrapper">
				<input className="noteInput"
					placeholder="What I just did and..."
					value={this.state.newNoteContent}
					onChange={this.handleUserInput} />
				<input className="noteInput2" 
				placeholder="...in which subject?"
				onChange={this.handleUserInput2} 
				value={this.state.newSubject} />

				<button className="noteButton" 
				onClick={this.writeNote}>Done
				</button>
			</div>
		)
	}
}

export default NoteForm;