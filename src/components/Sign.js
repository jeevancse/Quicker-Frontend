import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
// import { ErrorContent, InfoComponent, SuccessContent } from './style';
import Login from "./Login";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Typography,
  Grid,
  TextField,
  Button,
  InputLabel,
  Box,
  FormControl,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { notifyError, notifySuccess } from "../commonservice/toast";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";


const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backButton: {},
  heading: {
    color: "#b71540",
    marginBottom: 20,
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    color: "#b71540",
  },
  submit: {
    marginTop: 20,
    backgroundColor: "#b71540",
    paddingLeft: 55,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 55,
    borderRadius: 20,
    "&:hover": {
      background: "#b71540",
    },
  },
}));


export default function Sign() {
  const classes = useStyle();
  const history = useHistory();
  var intialValue = { email: "", password: "", confirmPassword: "" };
  const [state, setState] = useState(intialValue);
  const chengeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  // const notify = (message) => {
  //   toast.success(message);
  // };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { email, password, confirmPassword } = state;
      const resp = await axios.post(`https://quicker-backend-app.herokuapp.com/pub/register`, {
        email,
        password,
        confirmPassword,
      });
      if (resp?.status === 200) {
        localStorage.setItem("verifyToken", resp.data.data.verifyToken);
        history.push("/login");
        notifySuccess(resp.data.message);
      }
    } catch (err) {
      if (err?.response?.data?.code === 400) {
        notifyError(err.response.data.message);
      } else if (err?.response?.data?.code === 403) {
        notifyError(err.response.data.message);
      }else if (err?.response?.data?.errors) {
        notifyError(err.response.data.errors[0].messages[0]);
      }
    }
  };
  return (
    <>
      <Box>
      {/* <ToastContainer /> */}
        <Typography variant="h3" className={classes.logo}>
          Quicker
        </Typography>
        <Grid container spacing={2}>
          
          <Grid container item xs={1} md = {4} sm ={3}></Grid>
          <Grid container item xs={10} md = {4} sm ={6} className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.heading}
            >
              Sign In
            </Typography>
            <form autoComplete="off" onSubmit={onSubmitHandler}>
              <FormControl fullWidth>
                <InputLabel shrink variant="standard">
                  Email
                </InputLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={chengeHandler}
                  value={state.email}
                  id="name"
                  name="email"
                ></TextField>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel shrink variant="standard">
                  Password
                </InputLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  value={state.password}
                  onChange={chengeHandler}
                  id="name"
                  name="password"
                ></TextField>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel shrink variant="standard">
                  Confirm Password
                </InputLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={chengeHandler}
                  value={state.confirmPassword}
                  id="name"
                  name="confirmPassword"
                ></TextField>
              </FormControl>
              <Typography align="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </Typography>
            </form>
            <Link to ="/login"><Button>Back</Button></Link>
          </Grid>
          <Grid container item xs={1} md = {4} sm ={3}></Grid>
        </Grid>
      </Box>
    </>
  );
}
