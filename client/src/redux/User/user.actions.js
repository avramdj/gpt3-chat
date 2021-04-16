import { LOGIN, LOGOUT } from './user.types'

export const logIn = (userInfo, token) => {
    console.log("LOGGING IN")
    console.log("user: ", userInfo)
    console.log("token: ", token)
    return {
        type: LOGIN,
        userInfo: userInfo,
        token: token
    }
}

export const logOut = () => {
    console.log("LOGGING OUT")
    return {
        type: LOGOUT,
    }
}