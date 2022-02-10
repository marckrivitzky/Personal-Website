import React from "react";
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function NavBar(){
	return(
		<div className="Navbar">
		
			<Navbar bg="dark" variant="dark">
			    <Container>
			   		<Nav className="me-auto">
					    <Nav.Link href="/">Home </Nav.Link>
					    <Nav.Link href="CodingProjects">Coding Projects </Nav.Link>
						<Nav.Link href="Resume">Resume</Nav.Link>
						<Nav.Link href="DigitalArt">Digital Art </Nav.Link>
																
			    	</Nav>
			    </Container>
	  		</Navbar>
		</div>
	);
}
export default NavBar;