import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
               Naim Biswas
           </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/">
                        Home
                       </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/about">
                        About
                       </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/portoflio">
                        Portfolio
                       </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/contact">
                        Contact
                       </NavLink>
                  </li>
               </ul>
               <NavLink className="btn btn-outline-info my-2 my-sm-0" to="/login">
                  Login
                   </NavLink>
               <NavLink
                  className="btn btn-outline-info my-2 my-sm-0 ml-3"
                  to="/register"
               >
                  Register
                   </NavLink>
            </div>
         </nav>
      </div>
   )
}

export default Nav
