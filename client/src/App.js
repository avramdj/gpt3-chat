import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChatPageRobot from "./ChatPageRobot";
import ChatPageGlobal from "./ChatPageGlobal";
import Home from "./Home"
import Authed from './Authed'
import Unauthed from './Unauthed'
import Login from "./Login";
import Logout from "./Logout";
import Page404 from "./Page404";
import Signup from "./Signup"
import Profile from './Profile'

function App() {

  return (
      <Router basename={process.env.GH_DEPLOY ? process.env.REACT_APP_GHPAGES_ROUTE : ""}>
        <Switch>
          <Unauthed path="/login" exact component={Login}/>
          <Unauthed path="/signup" exact component={Signup}/>
          <Authed path="/" exact component={Home}/>
          <Authed path="/profile" exact component={Profile}/>
          <Authed path="/gpt" exact component={ChatPageRobot}/>
          <Authed path="/global" exact component={ChatPageGlobal}/>
          <Authed path="/logout" exact component={Logout}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
  );
}

export default App;