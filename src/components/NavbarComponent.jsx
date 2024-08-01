import{Navbar,Container,Nav} from "react-bootstrap"

import { navLinks } from  "../data-20240730T034603Z-001/data/index.js"
import { Link, NavLink } from "react-router-dom"

const NavbarComponent = () => {
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className="fs-3 fw-bold">WereIot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-text-center">
          {navLinks.map((link) => {
            return(
              <div  className="nav-link" key={link.id}>
                <NavLink to = {link.path}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
} end >{link.text}</NavLink>
                
              </div>
            )
          }
        )}
        </Nav>
        <div className="text-center">
          <button className="btn btn-outline-danger rounded-2">Join With Us</button>
        </div>


      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavbarComponent