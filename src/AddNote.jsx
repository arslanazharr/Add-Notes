import React, { useState } from "react";
import "./addnote.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddNote = () => {
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
          <Button className="button">
            <AddIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
