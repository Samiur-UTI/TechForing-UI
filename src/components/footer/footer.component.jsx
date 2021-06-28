import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./footer.styles.css"
import FooterElement from './footer-element/footerElement.component'
import { footerLinks } from '../../localStorage/storage'
export default function Footer() {
    return (
        <Row style={{ backgroundColor: "#151e63" }}>
            <Container>
                <Row lg={10}>
                    {footerLinks.map(item => (
                        <Col key={item.id} lg={3}>
                            <FooterElement items={item} />
                        </Col>
                    ))}
                </Row>
                <Row className="footer-image" lg={2}>
                    <div>
                        <img alt='' src="social icons.png"/>
                    </div>
                </Row>
            </Container>
        </Row>
    )
}
