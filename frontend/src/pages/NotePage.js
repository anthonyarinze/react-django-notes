import React, { useState, useEffect } from "react";

const NotePage = ({ match }) => {
  const noteId = match.params.id;
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId]);

  const getNote = async () => {
    let response = await fetch(`/api/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
