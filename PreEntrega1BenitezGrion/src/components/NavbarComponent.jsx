import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'
import './NavbarComponent.css'
const NavbarComponent=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand><Link className='default-text' to={'/'}>River Tienda</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Item><Link className='default-text' to={'/'}>Inicio</Link></Nav.Item>
            <Nav.Item ><Link className='default-text' to={'/Contacto'}>Contacto</Link></Nav.Item>
            <Nav.Item> <CartWidget/> </Nav.Item>
            
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link className='default-text' to={'/category/Camisetas'}>Camisetas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='default-text' to={'/category/Camperas'}>Camperas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='default-text' to={'/category/Pantalones'}>Pantalones y Shorts</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Mas Informacion</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item><Link className='rojo' to={'/formulario'}>Iniciar Sesion</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}
export default NavbarComponent