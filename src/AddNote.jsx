import React from "react";
import "./addnote.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddNote = () => {
  return (
    <>
      <div className="main-note">
        <form>
          <input type="text" placeholder="Add Title" />
          <textarea rows="" column="" placeholder="Type here..." />
          <Button className="button">
            <AddIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
