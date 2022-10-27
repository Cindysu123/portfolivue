<template>
  <div class="threeD">
    <p>You can click the images and drag around models to see them in different perspective</p>
    <transition-group tag="div" name="list" appear>
      <a href="https://my.spline.design/city-55808760887c76c2ce273a763127ca65/" target="_blank" key="1">
        <img class="img1" src="../assets/img/3D/city.jpg" alt="img">
      </a>
      <a href="https://my.spline.design/bunny-fe989f0d7478e2b311f751d76e0b325e/" target="_blank" key="2">
        <img class="img2" src="../assets/img/3D/bunnyPic.jpg" alt="img">
      </a>
      <a href="https://cindy-mp-2020.github.io/Three_Project2/" target="_blank" key="3">
        <img class="img3" src="../assets/img/three/img1.jpg" alt="img">
      </a>
    </transition-group>
    <!-- <iframe src='https://my.spline.design/bunny-fe989f0d7478e2b311f751d76e0b325e/' frameborder='0' width='600px' height='600px'></iframe>
    <iframe src='https://my.spline.design/city-55808760887c76c2ce273a763127ca65/' frameborder='0' width='600px' height='600px'></iframe> -->
    <!-- <threeDbg/> -->
  </div>
</template>

<script>
import threeDbg from '@/components/threeDbg.vue'

export default {
  name: 'Model',
  components:{
    threeDbg
  }
}
</script>

<style scoped>
  .threeD {
    margin: 0 auto;
    width: 1300px;
  }
  a {
    display: inline-block;
    width: 400px;
    height: 300px;
    overflow: hidden;
    margin-left: 20px;
  }
  img:hover {
    box-shadow: 0 0 6px 1px rgb(56, 56, 56);
  }
  img {
    transition: 1s;
  }
  .img1 {
    width: 400px;
    margin-left: -40px;
  }
  .img2 {
    width: 380px;
    margin-left: -50px;
    margin-top: -40px;
  }
</style>
