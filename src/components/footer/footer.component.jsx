import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./footer.styles.css"
import FooterElement from './footer-element/footerElement.component'
import { footerLinks } from '../../localStorage/storage'
export default function Footer() {
    return (
        <Row style={{backgroundColor:"#151e63"}}>
            <Container>
                <Row lg={10}>
                    {footerLinks.map(item =>(
                        <Col key={item.id} lg={3}>
                            <FooterElement items={item}/>
                        </Col>
                    ))}
                </Row>
                <Row lg={2}>
                    <img style={{width:"100px",float: "right"}} alt='' src="download.png"/>
                </Row>
            </Container>
        </Row>
    )
}
