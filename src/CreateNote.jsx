import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { useState } from "react";

const CreateNote = (props) => {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });
  let [expand, setExpand] = useState(false);

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const getExpand = () => {
    setExpand(true);
  };
  const shrink = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              onChange={inputEvent}
              value={note.title}
              name="title"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            placeholder="write a note..."
            onChange={inputEvent}
            value={note.content}
            name="content"
            onClick={getExpand}
            onDoubleClick={shrink}
          ></textarea>
          {expand ? (
            <Tooltip title="Add">
              <Button onClick={addEvent}>
                <AddIcon className="plus_sign" />
              </Button>
            </Tooltip>
          ) : null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
