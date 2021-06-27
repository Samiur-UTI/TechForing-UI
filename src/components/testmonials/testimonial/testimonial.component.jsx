import React from 'react'
import { Card,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./testimonial.styles.css"
export default function Testimonial() {
    return (
  
            <Card>
                <Container>
                    <Card.Img className="testimonial-icon" variant="top" src="tick.png"/>
                    <Card.Body>
                        <Card.Text>Lorem ipsum dolor sit amet asodj oipxzc poasdj pwqedja</Card.Text>
                    </Card.Body>
                    <Card.Img className="testimonial-photo" variant="bottom" src="Layer 1.png"/>
                </Container>
            </Card>
    )
}
