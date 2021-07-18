import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';

class MyNavbar extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
    render() {
      return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Lakita Gaither</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/aboutme">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  
      );
    }
  }
  export default MyNavbar; 