import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './test-info.styles.css'
export default function TestInfo() {
    return (
        <div className="test-info">
            <h1>Hello</h1>
            <Row className="justify-content-md-center words">
                <Col lg={6} md={12} sm="auto">
                    <div className="content">
                        <div className="icon">
                            <img alt="" src="tick.png"/>
                        </div>
                        <div className="body">
                            <h3>PASasd</h3>
                            <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img alt="" src="tick.png"/>
                        </div>
                        <div className="body">
                            <h3>SADasdc</h3>
                            <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm="auto">
                        <div className="content">
                            <div className="icon">
                                <img alt="" src="tick.png"/>
                            </div>
                            <div className="body">
                                <h3>ASDasd</h3>
                                <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="icon">
                                <img alt="" src="tick.png"/>
                            </div>
                            <div className="body">
                                <h3>SADSAD</h3>
                                <p>DADNSAONNCOIASCIOnmasd aoisdo osai oiajsd</p>
                            </div>
                        </div>
                </Col>
            </Row>
        </div>
    )
}
