import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';

const Note = (props) => {
    const delEvent = () => {
        props.onDelete(props.id);
    }
  return (
    <>
    <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Tooltip title="Delete">
        <button className='btn' onClick={delEvent}>
        <DeleteOutlineIcon className='deleteIcon' />
        </button>
        </Tooltip>
    </div>
    </>
  );
};
export default Note;
