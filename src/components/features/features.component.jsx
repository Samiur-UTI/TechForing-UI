import React from 'react'
import {Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './features.styles.css'
import {features} from '../../localStorage/storage'
export default function Features() {
    const firsttwo = features.slice(0,2)
    const nexttwo = features.slice(2,4)
    const lastone = features.slice(4)
    console.log(firsttwo,nexttwo,lastone)
    return (
        <div className="features">
            <Row>
                <Col lg={6} md={12} sm="auto">
                    <div className='image-container'>
                        <img className='feature-image' alt=''src="mockup-desktop.png"/>
                    </div>
                </Col>
                <Col lg={6} md={12} sm="auto">
                    <Row className="justify-content-lg-around">
                            <div className="feature-caption">
                                <h2>Wala this is what you will get from us!</h2>
                                <p>Sama wala pola asoidjkmc</p>
                            </div>

                        <Row lg={6} md="auto">
                            <Col lg={6} md={12}>
                                {firsttwo.map(item =>(
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <img alt='' src={item.source}/>
                                        </div>
                                        <div className="feature-words">
                                            <p>{item.paragraph}</p>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            <Col lg={6} md={12}>
                                {nexttwo.map(item =>(
                                        <div className="feature">
                                            <div className="feature-icon">
                                                <img alt='' src={item.source}/>
                                            </div>
                                            <div className="feature-words">
                                                <p>{item.paragraph}</p>
                                            </div>
                                        </div>
                                ))}
                            </Col>
                        </Row>
                        <Row className="feature-single" lg={3} md="auto">
                            <Col lg={12} md={12}>
                                {lastone.map(item =>(
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <img alt='' src={item.source}/>
                                        </div>
                                        <div className="feature-words">
                                            <p>{item.paragraph}</p>
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
