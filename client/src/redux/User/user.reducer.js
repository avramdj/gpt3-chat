import { LOGIN, LOGOUT } from './user.types';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const INITIAL_STATE = {
    userInfo: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
          cookies.set("token", action.token)
           return {
             ...state, loggedIn: true, userInfo: action.userInfo
           };
        case LOGOUT:
          cookies.remove("token")
           return {
              ...state, loggedIn: false, userInfo: undefined
           };
         default: return state;
    }
};

export default reducer;