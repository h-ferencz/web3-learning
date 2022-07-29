import React from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import note from "../notes.js"

function App() {
  return (
    <div>
      <Heading />
      {
        note.map(noteItem => (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))
      }
      <Footer />
    </div>
  );
}
console.log(note)

export default App;
