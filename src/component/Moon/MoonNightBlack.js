import React from 'react'
import bg from "../../Image/bg.jpg"
import moonNight from "../../Image/moonNight.png"
import moutain from "../../Image/moutain.png"
import road from "../../Image/road.png"
import "./MoonNightBlack.css"

export default function MoonNightBlack() {
  return (
    <>
    <section>
       <img src={bg} className="bg" />
       <img src={moonNight} className="moonNight" style={{width:"20%",height:"42%"}}/>
       <img src={moutain} className="moutain"/>
       
       <h2 className='text'>Moon Night</h2>
    </section>


    </>
  )
}
