import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>
          <div className="nombre">
          <Navbar.Brand className="text-white ms-3 text-decoration-none"> Happy Cake <span>🍰</span></Navbar.Brand>
          </div>
          <div className="links">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <span>🏠</span>Home 
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            <span>📗</span>Contacto
          </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}