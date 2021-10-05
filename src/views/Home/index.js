import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// React Redux
import { connect } from "react-redux";
import { getData, setFilter } from "../../store/home/actions";

import { makeStyles } from "@material-ui/core/styles";
import InputComponent from "../../components/input";
import ListComponent from "../../components/ListComponent";
import ToogleButton from "../../components/ToogleButton";

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
  setFilter: setFilter,
};

const connector = connect(mapState, mapDispatch);
const Home = (props) => {
  const classes = useStyles();
  console.log(props?.data);
  const [data, setData] = useState([]);
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    props?.setFilter(newAlignment);
  };

  const handleToggle = (value) => {
    console.log(value);
    // const present = data.find((o) => o.id === value);
    // set
  };

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <Grid className={classes.root}>
      <InputComponent />
      <Grid className={classes.toogle}>
        <ToogleButton alignment={alignment} handleAlignment={handleAlignment} />
      </Grid>
      {props?.data.length > 0 &&
        props?.data.map((item) => (
          <ListComponent item={item} handleToggle={handleToggle} />
        ))}
    </Grid>
  );
};

export default connector(Home);
