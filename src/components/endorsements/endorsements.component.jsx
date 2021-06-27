import React from 'react'
import { Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './endorsements.styles.css'
export default function Endorsements() {
    return (
        <Row className="image-gallery">
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
            <Col lg={1} md={6}>
                <img style={{width: '80%'}} alt='' src='amazon.jpeg'/>
            </Col>
        </Row>
    )
}
