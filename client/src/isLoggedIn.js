export function isLoggedIn(){
    return Boolean(getUser())
}

export function UserLogin(username, password){
    console.log(username)
    console.log(username)
    console.log(username)
    console.log(username)
    console.log(username)
    console.log(username)
    console.log(username)
    localStorage.setItem("reactUserLoggedIn", JSON.stringify({username: username, password: password}))
}

export function UserLogout(){
    localStorage.removeItem("reactUserLoggedIn")
}

export function getUser(){
    var res = false
    try{
        res = JSON.parse(localStorage.getItem("reactUserLoggedIn"))
    } catch (error) {
        return false
    }
    return res;
}

export function getUsername(){
    const username = getUser().username
    return username ? username : "Guest"
}