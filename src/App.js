import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm';
import Calendar from './Calendar/Calendar';

import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app'
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: []
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;
    //datesnapshot
    this.database.on('child_added', snap =>{
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
        noteDate: snap.val().noteDate,
        noteSubject: snap.val().noteSubject
      })
      this.setState({
        note: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
      if(previousNotes[i].id === snap.key){
        previousNotes.splice(i, 1);
      }
    }

    this.setState({
      notes: previousNotes
    })
  })
    }

  addNote(note, newDate, newSubject){
    //push the note onto the notes array.
    this.database.push().set({ noteContent: note, noteDate: newDate.toString(), noteSubject: newSubject});
  }

  removeNote(noteId){
    this.database.child(noteId).remove();
  }


  render() {


    return (
      <div className="notesWrapper gradient1">
              <div className="clock">
        <div className="hourHands"></div>
        <div className="minuteHands"></div>
        </div>
        <div className="notesHeader">
          <div className="heading">Now 
            <span className="tagline">Your everyday do tracker
            </span>
          </div>
        </div>

        <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
        </div>
        <Calendar noteData={this.state.notes}/>
        {
            this.state.notes.map((note) => {
              return (
                <Calendar 
                noteSubject={note.noteSubject}
                />)
            })
        }
                
          <div className="notesBody">
            {
            this.state.notes.map((note) => {
              return (
                <Note 
                noteContent={note.noteContent} 
                noteDate={note.noteDate} 
                noteId={note.id} 
                noteSubject = {note.noteSubject}
                key={note.id} 
                removeNote ={this.removeNote} />
                )
            })
          }
          </div>
      </div>
    );
  }
}

export default App;
