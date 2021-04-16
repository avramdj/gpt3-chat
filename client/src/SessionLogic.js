import axios from 'axios'
import store from './redux/store'

const backendUrl = process.env.REACT_APP_GPT_URL
const protocol  = process.env.REACT_APP_GPT_PROTOCOL

export function isLoggedIn(){
    const state = store.getState()
    return state.user.userInfo !== undefined
}

export function isLoggedJWTPoll(){
    return false;
}

export function UserLogin(username, password){
    return axios({
        method: 'post',
        'Content-Type': 'application/json',
        url: `${protocol}://${backendUrl}/api/user/login`,
        validateStatus: false,
        data: {
            username: username,
            password: password
        }
    })
}

export function UserSignUp(formObj){
    return axios({
        method: 'post',
        'Content-Type': 'application/json',
        url: `${protocol}://${backendUrl}/api/user/signup`,
        validateStatus: false,
        data: formObj
    })
}

export function getUser(){
    const state = store.getState();
    console.log(state.user)
    return state.user.userInfo
}

export function getUsername(){
    return getUser()?.username
}

export function getPhotoUrl(username){
    return "http://192.168.0.10:4000/images/" + username + ".jpeg"
}