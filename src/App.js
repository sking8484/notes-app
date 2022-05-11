import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function getCurrentNote() {
    return notes.find((note) => note.id === currentNoteId) || notes[0];
  }

  function updateNote(text) {
    setNotes(
      notes.map((note) =>
        note.id === currentNoteId ? { ...note, body: text } : { ...note }
      )
    );
  }

  return (
    <main className="app">
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            createNote={createNewNote}
            currentNote={getCurrentNote()}
            setNoteId={setCurrentNoteId}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={getCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1> you have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create One Now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
