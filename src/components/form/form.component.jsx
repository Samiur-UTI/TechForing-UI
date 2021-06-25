import React from 'react'
import {Form,Button} from 'react-bootstrap'
import './form.styles.css'
export default function CustomForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
            <Form onSubmit={handleSubmit} className="form">
                <Form.Group controlId="url">
                    <Form.Control type="url" placeholder="www.example.com" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    Free Scan
                </Button>
            </Form>
    )
}
