import React from "react";
import ReactDOM, { render } from "react-dom";
// import App from "./components/App";
import Routeting from './routes/index'
import { BrowserRouter } from "react-router-dom";
import { ToasterGlobalStyles } from './commonservice/globalCSS'

const AppRender = () => (
  <>
  <ToasterGlobalStyles/>
    <BrowserRouter>
      <Routeting/>
    </BrowserRouter>
  </>
);

ReactDOM.render(<AppRender />, document.getElementById("root"));
