import React, { useState, useEffect } from 'react'
import { Col, Row, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./resources.styles.css"
import Resource from './resource/resource.component'
import { resources } from '../../localStorage/storage'
import { NextButton, PrevButton } from '../custombuttons/customButtons.component'
export default function Resources() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleWidthChange = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWidthChange)
    }, [windowWidth])
    if (windowWidth > 991) {
        return (
            <div className='resource-container'>
                <h3>RESOURCES</h3>
                <Row>
                    {resources.map(item => (
                        <Col key={item.id} lg={4}>
                            <Resource info={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    } else {
        return(
            <div className="resource-container">
                <h3>RESOURCES</h3>
                <Row>
                    <Col md={12}>
                        <Carousel nextIcon={<NextButton />} prevIcon={<PrevButton />}>
                            {resources.map(item => (
                                <Carousel.Item key={item.id}>
                                    <Resource info={item} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </div>
        )
    }

}
