import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
const Header = ({ history }) => {
  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#ff6a00" };
    } else {
      return { color: "#ffffff" };
    }
  };
  const navBtns = () => {
    return (
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav>
          <Nav.Link href="/">
            <button className="headerbtn" style={isActive(history, "/")}>
              <span>Home </span>
            </button>
          </Nav.Link>
          <Nav.Link href="/about">
            <button className="headerbtn" style={isActive(history, "/about")}>
              <span>About </span>
            </button>
          </Nav.Link>
          <Nav.Link href="/Work">
            <button className="headerbtn" style={isActive(history, "/Work")}>
              <span>Work </span>
            </button>
          </Nav.Link>
          <Nav.Link href="/Contact">
            <button className="headerbtn" style={isActive(history, "/Contact")}>
              <span>Contact </span>
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    );
  };
  return (
    <Navbar
      className="navbar-custom fixed-top navbar-expand-lg navbar-dark "
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img
          className="img"
          src={require("../../assets/img/logo.png")}
          alt="logo"
        />
      </Navbar.Brand>
      <div className=" ml-auto mr-0">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav   "
          className="remove-focus"
        />
        {navBtns()}
      </div>
    </Navbar>
  );
};

export default withRouter(Header);
/**    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */
