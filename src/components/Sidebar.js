import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, value) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
      </div>
    </div>
  ));
  return (
    <section className="sidebar pane">
        <div className="sidebar--header">
            <h3>Notes</h3>
            <button className="new-note" onClick={props.createNote}>+</button>
        </div>
      {noteElements}
    </section>
  );
}


