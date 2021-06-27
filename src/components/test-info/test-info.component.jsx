import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './test-info.styles.css'
export default function TestInfo() {
    return (
        <div className="test-info">
            <h1>WHAT THIRD EYE LOOKS FOR IN YOUR SITE</h1>
            <Row className="justify-content-md-center words">
                <Col lg={6} md={12} sm="auto">
                    <div className="content">
                        <div className="icon">
                            <img alt="" src="clipboard.png"/>
                        </div>
                        <div className="body">
                            <h3>Self-Security Assesment</h3>
                            <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img alt="" src="reportmag.png"/>
                        </div>
                        <div className="body">
                            <h3>Ongoing Vulnerabilites Management</h3>
                            <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm="auto">
                        <div className="content">
                            <div className="icon">
                                <img alt="" src="Vector Smart Object.png"/>
                            </div>
                            <div className="body">
                                <h3>Comprehensive Vulnerabilites Management</h3>
                                <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="icon">
                                <img alt="" src="real-time.png"/>
                            </div>
                            <div className="body">
                                <h3>Real Time Risk Visibility</h3>
                                <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                            </div>
                        </div>
                </Col>
            </Row>
        </div>
    )
}
