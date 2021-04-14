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

            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>
                  <NavLink to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</NavLink>
              </div>
            </div>
        </div>
        </div>
    </div>
    {/* Mobile menu, show/hide based on menu state. */}
    {isMobileMenuShown ?
      <div className="" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Login</NavLink>
            <NavLink to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Sign up</NavLink>
          </div>
      </div>
    : <div></div>}
    </nav>
  )
}
  
export default NavBarUser;