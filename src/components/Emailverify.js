import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import axios from "axios";
import WarningIcon from "@material-ui/icons/Warning";

const useStyle = makeStyles((theme) => ({
  paper: {
    height: "55vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },
  logo: {
    color: "#b71540",
    marginLeft: "10px",
    marginTop: "10px",
  },
  back: {
      // fontSize:"30px"
  },
}));

export default function Emailverify() {
  const classes = useStyle();
  var initialState = 0
 const [resp, setstate] = useState({})

  useEffect( async () => {
    try {
      var verifyToken = localStorage.getItem("verifyToken");
      const status = await axios.get(
        `https://quicker-backend-app.herokuapp.com/pub/verify?token=${verifyToken}`
      );
      console.log(status,"=====")
      if(status.status === 200) {
        setstate({...resp, status : 200})
      }
      console.log("===", resp);
    } catch (err) {
      if (err?.response?.status === 500) {
        console.log("something  went wrong"); 
      }
    }
  }, []);
  // console.log(state)

  return (
    <>
      <Box>
        <Typography component="h1" variant="h3" className={classes.logo}>
          Quicker
        </Typography>
        <Box className={classes.paper}>
          <Box>
            {resp?.status === 200 ? (
              <Box>
                <Typography
                  align="center"
                  color="primary"
                  className={classes.verify}
                >
                  <VerifiedUserIcon />
                </Typography>
                Thank You . Your Email is Verifyed Successfully!
              </Box>
            ) : (
              <Box>
                <Typography
                  align="center"
                  color="error"
                  className={classes.verify}
                >
                  <WarningIcon />
                </Typography>
                Sorry . Your Email Verification Link Expired.
              </Box>
            )}
          </Box>
        </Box>
        <Typography align="center">

        <Link to='/login' className={classes.back}><Button  >Go to Login Page</Button></Link>

        </Typography>
      </Box>
    </>
  );
}
