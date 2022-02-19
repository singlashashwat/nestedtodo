import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "line-through",
  },
  container: {
    listStyleType: "none !important",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListComponent = ({
  item,
  handleToggle,
  handleDelete,
  handleAddSubItem,
  index,
}) => {
  const classes = useStyles();
  return (
    <>
      {item.subitems != null ? (
        <div key={item.id}>
          <ListItem
            button
            key={item.id}
            // onClick={this.handleClick.bind(this, item.name)}
          >
            <ListItemIcon button onClick={() => handleToggle(item, index)}>
              <Checkbox
                edge="start"
                checked={item?.completed}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              button
              onClick={() => handleAddSubItem(item, index)}
            />
          </ListItem>
          <List component="div" disablePadding>
            {item.subitems.map((sitem) => {
              return (
                <ListItem button key={sitem.id} className={classes.nested}>
                  <ListItemIcon
                    button
                    onClick={() => handleToggle(item, index)}
                  >
                    <Checkbox
                      edge="start"
                      checked={item?.completed}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText key={sitem.id} primary={sitem.name} />
                </ListItem>
              );
            })}
          </List>
        </div>
      ) : (
        <ListItem
          key={item?.id}
          role={undefined}
          dense
          classes={{ container: classes.container }}
        >
          <ListItemIcon button onClick={() => handleDelete(item)}>
            <Checkbox
              edge="start"
              checked={item?.completed}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            button
            onClick={() => handleAddSubItem(item, index)}
            primary={item?.title}
            classes={{ primary: item?.completed ? classes.root : null }}
          />
          {/* <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() => handleDelete(item)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction> */}
        </ListItem>
      )}
      <Divider />
    </>
  );
};

export default ListComponent;
