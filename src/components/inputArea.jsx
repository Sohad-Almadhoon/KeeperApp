import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [In, setIn] = useState(false);
  function updateData(event) {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function expand() {
    setIn(true);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onAdd(data);
          setData({
            title: "",
            content: "",
          });
        }}
      >
        {In && (
          <input
            name="title"
            placeholder="Title"
            onChange={updateData}
            value={data.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={In ? 3 : 1}
          onChange={updateData}
          value={data.content}
          onClick={expand}
        ></textarea>
        <Zoom in={In}>
          <Fab className="button"type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
