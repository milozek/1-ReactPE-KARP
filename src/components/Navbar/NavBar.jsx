import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import goldenBrand from "../../assets/golden-brand.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav-container">
        <Navbar.Brand href="#home">
          {"regen."}

          <img className="regen-brand" src={goldenBrand} alt="Golden Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto collapse-nav">
            <Nav.Link className="power-red" href="#home">
              power
            </Nav.Link>
            <Nav.Link className="energy-blue" href="#link">
              energy
            </Nav.Link>
            <NavDropdown
              className="vibe-green"
              title="vibe"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">4 </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
