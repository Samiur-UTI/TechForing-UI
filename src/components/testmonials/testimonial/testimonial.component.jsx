import React from 'react'
import { Card,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./testimonial.styles.css"
export default function Testimonial() {
    return (
  
            <Card>
                <Container>
                    <Card.Img className="testimonial-icon" variant="top" src="quotes.png"/>
                    <Card.Body>
                        <Card.Text>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </Card.Text>
                    </Card.Body>
                    <Card.Img className="testimonial-photo" variant="bottom" src="Layer 1.png"/>
                </Container>
            </Card>
    )
}
