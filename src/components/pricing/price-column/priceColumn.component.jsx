import React from 'react'
import {Col,Table,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./priceColumn.styles.css"
export default function PriceColumn({props}) {
    const {price,plan,user} = props
    return (
        <div className="column-container">
            <Col lg={12}>
                <div className="column-header">
                    <h5>{plan}</h5>
                    <p>{user}</p>
                    <h6>{price}</h6>
                </div>
                <Table hover>
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
