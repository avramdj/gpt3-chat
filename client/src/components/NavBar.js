import { isLoggedIn } from "../isLoggedIn";
import NavBarGuest from "./NavBarGuest";
import NavBarUser from "./NavBarUser";

function NavBar(props) {
    if(isLoggedIn()){
        return <NavBarUser user={{uid: 0}}/>
    } else {
        return <NavBarGuest />
    }
}

export default NavBar;