<template>
  <canvas id="bg"></canvas>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


//variables used in js:
let theRenderer, theScene, theCamera, theControls, theLoader, theLoader2, theModel, theModel2, theLoader3, theModel3, arrayStar

let starArray = new Array;
let starIndex = 0;
// const gui = new dat.GUI()
let mouseX = 0
let mouseY = 0
let targetX = 0
let targetY = 0
const windowHaldfX = window.innerWidth / 2
const windowHaldfY = window.innerHeight / 2
const clock = new THREE.Clock()

let cameraX = 0
let cameraY = 0
let cameraZ = 30

export default {
    name: 'background',
    methods: {
        init: function(){
            const scene = new THREE.Scene()
            theScene = scene
            theScene.fog = new THREE.FogExp2(0x252280, 0.01)
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
            theCamera = camera
            const renderer = new THREE.WebGLRenderer({
                canvas: document.querySelector('#bg')
            })
            theRenderer = renderer
            theRenderer.setPixelRatio(window.devicePixelRatio)
            theRenderer.setSize(window.innerWidth,window.innerHeight)
            theCamera.position.setZ(cameraZ);
            theCamera.position.setX(cameraX);
            theCamera.position.setY(cameraY);

            theRenderer.render(theScene,theCamera)

            // light
            const pointLight = new THREE.PointLight(0x07a7b5)
            pointLight.position.set(30,0,-30)
            pointLight.intensity = 1.25
            pointLight.castShasow = true;
            theScene.add(pointLight)

            const pointLight2 = new THREE.PointLight(0xfc7c91)
            pointLight2.position.set(-55.18,-14.15,32.17)
            pointLight2.intensity = 1.02
            pointLight2.castShasow = true;
            theScene.add(pointLight2)

            const ambientLight = new THREE.AmbientLight(0x1b0b40);
            ambientLight.intensity = 3.23
            theScene.add(ambientLight)

            const directionalLight = new THREE.DirectionalLight(0x7107b3,0.36);
            directionalLight.position.set(0.86,1.53,6.82)
            directionalLight.castShasow = true;
            theScene.add(directionalLight);

            const lightHelper = new THREE.PointLightHelper(pointLight)
            const lightHelper2 = new THREE.PointLightHelper(pointLight2)
            const gridHelper = new THREE.GridHelper(400, 100);
            gridHelper.position.y -= 25
            // theScene.add(lightHelper,lightHelper2)

            const controls = new OrbitControls(theCamera, theRenderer.domElement);
            theControls = controls
        },
        addStar: function(){
            var colour = new THREE.Color();
            var randomColor = "0x" + Math.floor(Math.random()*16777215).toString(16);
            colour.setHex(randomColor)
            var size = (Math.random() * (0.30 - 0.10) + 0.1).toFixed(2)
            const geometry = new THREE.SphereGeometry(size,24,24);
            const material = new THREE.MeshStandardMaterial({color:colour})
            const star = new THREE.Mesh(geometry, material);

            const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
            star.position.set(x,y,z)
            theScene.add(star)
            starArray[starIndex] = star
            starIndex++
        },
        addBackground: function(){
            // const gradientBackground = new THREE.TextureLoader().load('/three-assets/background.jpg');
            // theScene.background = gradientBackground;
            theScene.background = new THREE.Color(0xececec);
        },
        animate:function(){
            requestAnimationFrame(this.animate);

            //moving camera w/ mouse
            targetX = mouseX * .01
            targetY = mouseY * .01
            theCamera.position.setY(cameraY - targetY);
            theCamera.position.setX(cameraX - targetX);

            theControls.update();
            theRenderer.render(theScene, theCamera);

            //star move forward
            if(starArray){
                for(var i=0; i < starArray.length; i++){
                    starArray[i].position.z += 0.01;
                }
            }
            //come back to start when out of sight
            if(starArray){
                for(var i=0; i < starArray.length; i++){
                    if(starArray[i].position.z > 30){
                        starArray[i].position.z = -40;
                    }
                }
            }
        },
        // add MouseMove event
        onDocumentMouseMove: (event) => {
            mouseX = (event.clientX -windowHaldfX)
            mouseY = (event.clientY -windowHaldfY)
        }
    },
    mounted() {
    this.init();
    Array(800).fill().forEach(this.addStar)
    this.animate();
    this.addBackground();

    document.addEventListener('mousemove',this.onDocumentMouseMove)
  }
}
</script>

<style scoped>
    #bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -999;
      mix-blend-mode: exclusion;
    }
</style>