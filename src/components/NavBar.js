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


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brenda Goodwin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="./pages/Home" className="ml-5">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/.pages/Resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./pages/Projects.js">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./pages/Contact">Contact Me!</NavLink>
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