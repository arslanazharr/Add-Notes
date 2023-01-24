import React, { useState } from "react";
import Header from "./Header";
import AddNote from "./AddNote";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  const [addItem, setaddItem] = useState([]);

  const addNote = (note) => {
    setaddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setaddItem((oldData) =>
      oldData.filter((curVal, ind) => {
        return ind !== id;
        // iss index k ilawa sb dikhanay
      })
    );
  };
  return (
    <>
      <Header />
      <AddNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
