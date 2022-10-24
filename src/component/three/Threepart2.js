import React,{useRef} from 'react'
import{Canvas,useThree,useFrame,extend}  from "@react-three/fiber"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CubeTextureLoader, LinearMipMapLinearFilter, RGBAFormat, WebGLCubeRenderTarget,CubeCamera } from 'three';

extend({ OrbitControls });
const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};


function Skybox(){
  const {scene}  =useThree()
  const loader = new CubeTextureLoader();
  
  const texture =loader.load([
   "/1.jpg",
   "/2.jpg",
   "/3.jpg",
   "/4.jpg",
   "/5.jpg",
   "/6.jpg",
  ])

  scene.background =texture
  return null;
}


function Sphare(){

  const {gl,scene} =useThree();
  
  const cubeRenderTarget =new WebGLCubeRenderTarget(512,{
   
    format:RGBAFormat,
    generateMipmaps:true,
    minFilter:LinearMipMapLinearFilter
  });

  const cubeCamera = new CubeCamera(1,1000, cubeRenderTarget);
  cubeCamera.position.set(0,0,0);
  scene.add(cubeCamera);

  useFrame(()=> cubeCamera.update(gl,scene));
   
  return(
    <mesh visible position={[0,0,0]}  rotation={[0,0,0]}  castShadow>
     <sphereGeometry attach='geometry'  args={[2,32,32]}/>
     <meshBasicMaterial
     attach="material"
     envMap={cubeCamera.renderTarget.texture}
     color="white"
     roughness={0.1}
     metainess ={1}
   />
    </mesh>
  )
}


export default function Threepart2() {

  return (
    <Canvas>
      <directionalLight intensity={0.5}/>
    <Sphare/>  
    <Skybox/>
    <CameraControls/>
 </Canvas>
  )
}
