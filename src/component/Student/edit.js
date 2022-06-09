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
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import { deepPurple, green } from "@material-ui/core/colors";
import List from "../Student/list";

const useStyles = makeStyles({
  haddingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});
const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [student, setStudent] = useState({
    stufname: "",
    stulname: "",
    email: "",
  });

  useEffect(() => {
    getStudent();
  }, [id]);
  async function getStudent() {
    try {
      const student = await axios.get(`http://localhost:3333/student/${id}`);
      //  console.log(student.data);
      setStudent(student.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/student/${id} `, student);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  function textChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <Box textAlign="center" className={classes.haddingColor} p={2} mb={2}>
        <Typography variant="h2">React CRUD With API call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form noValidate>
            <Grid container specing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="Id"
                  autoFocus
                  value={student.id}
                  disabled
                />
              </Grid> */}
              <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  // label="ID"
                  value={`${student.id}`}
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="stuname"
                  name="stufname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  // label="Name"
                  value={student.stufname}
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="stuname"
                  name="stulname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  // label="Name"
                  value={student.stulname}
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
             
                  value={student.email}
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="phone"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  value={student.phone}
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="work"
                  name="work"
                  variant="outlined"
                  required
                  fullWidth
                  id="work"
                  value={student.work}
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} p={2}>
                <TextField
                  autoComplete="adderess"
                  name="adderess"
                  variant="outlined"
                  required
                  fullWidth
                  id="adderess"
                  value={student.adderess}
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
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => handleClick(e)}
            >
              Back To Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
