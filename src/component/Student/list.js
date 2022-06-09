import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { deepPurple, green, orange } from "@material-ui/core/colors";
import visibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { classes } from "istanbul-lib-coverage";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const List = () => {
  const classes = useStyles();
  const [students, setStudents] = useState([]);
  useEffect(() => {
      async function getAllStudent() {
    try {
      const students = await axios.get("http://localhost:3333/student");
      console.log(students.data);
      setStudents(students.data);
    } catch (error) {
      console.log(error);
    }
  }

    getAllStudent();
  }, []);

  const  handleDelete =async id=>{
    await axios.delete(`http://localhost:3333/student/${id}`);
    var newstudent=students.filter((item)=>{
      return item.id!== id;
    })
    setStudents(newstudent);
  }
  return (
    <>
      <Box textAlign="center" className={classes.stuListColor} p={2}>
        <Typography variant="h4">Users List </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                id
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                First Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Last Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Email
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{student.stufname}</TableCell>
                  <TableCell align="center">{student.stulname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        {/* <ViewIcon color="ptimary"></ViewIcon> */}
                        <Link
                          to={`/view/${student.id}`}
                          style={{ textDecoration: "none", color: "green" }}
                        >
                          {/* <visibilityIcon color="primary" /> */}
                          veiw
                        </Link>

                        {/* <Icon color="primary">
                        <Link to="/veiw/1">
                          <visibilityIcon style={{color:"green"}} />
                        </Link>
                      </Icon> */}
                      </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon color="primary"></EditIcon>
                        </Link>
                      </IconButton>
                    </Tooltip> */}
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(student.id)}>
                        <DeleteIcon color="secondary"></DeleteIcon>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
