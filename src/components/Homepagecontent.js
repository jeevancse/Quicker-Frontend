import React from "react";
import first from "../image/first.jpg";
import second from "../image/second.jpg";
import poco from "../image/poco.jpeg";
import samsung from "../image/samsung.jpeg";
import third from "../image/third.jpg";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import { BackgroundColor, red } from "chalk";
import { lightBlue } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  flex:{
    display: "flex",
    justifyContent:"center",

  },
  paper: {
    // borderRadius: "50%",
  
    widht:"100%",
    height: "300px",
    //   display:"flex",
    // flexDirection:"row",
    // justifyContent:"center",
    // alignItems:"center",
    // minHeight:"100vh",

  },
  box:{
    width:"100%",
    BackgroundColor:"#b3e5fc"
  },
  saprate: {
    marginTop: "8vh",
  },
  heading: {
    marginLeft: "10px",
  },
  head:{
    color:"#b71540"
  }
}));

export default function Homepagecontent() {
  const classes = useStyle();
  const content = [
    { image: poco, heading: "This is heading" },
    { image: samsung, heading: "This is second heading" },
  ];
  return (
    <>
    <h1 style={{textAlign:"center"}} className={classes.head}>
        Populor products
    </h1>
      {content.map((item, index) =>  (
          <Container  maxWidth  className={classes.saprate}>
            <Grid container spacing={5}  className={classes.box}  >  
              <Grid container item md={3} sm={3} key={index} className={classes.flex}>
                <img src={item.image} className={classes.paper}  />
              </Grid>
              <Grid container item md={3} sm={3} key={index} className={classes.flex}>
                <img src={item.image} className={classes.paper} />
              </Grid>
              <Grid container item md={3} sm={3} key={index} className={classes.flex}>
                <img src={item.image} className={classes.paper} />
              </Grid>
              <Grid container item md={3} sm={3} key={index} className={classes.flex}>
                <img src={item.image} className={classes.paper} />
              </Grid>
            </Grid>
          </Container>
        )
      )}
    </>
  );
}
