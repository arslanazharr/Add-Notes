import React from "react";
// import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "./note.css";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1> <hr />
        <p>{props.content}</p>
        <button onClick={deleteNote} className="button">
          {" "}
          <DeleteIcon className="del-icon" />
        </button>
      </div>
    </>
  );
};

export default Note;
