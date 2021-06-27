import React from 'react'
import { Button, Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./freeTrial.styles.css"
export default function FreeTrial() {
    return (

        <div className="trial-wrapper">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <img style={{ width: '50%' }} alt="" src="desktop-mockup.png" />
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="trial-quote">
                        <h1 style={{ color: 'white' }}>READY TO GET STARTED WITH YOUR FREE 30 DAY TRIAL?</h1>
                        <Button variant='light'>Try for free</Button>
                    </div>
                </Col>
            </Row>
        </div>


    )
}
