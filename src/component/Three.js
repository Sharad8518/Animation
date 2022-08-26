import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'


function Cube(props){

    const mesh =useRef();
    useFrame(()=>(mesh.current.rotation.x +=0.01));
    const[hovered,setHoverd] =useState(false)
    const[active,setActive] =useState(false)
    const { scale } = useSpring({ scale: active ? 1.5 : 1 })

    return(
        <animated.mesh ref={mesh}
        onPointerOver={(event)=>setHoverd(true)}
        onPointerOut={(event)=>setHoverd(false)}
        onClick ={(event)=>setActive(!active)}
        scale={scale}
        {...props   }
        >
          <boxGeometry args={[2,2,2]} />
          <meshBasicMaterial color={hovered?"hotpink":  "orange"}/>
        </animated.mesh>
    )

}


export default function Three() {

    

  return (
    <Canvas>
        <ambientLight/>
        <pointLight position={[10,10,10]} />
        <Cube position={[-1.2,0,0]}/>
        <Cube  position={[1.2,0,0]}/>
    </Canvas>
  )
}
