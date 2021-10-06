import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "line-through",
  },
}));

const ListComponent = ({ item, handleToggle, handleDelete }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem
        key={item?.id}
        role={undefined}
        dense
        button
        onClick={() => handleToggle(item)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item?.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={item?.title}
          classes={{ primary: item?.completed ? classes.root : null }}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => handleDelete(item)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListComponent;
