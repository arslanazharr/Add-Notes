import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button onClick={deleteNote}>
        <DeleteIcon />
      </Button>
    </>
  );
};

export default Note;
