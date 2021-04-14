import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { UserLogin, UserLogout } from "./isLoggedIn";

function Login(props) {

  var usernameEl = null;
  var passwordEl = null;

  const handleLoginClick = () => {
    if(!usernameEl.value){
      return
    }
    UserLogin(usernameEl.value, passwordEl.value)
    window.location = '/'
  }

  return (
      <div className="h-screen">
        <div className="h-1/10">
          <NavBar user={props.user} />
        </div>
        <div className="lg:w-1/2 xl:max-w-screen-sm m-auto">
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-4xl text-gray-800 font-display font-semibold lg:text-left xl:text-5xl
                      xl:text-bold">Log in</h2>
            <div className="mt-12">
              <form onSubmit={(e) => {e.preventDefault()}}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">username</div>
                  <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="SillyGoose99" ref={(el) => { usernameEl = el}}/>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                          cursor-pointer">
                        Forgot Password?
                      </a>
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
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
  
export default Login;