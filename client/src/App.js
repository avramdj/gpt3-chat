import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import ChatPageRobot from "./ChatPageRobot";
import ChatPageGlobal from "./ChatPageGlobal";
import Home from "./Home"
import Authed from './Authed'
import Unauthed from './Unauthed'
import Login from "./Login";
import Logout from "./Logout";
import Page404 from "./Page404";

function App() {

  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Unauthed path="/login" exact component={Login}/>
          <Unauthed path="/signup" exact component={Login}/>
          <Authed path="/gpt" exact component={ChatPageRobot}/>
          <Authed path="/global" exact component={ChatPageGlobal}/>
          <Authed path="/logout" exact component={Logout}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
  );
}

export default App;