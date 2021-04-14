import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

function NavBarUser(props) {

  const [dropdownToggled, setDropdownToggle] = useState(false);

  const [isMobileMenuShown, setMobileMenuShow] = useState(false);

  const toggleDropdown = () => {
    setDropdownToggle(!dropdownToggled);
  }

  const toggleMobileMenu = () => {
    setMobileMenuShow(!isMobileMenuShown);
  }

  return (
    <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            {/*
        Icon when menu is closed.

        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
        */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/*
        Icon when menu is open.

        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
        */}
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
            <img className="hidden lg:block h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/640px-ICloud_logo.svg.png" alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <NavLink to="/gpt"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                            GPT-3 Chat
                          </NavLink>
                  <NavLink to="/global"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                            Global chat
                          </NavLink>
              </div>
            </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            {/* Heroicon name: outline/bell */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            </button>
            {/* Profile dropdown */}
            <div className="ml-3 relative">
            <div>
                <button onClick={toggleDropdown} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none" id="user-menu" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={"http://192.168.0.10:4000/images/" + props.user.uid + ".jpeg"} alt="" />
                </button>
            </div>
            {dropdownToggled ? 
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</NavLink>
                  <NavLink to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</NavLink>
                  <NavLink to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</NavLink>
              </div>
              : <div></div>
            }
            </div>
        </div>
        </div>
    </div>
    {/* Mobile menu, show/hide based on menu state. */}
    {isMobileMenuShown ?
      <div className="" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <NavLink to="/gpt" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">GPT-3 Chat</NavLink>
            <NavLink to="/global" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Global chat</NavLink>
          </div>
      </div>
    : <div></div>}
    </nav>
  )
}
  
export default NavBarUser;