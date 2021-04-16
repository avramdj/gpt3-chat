import axios from 'axios'
import store from './redux/store'

const backendUrl = process.env.REACT_APP_GPT_URL
const protocol  = process.env.REACT_APP_GPT_PROTOCOL

export function isLoggedIn(){
    const state = store.getState();
    return state.user.userInfo !== undefined
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
        data: formObj
    })
}

export function getUser(){
    const state = store.getState();
    return state.user.userInfo
}

export function getUsername(){
    return getUser()?.username
}