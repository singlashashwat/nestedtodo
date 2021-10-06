import React from "react";
import TextField from "@material-ui/core/TextField";

const InputComponent = ({ inputValue, handleAdd, handleChange }) => {
  return (
    <TextField
      onKeyDown={(e) => handleAdd(e)}
      onChange={handleChange}
      fullWidth
      value={inputValue ? inputValue : ""}
      id="outlined-basic"
      variant="outlined"
      placeholder="What needs to be done?"
    />
  );
};

export default InputComponent;
