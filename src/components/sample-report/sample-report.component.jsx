import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sample-report.styles.css'
export default function SampleReport() {
    return (
        <Row className="sample-report">
            <Col lg={5} sm="auto">
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
            <Col lg={7} sm="auto">
                <img className="report-image" alt ="" src="4.png"/>
            </Col>
        </Row>
    )
}
