import NavBarGuest from "./NavBarGuest";
import NavBarUser from "./NavBarUser";

function NavBar(props) {
    if(props.user){
        return <NavBarUser user={props.user}/>
    } else {
        return <NavBarGuest />
    }
}

export default NavBar;