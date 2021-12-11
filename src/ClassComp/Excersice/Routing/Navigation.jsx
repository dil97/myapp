import React from 'react';
import { Link } from 'react-router-dom';
import  {Nav,Navbar,Container,}  from 'react-bootstrap';
// import "./Navigation.css"
const Navigation = () => {
    return (
        <div>
   {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/Countact">Contact</Link>
    <Nav className="me-auto">
    <Link to="/Aboutsus">About</Link>
       <Link to="/">Home</Link>
       <Link to="/Services">Servise</Link>
       <Link to="/Countact">Contact</Link>
    </Nav>
    </Container>
  </Navbar> */}
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Link to="/">Home</Link>
      <Link to="/Countact">Contact</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Aboutsus">About</Link>
    </Nav>
    </Container>
  </Navbar>

            
  

            
        </div>
    );
};

export default Navigation;