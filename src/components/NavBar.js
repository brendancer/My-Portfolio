import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import { Link } from "react-router-dom";


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="row col-md-12 offset-4 mr-0">
        <NavbarBrand href="/">Brenda Goodwin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
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

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="ml-5">
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="https://github.com/brendancer" target="_blank">GitHub</NavLink>
                  </NavItem>
                </DropdownItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/brendagoodwin23/" target="_blank">LinkedIn</NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;