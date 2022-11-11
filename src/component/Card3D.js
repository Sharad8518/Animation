import React from 'react'
import { Container, Row ,Col,Card} from 'react-bootstrap'
import "./Card3D.css"

export default function Card3D() {
  return (
    <Container className='box'>
    <Row>
    <Col md={4}>
    <div className="boxParent">
    <div className="boxChild">
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
   
    </div>   
    </div>


    </Col>
    <Col  md={4}></Col>
    <Col  md={4}></Col>
    </Row>


    </Container>
  )
}
