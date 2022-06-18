import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./inputArea";
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(data) {
    setNotes((prev) => [...prev, data]);
  }
  function deleteItem(id) {
    setNotes((prev) => {
      return prev.filter((el, index) => id !== index);
    });
  }
  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />
      {notes.map((el, index) => {
        if (el.title !== "" && el.content !== "")
          return (
            <Note
              key={index}
              id={index}
              title={el.title}
              content={el.content}
              ondelete={deleteItem}
            />
          );
      })}
      <Footer />
    </div>
  );
}
export default App;
