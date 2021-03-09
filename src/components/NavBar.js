import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from "react-router-dom";




const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="$brown" expand="md" className="navbar row col-md-12 offset-2 mr-0">
        <NavbarBrand href="/">Brenda Goodwin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="navbar">
            <NavItem>
              <NavLink tag={Link} to="/" className="ml-5">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resume" className="ml-5">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects" className="ml-5">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" className="ml-5">
                Contact Me!
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;