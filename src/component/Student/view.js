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
  Button,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { useParams,useHistory } from "react-router";
import { useState ,useEffect} from "react";
import axios from "axios";
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

const View = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [student,setStudent]=useState([]);
  const history = useHistory();

   useEffect(() => {
     getStudent();
   },[id]);
   async function getStudent() {
     try {
       const student = await axios.get(`http://localhost:3333/student/${id}`);
      //  console.log(student.data);
       setStudent(student.data);
     } catch (error) {
       console.log(error);
     }
   }

   function handleClick(){
     history.push("/");
   }
  return (
    <>
      <Box textAlign="center" className={classes.stuListColor} p={2}>
        <Typography variant="h4">Student Details </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                ID
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                First Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Last Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                email
              </TableCell>
              {/* <TableCell align="center" className={classes.tableHeadCell}>
                Phone No.
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                work
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Adderess
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stufname}</TableCell>
              <TableCell align="center">{student.stulname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              {/* <TableCell align="center">{student.phone}</TableCell>
              <TableCell align="center">{student.work}</TableCell>
              <TableCell align="center">{student.adderess}</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Back To Home
        </Button>
      </Box>
    </>
  );
};

export default View;
