import React from 'react'
import {Jumbotron,Container} from 'react-bootstrap'
import CustomForm from '../form/form.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import './jumbotron.styles.css'
export default function Jumbo() {
    return (
        <Jumbotron fluid className='jumbo'>
              <Container>
                <h1 className='header'>Fluid jumbotron</h1>
                <p className='header'>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
                <CustomForm/>
              </Container>
        </Jumbotron>
    )
}
