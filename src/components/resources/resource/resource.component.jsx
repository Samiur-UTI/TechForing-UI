import React from 'react'
import { Card,Button,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./resource.styles.css"
export default function Resource({info}) {
    return (
        <Container>
            <Card className="card" key={info.id}>
                <Card.Img variant="top" src={info.source} />
                <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Text>{info.text}</Card.Text>
                    <Button variant="primary">Learn more</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
