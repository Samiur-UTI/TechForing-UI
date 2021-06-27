import React from 'react'
import { Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './endorsements.styles.css'
import {endorsements} from "../../localStorage/storage"
import {quality} from '../../localStorage/storage'
export default function Endorsements({props}) {
    if(props === "companies"){
        return (
            <Row>
                <Row className="heading">
                    <div>
                        <h3>TRUSTED BY COMPANIES LIKE:</h3>
                    </div>
                </Row>
                <Row className="image-gallery">
                    {endorsements.map(image =>(
                        <Col key={image.id}lg={1} md={6}>
                            <img style={{width: '100%'}} alt='' src={image.source}/>
                        </Col>
                    ))}
                </Row>
            </Row>
    
        )
    } else {
        return(
            <Row style={{paddingBottom:"1.5rem"}}>
                {quality.map(item =>(
                    <Col lg={3} md={12} sm={12}>
                        <img src={item.source} alt=""/>
                        <h1>{item.heading}</h1>
                        <p>{item.text}</p>
                    </Col>
                ))}
            </Row>
        )
    }
    
}
