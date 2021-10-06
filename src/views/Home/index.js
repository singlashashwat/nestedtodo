import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// React Redux
import { connect } from "react-redux";
import { getData, setData, setFilter } from "../../store/home/actions";

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
  setData: setData,
  setFilter: setFilter,
};

const connector = connect(mapState, mapDispatch);
const Home = (props) => {
  const classes = useStyles();
  const [FilterData, setFilterData] = useState([]);

  const handleAlignment = (event, newAlignment) => {
    props?.setFilter(newAlignment);
    if (newAlignment == "left") {
      setFilterData(props?.data);
    } else if (newAlignment == "center") {
      setFilterData(props?.data.filter((item) => item.completed === false));
    } else {
      setFilterData(props?.data.filter((item) => item.completed === true));
    }
  };

  const handleToggle = (value) => {
    console.log(value);
    // const present = data.find((o) => o.id === value);
    // set
  };

  const handleDelete = (value) => {
    props?.setData(props?.data.filter((item) => item.id != value.id));
  };

  useEffect(() => {
    props.getData();
  }, []);

  useEffect(() => {
    if (props?.filter == "left") {
      setFilterData(props?.data);
    } else if (props?.filter == "center") {
      setFilterData(props?.data.filter((item) => item.completed === false));
    } else {
      setFilterData(props?.data.filter((item) => item.completed === true));
    }
  }, [props?.data]);

  return (
    <Grid className={classes.root}>
      <InputComponent />
      <Grid className={classes.toogle}>
        <ToogleButton
          alignment={props?.filter}
          handleAlignment={handleAlignment}
        />
      </Grid>
      {FilterData.length > 0 &&
        FilterData.map((item) => (
          <ListComponent
            item={item}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
    </Grid>
  );
};

export default connector(Home);
