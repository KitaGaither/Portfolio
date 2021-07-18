import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import mecircle from '../assets/images/mecircle.png';

class Landing extends Component {
    render() {
        return(
          <React.Fragment>
            <div style={{width: '100%', margin: 'auto'}}>
                <Row className="landing-grid">
                    <Col col={12}>
                        <img 
                        src={mecircle}
                        alt="lakita gaither"
                        className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>JavaScript | HTML/CSS | Bootstrap | MongoDB | 
                               Express | React | React Native | Node 
                            </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/lakitagaither/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/KitaGaither" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://www.freecodecamp.org/kitagaither" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Youtube
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                                */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </React.Fragment>
        );
    }
}
export default Landing;
/*
class App extends Component {
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
  */