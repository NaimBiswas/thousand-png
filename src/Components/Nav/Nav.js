import React, { Fragment } from 'react'
import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const OurNav = () => {
   return (
      <Fragment>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Naim Biswas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <NavLink className="nav-link" to="/">
                     Home
                       </NavLink>
                  <NavLink className="nav-link" to="/about">
                     About
                       </NavLink>
                  <NavLink className="nav-link" to="/portoflio">
                     Portfolio
                       </NavLink>
                  <NavLink className="nav-link" to="/contact">
                     Contact
                       </NavLink>
               </Nav>
               <Nav>
                  <NavLink className='nav-link ' to='/Login'>
                     <Button className='btn mr-4 ml-4' variant='outline-info'>
                        Log-In
                  </Button>
                  </NavLink>

                  <NavLink className='nav-link ' to='/register'>
                     <Button className='btn ' variant='outline-info'>
                        Register
                  </Button>
                  </NavLink>
               </Nav>
            </Navbar.Collapse>
         </Navbar>

      </Fragment>
   )
}

export default OurNav
