import "./NavBar.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="nav-container">
                <Navbar.Brand as={Link} to="/" className="regen-brand">
                    <p>regen.</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto collapse-nav">
                        <NavLink to={`/category/1`} className="power-red">
                            power
                        </NavLink>
                        <NavLink to={`/category/2`} className="energy-blue">
                            energy
                        </NavLink>
                        <NavDropdown className="vibe-green" title="vibe" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/action/3.1">
                                1
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/action/3.2">
                                2
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/action/3.3">
                                3
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/action/3.4">
                                4{" "}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar
