import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Note(props) {
  function deleted(){
    props.ondelete(props.id)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleted}>
        <DeleteIcon style={ {fontSize :"35px"}}/>
      </button>
    </div>
  );
}

