import React, { useState } from "react";
import "../css/Carosoul.css";
import Navbar from "./navbar";
import first from "../image/first.jpg";
import second from "../image/second.jpg";
import third from "../image/third.jpg";
import { Button } from "@material-ui/core";
import  Homepagecontent   from "./Homepagecontent";
import { Container } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  Box,
  FormControl,
} from "@material-ui/core";
// import 'second.png'
//

export default function Homepage() {
  const image = [
    {
      image: first,
      alt: "first image",
      Text: "Welcome to Quicker",
      width: "100%",
    },
    {
      image: second,
      alt: "first image",
      Text: "Welcome to Quicker",
      width: "100%",
    },
    {
      image: third,
      alt: "first image",
      Text: "Welcome to Quicker",
      width: "100%",
    },
  ];
  const sliderArr = image.length;
  let [x, setx] = useState(0);
  const goPrev = () => {
    console.log(x);
    x === 0
      ? setx(-sliderArr * 100 + 100)
      : setx((prevState) => prevState + 100);
  };

  const goNext = () => {
    x === -sliderArr * 100 + 100
      ? setx(0)
      : setx((prevState) => prevState - 100);
  };
  // setInterval(() => {
  //   goNext()
  // }, 10000);
  return (
    <>
      <Navbar />
      <Box className="body">
      <div className="jeevan-slider">
      {/* <ToastContainer/> */}
        <div className="slider">
          {image.map((children, index) => (
            <div >
              <img
                key={index}
                className="image"
                src={children.image}
                alt={children.alt}
                width={children.width}
                style={{ transform: `translateX(${x}%)` }}
              />
              <h2   className="text-over-image">{children.Text}</h2>
              {/* <h1  className="text-over-image">Quicker :)</h1> */}

            </div>
          ))}
        </div>
        <button className="prev-slide" onClick={goPrev}>
        &laquo;
        </button>
        <button className="next-slide" onClick={goNext}>
        &raquo;
        </button>
      </div>
      </Box>
      <Homepagecontent/>

    </>
  );
}
