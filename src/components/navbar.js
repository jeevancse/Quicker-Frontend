


import React from 'react';
import "../css/navbar.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { bold } from 'chalk';
// import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:"#b71540",
    marginBottom:"63px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bg:{
    backgroundColor:""

  },
  title: {
    flexGrow: 1,
  },
  heading: {
    color: "#b71540",
    flexGrow: 1,
  },
  
  buttom:{
    fontSize:"2em" ,
    // fontWeight:"bold",
    // color:"#b71540"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="box">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h3" className={classes.heading}>
            Quicker
          </Typography>
           <Link to='/login' className={classes.buttom}><Button>Login</Button></Link>
           <Link to='/sign' className={classes.buttom}><Button>Sign Up</Button></Link>

          {/*  */}
          {/* <Button className= {classes.button} href="/sign">Sign Up</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
