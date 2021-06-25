import React,{useState,useEffect} from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function NavigationBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleWidthChange = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize',handleWidthChange)
    },[windowWidth])
    if(windowWidth > 991){
        return (
            <Navbar bg="light" expand="lg">
               <Container>
                    <Navbar.Brand href="#" ><img alt='' src='tick.png'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-between mr-auto">
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
    } else {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand href="#" ><img alt='' src='tick.png'/></Navbar.Brand>
                <Nav className='justify-content-center'>
                    <Button variant="outline-secondary">
                                <a alt='' href="/">Sign in</a> / <a href='/'>Sign Up</a>
                    </Button>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Features</Nav.Link>
                        <Nav.Link href="/">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link href="/">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="/">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
    }
}
