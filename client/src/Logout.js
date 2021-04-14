import { Redirect } from "react-router";
import { UserLogout } from "./isLoggedIn"

function Logout(props){
    UserLogout();
    return <Redirect to={{pathname: '/login', state: {from: props.location}}} />;
}

export default Logout;