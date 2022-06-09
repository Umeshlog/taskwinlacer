import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { deepPurple, green } from "@material-ui/core/colors";
import List from "../Student/list";
import axios from "axios";
import { useState } from "react";

const useStyles = makeStyles({
  haddingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
  padding: {
    paddingTop: "30px",
  },
  colorer:{
    color:"red"
  }
});
const Home = () => {
  const classes = useStyles();
  const [student, setStudent] = useState({
    stufname: "",
    stulname: "",
    email: "",
    // phone: "",
    // adderess: "",
    // work:""
  });
  const [er,setEr]=useState(false)
  const [error, setError] = useState({
    stufnameer: "",
    stulnameer: "",
    emailer: "",
  });

  const [status, setStatus] = useState(false);

  function textChange(e) {
         setEr(false);
    setStudent({
 
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
     e.preventDefault();
    // if (!student.stufname || !student.stulname || !student.email) {
    //   alert("plzz fill the data");
    // } else {
    //   e.preventDefault();
    //   try {
    //     await axios.post(`http://localhost:3333/student `, student);
    //     setStatus(true);
    //     //  console.log(student.data);
    //     // setStudent(student.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    if (!student.stufname) {
      setError({ stufnameer: "plzz fill First name" });
      setEr(true);
    } else if (!student.stulname) {
      setError({ stulnameer: "plzz fill Last name" });
      setEr(true);
    } else if (!student.email) {
      setError({ emailer: "plzz fill email address" });
      setEr(true);
    } else {
      e.preventDefault();
      try {
        await axios.post(`http://localhost:3333/student `, student);
        setStatus(true);
        //  console.log(student.data);
        // setStudent(student.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box textAlign="center" className={classes.haddingColor} p={2} mb={2}>
        <Typography variant="h2">My Task</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add Users</Typography>
          </Box>
          <form noValidate>
            <Grid container specing={2}>
              <Grid className={classes.padding} item xs={12}>
                <TextField
                  autoComplete="work"
                  name="stufname"
                  variant="outlined"
                  required
                  fullWidth
                  id="work"
                  label="First Name"
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              {er ? (
                <Typography variant="p" className={classes.colorer}>
                  {error.stufnameer}
                </Typography>
              ) : (
                ""
              )}
              <Grid className={classes.padding} item xs={12}>
                <TextField
                  autoComplete="work"
                  name="stulname"
                  variant="outlined"
                  required
                  fullWidth
                  id="work"
                  label="Last Name"
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              {er ? (
                <Typography variant="p" className={classes.colorer}>
                  {error.stulnameer}
                </Typography>
              ) : (
                ""
              )}
              <Grid className={classes.padding} item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              {er ? (
                <Typography variant="p" className={classes.colorer}>
                  {error.emailer}
                </Typography>
              ) : (
                ""
              )}
              {/* <Grid item xs={12}>
                <TextField
                  autoComplete="phone"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone N0."
                  onChange={(e) => textChange(e)}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  autoComplete="work"
                  name="work"
                  variant="outlined"
                  required
                  fullWidth
                  id="work"
                  label="Your Work"
                  onChange={(e) => textChange(e)}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  autoComplete="adderess"
                  name="adderess"
                  variant="outlined"
                  required
                  fullWidth
                  id="adderess"
                  label="Your Address"
                  onChange={(e) => textChange(e)}
                />
              </Grid> */}
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
