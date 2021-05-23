import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../components/signup";
import Login from "../components/Login";
import Sign from "../components/Sign";
import Homepage from "../components/Homepage";
import Forgotpassword from "../components/Forgotpassword";

import { render } from "react-dom";
import Homepagecontent from "../components/Homepagecontent";
import Hooks from "../components/Hooks";
import Emailverify from "../components/Emailverify";
import { Redirect } from "react-router-dom";
import  Toaster  from '../commonservice/toast'
export default function Routeting() {
  return (
    <>
      <Router>
        <Toaster/>
        <Switch>
        <Route exact path="/home" component={Homepage} />
          <Route exact path="/forgot-password" component={Forgotpassword} />
          <Route exact path="/verify" component={Emailverify} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/hook" component={Hooks} />
          <Route exact path="/sign" component={Sign} />
          <Route exact path="/content" component={Homepagecontent} />
          <Route render={() => <Redirect to={{ pathname: "/home" }} />} />
        </Switch>
      </Router>
    </>
  );
}
