import React from 'react'
import {useSelector,useDispatch }  from "react-redux"
import {incNumber,decNumber} from "./acttion/index"
import { Container,Row ,Col,Button } from 'react-bootstrap';

export default function Home() {

    const myState = useSelector((state)=>state.changeTheNumber) 
   const dispatch =useDispatch()

  return (
    <div>

<Container style={{marginTop:100}}>
      <Row>
        <Col md={4}>
        increament
        </Col>
         <Col md={4}>
          <Row>
            <Col >
            <Button onClick={()=>dispatch(incNumber())}>+</Button>
            </Col>
            <Col style={{background:"#bdc3c7"}}>
            <input  value={myState} />
            </Col>
            <Col >
              <Button  onClick={()=>dispatch(decNumber())}>-</Button>
            
            </Col>
          </Row>
         </Col>
         <Col md={4}>
         Decreament
         </Col>

      </Row>



      </Container>
    </div>
  )
}
