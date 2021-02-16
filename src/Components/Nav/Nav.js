import { Dropdown } from 'react-bootstrap'
import React, { Fragment } from 'react'
import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const OurNav = () => {
   const Search = () => {

   }
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
                  <NavLink className="nav-link" to="/unsplash">
                     Unsplash
                  </NavLink>
                  <NavLink className="nav-link" to="/wallpaper">
                     Wallpaper
                  </NavLink>


                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/cats">
                           Cats
                       </NavLink>
                     </NavDropdown.Item>
                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/natures">
                           Natures
                       </NavLink>
                     </NavDropdown.Item>
                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/cars">
                           Cars
                       </NavLink>
                     </NavDropdown.Item>
                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/street-photograhy">
                           Street Photography
                       </NavLink>
                     </NavDropdown.Item>

                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/history">
                           History
                       </NavLink>
                     </NavDropdown.Item>

                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/food-drink">
                           Food & Drink
                       </NavLink>
                     </NavDropdown.Item>

                     <NavDropdown.Item>
                        <NavLink className="nav-link" to="/bikes">
                           Bikes
                       </NavLink>
                     </NavDropdown.Item>



                  </NavDropdown>
               </Nav>
               <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button onClick={Search} type='submit' variant="outline-success">Search</Button>
               </Form>
            </Navbar.Collapse>
         </Navbar>

      </Fragment>
   )
}

export default OurNav
