import React, { useState } from 'react'
import '../App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  NavbarText
} from "reactstrap";

function LandingPage() {

  return (
    <div>
      <Navbar style={{backgroundColor: '#B6ACD1'}} fixed="top" dark expand={true}>
        <NavbarBrand href="/">catnip.nu</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/signup/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="home">
                Map
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="about">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      
      <h3>Share events with</h3>
      <h1>catnip.nu</h1>

    </div>

  );
}

export default LandingPage