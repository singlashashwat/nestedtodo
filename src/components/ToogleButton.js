import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ToggleButtons({ alignment, handleAlignment }) {
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left">All</ToggleButton>
      <ToggleButton value="center">Active</ToggleButton>
      <ToggleButton value="right">Completed</ToggleButton>
    </ToggleButtonGroup>
  );
}
