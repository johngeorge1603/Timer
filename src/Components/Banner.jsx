import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Banner() {
  return (
    <div>

    <Row>
        <Col className='text-center bg-success'>
            <h1 className='text-light' style={{fontSize:'80px'}}>TIMER</h1>
        </Col>
        <Col className='text-center bg-danger'>
            <h1 className='text-light' style={{fontSize:'80px'}}>TIMER</h1>
        </Col>
        <Col className='text-center bg-success'>
            <h1 className='text-light' style={{fontSize:'80px'}}>TIMER</h1>
        </Col>
        <Col className='text-center bg-danger'>
            <h1 className='text-light' style={{fontSize:'80px'}}>TIMER</h1>
        </Col>
    </Row>



    </div>
  )
}

export default Banner