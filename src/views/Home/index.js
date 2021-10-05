import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

const Home = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const handleToggle = (value) => {
    console.log(value);
    // const present = data.find((o) => o.id === value);
    // set
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 10)));
  }, []);

  return (
    <Grid className={classes.root}>
      <InputComponent />
      <Grid className={classes.toogle}>
        <ToogleButton />
      </Grid>
      {data.length > 0 &&
        data.map((item) => (
          <ListComponent item={item} handleToggle={handleToggle} />
        ))}
    </Grid>
  );
};

export default Home;
