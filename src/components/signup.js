import React from "react";
import "../css/App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './Login'
import {  Route, Switch, Link } from "react-router-dom";


class Signup extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  inputChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    axios
      .post("http://localhost:3005/pub/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.message);
      })
      .catch(function (error) {
        console.log("=======error", error);
        console.log(error);
      });


  };
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item">
          <h2> Register Here</h2>
          <form onSubmit={this.onSubmit}>
            <div>
              <label >First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Type here"
                value={firstName}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Type here"
                value={lastName}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Type here"
                value={email}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Type here"
                value={password}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Type here"
                value={confirmPassword}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            <div className="anchor">
              {/* <a href="/logins">Already have a account ?</a>
               */}
               <Link to = "/login">Login ? </Link>
            </div>
          </form>
        </div>
        <div className="grid-item"></div>
      </div>
    );
  }
}
export default Signup;
