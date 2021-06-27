import React from 'react'
import { Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./resources.styles.css"
import Resource from './resource/resource.component'
import { resources } from '../../localStorage/storage'
export default function Resources() {
    return (
        <div className='resource-container'>
            <Row>
                {resources.map(item =>(
                    <Col key={item.id} lg={4}>
                        <Resource info={item}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
