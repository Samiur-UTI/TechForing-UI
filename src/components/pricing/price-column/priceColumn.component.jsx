import React from 'react'
import {Row,Col,Table,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./priceColumn.styles.css"
export default function PriceColumn() {
    return (
        <div className="column-container">
            <Col lg={12}>
                <Table hover>
                    <thead>
                        <div className="column-header">
                            <h4>BASIC</h4>
                            <p>1 user</p>
                            <h5>$49/month</h5>
                        </div>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><img alt='' src='tick.png'/></td>
                        </tr>
                        <tr>
                            <td style={{color:'green'}} colSpan="2">Free Trial</td>
                        </tr>
                        <tr>
                            <td><Button size="sm" variant="primary">SIGN UP</Button></td>
                        </tr>
                        
                    </tbody>
                </Table>

            </Col>
        </div>
    )
}
