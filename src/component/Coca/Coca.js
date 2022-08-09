import React from 'react'
import "./Coca.css"
import ImgPath from "../../Image/coca.png"

export default function Coca() {
  return (
    <div className='main'>

   <div className='card'>
<div className='circle'>

</div>
<div className='content'>
    <h2>Pesi Coca</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    <a href='#'>Buy Now</a>
</div>
<img src={ImgPath}  className="img"/>
   </div>

    </div>
  )
}
