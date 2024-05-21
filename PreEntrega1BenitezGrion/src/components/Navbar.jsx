import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget.jsx'

const NavbarFunction=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Mi Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
            <Nav.Link> <CartWidget/> </Nav.Link>
            <NavDropdown title="Navegacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#">Acerca de Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Mas Informacion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}
export default NavbarFunction;