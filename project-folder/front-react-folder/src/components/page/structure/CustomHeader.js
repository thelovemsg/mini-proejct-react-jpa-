import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBarWrapper } from "../../style/CusPageStyle.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const CustomHeader = () => {
  return (
    <NavBarWrapper>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </NavBarWrapper>
  );
};

export default CustomHeader;
