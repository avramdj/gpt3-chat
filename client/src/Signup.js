import { motion } from "framer-motion";
import { useState } from "react";
import { Redirect } from "react-router";
import NavBar from "./components/NavBar";
import { setCookie, UserSignUp } from "./SessionLogic";

function SignUp(props) {

  var usernameEl = null;
  var emailEl = null;
  var passwordEl = null;

  const [redirectLogin, setRedirectLogin] = useState(false)
  const [confirmStatus, setConfirmStatus] = useState("")

  const handleSignUpClick = () => {
    if(!usernameEl.value || !passwordEl.value || !emailEl.value){
      return
    }
    setConfirmStatus("Signing up...")
    UserSignUp({
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value
    }).then((res) => {
        if(res.data.ok){
          setConfirmStatus(res.data.message)
          setTimeout(() => {
            setRedirectLogin(true)
          }, 500)
        } else {
          setConfirmStatus(res.data.message)
        }
    }).catch((error) => {
        setConfirmStatus(`${error}`)
        console.log("Error signing up")
        console.log(error)
    })
  }

  if(redirectLogin){
    return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  }
  return (
    <div className="h-screen">
      <div className="h-1/10">
        <NavBar user={props.user} />
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm m-auto">
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl flex flex-col">
          <h2 className="text-center text-4xl text-gray-800 font-display font-semibold lg:text-center xl:text-5xl
                    xl:text-bold">Sign up</h2>
          <div className="mt-12">
            <form onSubmit={(e) => {e.preventDefault()}}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">Username</div>
                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="SillyGoose99" ref={(el) => { usernameEl = el}}/>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </div>
                </div>
                <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Enter your password" ref={(el) => { emailEl = el}}/>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input type="password" name="password" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Enter your password" ref={(el) => { passwordEl = el}}/>
              </div>
              <div className="mt-10">
                <button className="bg-gray-800 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-400
                                shadow-lg" onClick={handleSignUpClick}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <motion.div 
            className={"mt-2 self-center font-bold content-center " + 
                      (confirmStatus == "Signing up..." ? "text-yellow-500"
                      : (confirmStatus == "Done!" ? "text-green-600" : "text-red-700"))}> 
            {confirmStatus}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
  
export default SignUp;