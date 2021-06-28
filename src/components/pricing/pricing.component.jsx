import React, { useState, useEffect } from 'react'
import { Row, Col, Table, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./pricing.styles.css"
import PriceColumn from './price-column/priceColumn.component'
import { NextButton, PrevButton } from '../custombuttons/customButtons.component'
import { pricing } from '../../localStorage/storage'
export default function Pricing() {
    const indexStyle = {
        marginTop: '10%',
        borderLeft: '1px solid #d7d8e0',
        borderBottom: '1px solid #d7d8e0',
        borderRadius: '0.3em'
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleWidthChange = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWidthChange)
    }, [windowWidth])
    if (windowWidth > 991) {
        return (
            <div className="pricing-container">
                <Row>
                    <Col style={indexStyle} lg={2.4}>
                        <Table>
                            <tbody >
                                <tr>
                                    <td colSpan={4}>SENSITIVE FILE CHECKER</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>PHP INFO CHECK</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>EMAIL SPOOFING</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>CLICKJACKING</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>OPEN REDIRECT</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>XSS</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>SQL INJECTION</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>HTML INJECTION</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>SUBDOMAIN TAKEOVER</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    {pricing.map(price => (
                        <Col key={price.id} lg={2}>
                            <PriceColumn props={price} />
                        </Col>
                    ))}
                    <Col lg={2}>
                        <div className="column-custom">
                            <div className="custom-header">
                                <h5>CUSTOM</h5>
                                <h6>ON DEMAND</h6>
                            </div>
                            <p>At ceat facere ps. Temporibus arendis doloribus asperiores  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    } else {
        return (
            <Row>
                <Col style={indexStyle} lg={2.4} md={6} sm={6} xs={6}>
                    <Table>
                        <tbody >
                            <tr>
                                <td colSpan={4}>SENSITIVE FILE CHECKER</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>PHP INFO CHECK</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>EMAIL SPOOFING</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>CLICKJACKING</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>OPEN REDIRECT</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>XSS</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>SQL INJECTION</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>HTML INJECTION</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>SUBDOMAIN TAKEOVER</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col style={{marginTop:"1.5rem"}} md={6} sm={6} xs={6}>
                    <Carousel nextIcon={<NextButton />} prevIcon={<PrevButton />}>
                        {pricing.map(price => (
                            <Carousel.Item key={price.id}>
                                <PriceColumn props={price} />
                            </Carousel.Item>
                        ))}
                        <Carousel.Item>
                            <div className="column-custom">
                                <div className="custom-header">
                                    <h5>CUSTOM</h5>
                                    <h6>ON DEMAND</h6>
                                </div>
                                <p>At ceat facere ps. Temporibus arendis doloribus asperiores  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>

            </Row>
        )
    }

}
