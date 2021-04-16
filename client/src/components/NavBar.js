import NavBarGuest from "./NavBarGuest";
import NavBarUser from "./NavBarUser";
import { isLoggedIn } from '../SessionLogic'

function NavBar(props) {
    if(isLoggedIn()){
        return <NavBarUser />
    } else {
        return <NavBarGuest />
    }
}

export default NavBar;