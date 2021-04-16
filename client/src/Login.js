import NavBar from "./components/NavBar";
import { UserLogin } from "./SessionLogic";
import GoogleLogin from 'react-google-login'
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { connect } from 'react-redux'
import { logIn } from './redux/User/user.actions'

function Login(props) {

  var usernameEl = null;
  var passwordEl = null;

  const [confirmStatus, setConfirmStatus] = useState("")
  const [redirectHome, setredirectHome] = useState(false)

  const handleLoginClick = () => {
    if(!usernameEl.value || !passwordEl.value){
      return
    }
    setConfirmStatus("Logging in...")
    UserLogin(usernameEl.value, passwordEl.value)
      .then((res) => {
        if(res.data.ok){
          console.log(res.data)

          const userInfo = res.data.user
          const token = res.data.token

          props.logIn(userInfo, token)

          setConfirmStatus(res.data.message)
          setTimeout(() => {
            setredirectHome(true)
          }, 500)
        } else {
          setConfirmStatus(res.data.message)
        }
    }).catch((error) => {
        setConfirmStatus("Request error")
        console.log("Error logging in")
        console.log(error.reponse)
    })
  }

  const responseGoogle = (reponse) => {
    console.log(reponse)
  }

  if(redirectHome){
    return <Redirect to={{pathname: '/', state: {from: props.location}}} />
  }

  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar user={props.user} />
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm m-auto">
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-gray-800 font-display font-semibold lg:text-center xl:text-5xl
                    xl:text-bold">Log in</h2>
          <div className="mt-12 flex flex-col">
            <div>
              <form onSubmit={(e) => {e.preventDefault()}}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">Username</div>
                  <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="SillyGoose99" ref={(el) => { usernameEl = el}}/>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <Link to="forgot-password"className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                          cursor-pointer">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <input type="password" name="password" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Enter your password" ref={(el) => { passwordEl = el}}/>
                </div>
                <div className="mt-10">
                  <button className="bg-gray-800 text-gray-100 p-4 w-full rounded-full tracking-wide
                                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-400
                                  shadow-lg" onClick={handleLoginClick}>
                    Log In
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-5 self-center">
              <GoogleLogin className="font-bold"
                clientId="408678250871-16cqcdjpg1hggln0si3o2j4dcenl4opj.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ? <Link to="/signup" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</Link>
            </div>
            <motion.div 
            className={"mt-2 self-center font-bold content-center " + 
                      (confirmStatus == "Logging in..." ? "text-yellow-500"
                      : (confirmStatus == "Success" ? "text-green-600" : "text-red-700"))}> 
            {confirmStatus}
          </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (userInfo, token) => dispatch(logIn(userInfo, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);