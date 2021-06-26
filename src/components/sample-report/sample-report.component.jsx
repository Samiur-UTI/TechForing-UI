import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sample-report.styles.css'
export default function SampleReport() {
    return (
        <Row className="sample-report">
            <Col lg={6} sm={12}>
                <div className="blah">
                    <h1>Sample test report</h1>
                    <h3>We only do this once dont take it for granted</h3>
                    <ul>
                        <li>Sample1</li>
                        <li>Sample1</li>
                        <li>Sample1</li>
                        <li>Sample1</li>
                    </ul>
                </div>
            </Col>
            <Col lg={6} sm={12}>
                <img className="report-image" alt ="" src="4.png"/>
            </Col>
        </Row>
    )
}
