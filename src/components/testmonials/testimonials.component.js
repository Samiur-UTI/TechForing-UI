import React from 'react'
import {Carousel,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./testimonials.styles.css"
import Testimonial from './testimonial/testimonial.component'
export default function Testimonials() {
    return (
        <div className="testimonials">
            <h3>WHAT OUR CUSTOMERS SAY</h3>
            <Row>
                <Col lg={6} md={12}>
                    <Testimonial/>
                </Col>
                <Col lg={6} md={12}>
                    <Testimonial/>
                </Col>
            </Row>
        </div>
    )
}
