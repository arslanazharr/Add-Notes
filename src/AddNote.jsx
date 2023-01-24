import React, { useState } from "react";
import "./addnote.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const clickEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="main-note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Add Title"
          />
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Type here..."
          />
          <Button className="button" onClick={clickEvent}>
            <AddIcon className="icon" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
