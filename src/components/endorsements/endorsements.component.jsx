import React from 'react'
import { Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './endorsements.styles.css'
export default function Endorsements() {
    return (
        <Row>
            <Row className="heading">
                <div>
                    <h3>TRUSTED BY COMPANIES LIKE:</h3>
                </div>
            </Row>
            <Row className="image-gallery">
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
                <Col lg={1} md={6}>
                    <img style={{width: '100%'}} alt='' src='amazon.png'/>
                </Col>
            </Row>
        </Row>

    )
}
