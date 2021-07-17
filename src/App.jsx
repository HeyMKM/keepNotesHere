import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };
  const delNote = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onDelete={delNote}
          />
        );
      })}

      <Footer />
    </>
  );
};
export default App;
