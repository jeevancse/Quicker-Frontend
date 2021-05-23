import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  InputLabel,
  FormControl,
  Container,
} from "@material-ui/core";
import axios from "axios";
import { notifyError, notifySuccess } from "../commonservice/toast";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  // body: {
  //   backgroundColor: "#d1d8e0",
  // },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    color: "#b71540",
  },
  heading: {
    color: "#b71540",
    marginBottom: 20,
  },
  paper: {
    marginTop: 130,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // width: '60ch',
  },
}));

const Login = () => {
  const classes = useStyle();
  const history = useHistory();
  const initialState = { email: "", password: "" };
  const [state, setstate] = useState(initialState);

  const changeHandler = (e) => {
    // e.preventDefault()
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    try {
      const { email, password } = state;
      e.preventDefault();
      const login = await axios.post("http://localhost:3005/pub/login", {
        email,
        password,
      });
      if (login?.status === 200) {
        history.push("/home");
        notifyError(login.data.message);
      }
    } catch (err) {
      console.log(err?.response?.data?.code);
      if (err?.response?.data?.code === 400) {
        notifyError(err.response.data.message);
      } else if (err?.response?.data?.code === 401) {
        notifyError(err.response.data.message);
      }
    }
  };

  return (
    <>
       <Box>
        {/* <ToastContainer /> */}
        <Typography component="h1" variant="h3" className={classes.logo}>
          Quicker
        </Typography>
        <Grid container spacing={3}>
          <Grid container item xs={1} md = {4} sm ={3}></Grid>
          <Grid container item xs={10} md = {4} sm ={6} className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.heading}
            >
              Log In
            </Typography>
            <form noValidate onSubmit={onSubmitHandler}>
              <FormControl fullWidth>
                <InputLabel shrink variant="standard">
                  Email
                </InputLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.textField}
                  type="email"
                  onChange={changeHandler}
                  value={state.email}
                  id="email"
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
                  onChange={changeHandler}
                  id="name"
                  name="password"
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
                  Log In
                </Button>
              </Typography>
            </form>
            <Link to='/sign'><Button  >Sign Up</Button></Link>
          </Grid>
          <Grid container item xs={1} md = {4} sm ={3}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
