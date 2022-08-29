import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";

let camera,scene,renderer;
const loaders =new GLTFLoader();

 export function init(){



const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const light =new THREE.AmbientLight(0xffffff,1);
scene.add(light);
 scene = new THREE.Scene();

loaders.load("/modals/drone/scene.gltf",(gltf)=>{

	 let modal =gltf.scene
	 scene.add(modal)


})

 renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

}
// animation

function animation(  ) {


	renderer.render( scene, camera );

}