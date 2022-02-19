import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// React Redux
import { connect } from "react-redux";
import { getData, setData } from "../../store/home/actions";

import { makeStyles } from "@material-ui/core/styles";
import InputComponent from "../../components/input";
import ListComponent from "../../components/ListComponent";
import DialogComponent from "../../components/DialogComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  toogle: {
    textAlign: "center",
    margin: "20px",
  },
}));

// Connect states and dispatch to props
const mapState = (state) => ({
  data: state.dataReducer.data,
  filter: state.dataReducer.filter,
});

const mapDispatch = {
  getData: getData,
  setData: setData,
};

const connector = connect(mapState, mapDispatch);
let counter = 100;
const Home = (props) => {
  const classes = useStyles();
  const [FilterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleToggle = (value, index) => {
    const mapping = props?.data[index];
    const newMappings = props?.data.map((item, i) => {
      if (i !== index) return item;
      return Object.assign({}, mapping, { completed: !value.completed });
    });
    props?.setData(newMappings);
  };

  const handleDelete = (value) => {
    props?.setData(props?.data.filter((item) => item.id !== value.id));
  };

  const handleAdd = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      props?.setData([
        ...props.data,
        {
          completed: false,
          id: counter,
          title: event.target.value,
          userId: 1,
        },
      ]);
      counter = counter + 1;
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddSubItem = (value, index) => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    // if (props.data.length === 0) {
    props.getData();
    // }
  }, []);

  return (
    <Grid className={classes.root}>
      <InputComponent
        inputValue={inputValue}
        handleAdd={handleAdd}
        handleChange={handleChange}
      />
      {props.data.length > 0 &&
        props.data.map((item, index) => (
          <ListComponent
            key={item.id}
            index={index}
            item={item}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleAddSubItem={handleAddSubItem}
          />
        ))}
      {showDialog && (
        <DialogComponent
          showDialog={showDialog}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    </Grid>
  );
};

export default connector(Home);
