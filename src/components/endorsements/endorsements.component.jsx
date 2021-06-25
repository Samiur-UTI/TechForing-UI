import React from 'react'
import { Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './endorsements.styles.css'
export default function Endorsements() {
    return (
        <Row className="image-gallery">
            <Col md={1.5} >
                <img alt='' src='tick.png'/>
            </Col>
            <Col md={1.5} >
                <img alt='' src='tick.png'/>
            </Col>
            <Col md={1.5} >
                <img alt='' src='tick.png'/>
            </Col>
            <Col md={1.5} >
                <img alt='' src='tick.png'/>
            </Col>
            <Col md={1.5} >
                <img alt='' src='tick.png'/>
            </Col>
            <Col md={1.5} >
            </Col>
            <Col md={1.5} >
                <img alt='' src='tick.png'/>
            </Col>
        </Row>
    )
}
