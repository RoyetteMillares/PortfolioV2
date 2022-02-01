import "./less/app.less";
import THREE from "./vendor/threejs/build/three";



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);


console.log(scene);

console.log(camera);