import React ,{useEffect}from 'react'
import { init } from '../util/initDronLayer'

export default function Dron() {
  
    useEffect(()=>{
        
        init()
    },[])



  return (
   <h1>asdasd</h1>
  )
}
