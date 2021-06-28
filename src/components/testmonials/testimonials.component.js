import React,{useState,useEffect} from 'react'
import {Row,Col,Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./testimonials.styles.css"
import Testimonial from './testimonial/testimonial.component'
import {NextButton,PrevButton} from '../custombuttons/customButtons.component'
export default function Testimonials() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleWidthChange = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize',handleWidthChange)
    },[windowWidth])
    if(windowWidth> 991){
        return (
            <div className="testimonials">
                <h3>WHAT OUR CUSTOMERS SAY</h3>
                <Row>
                    <Col lg={6} md={12}>
                        <Testimonial/>
                    </Col>
                    <Col lg={6} md={12}>
                        <Testimonial/>
                    </Col>
                </Row>
            </div>
        )
    } else {
        return(
            <Carousel nextIcon={<NextButton/>} prevIcon={<PrevButton/>}>
                <Carousel.Item>
                    <Testimonial/>
                </Carousel.Item>
                <Carousel.Item>
                    <Testimonial/>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}
