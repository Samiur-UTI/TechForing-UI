import React from 'react'
import { Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./footerElement.styles.css"
export default function FooterElement({items}) {
    return (
        <Row>
            <Col style={{paddingTop: '10px', color: 'white'}}>
                <Row><h3>{items.header}</h3></Row>
                {items.features.map(item =>(
                    <Row key={item.id}>{item.text}</Row>
                ))}
            </Col>
        </Row>
    )
}
