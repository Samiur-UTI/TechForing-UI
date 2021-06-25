import React,{useState} from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function NavigationBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    return (
            <Navbar bg="light" expand="lg">
               <Container>
                    <Navbar.Brand href="#" ><img alt='' src='tick.png'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-between">
                            <Nav className="justify-content-start">
                                <Nav.Link href="#">More...</Nav.Link>
                                <Nav.Link href="#">Services</Nav.Link>
                            </Nav>
                            <Nav className='justify-content-end'>
                                <Nav.Link href="#">Pricing</Nav.Link>
                                <Nav.Link href="#">Features</Nav.Link>
                                <Nav.Link href="#">Resources</Nav.Link>
                            </Nav> 
                        </Navbar.Collapse>
                        <Button variant="outline-secondary">
                            <a alt='' href="/">Sign in</a> / <a href='/'>Sign Up</a>
                        </Button>
               </Container>
            </Navbar>
    )
}
