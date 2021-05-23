import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  Container,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  input:{
    '&& input':{
      minWidth:"200px"
    },
    padding:"40px"
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    color: "#b71540",
  },
  heading: {
    color: "#b71540",
    marginBottom: 20,
  },
  submit: {
    marginTop: 20,
    backgroundColor: "#b71540",
    paddingLeft: 55,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 55,
    borderRadius: 20,
    '&:hover': {
      background: '#b71540',
    },
  },
}));

const Forgotpassword = () => {
  console.log("====i am here")
  const classes = useStyle();
  return (
    <>
      <Container component="main" maxWidth>
        <Typography component="h1" variant="h3" className={classes.logo}>
          Quicker
        </Typography>
        <Box display= "flex" justifyContent="center" alignItems="center" height="90vh" >
          <Box>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.heading}
            >
            </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={classes.input}
              />
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
            </Box>
            </Box>
      </Container>
    </>
  );
};

export default Forgotpassword;