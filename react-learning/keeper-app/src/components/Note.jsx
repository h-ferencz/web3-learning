import React from "react";

function Note() {
  let note = {
    title: "This is the note title",
    content: "This is the note content"
  }
  return (
    <div class="note">
      <h1>
        {note.title}
      </h1>
      <p>
        {note.content}
      </p>
    </div>
  );
}

export default Note;
