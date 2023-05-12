import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    setNotes(data);
  };

  return (
    <div>
      <div className="notes-list">
        <Header />
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
