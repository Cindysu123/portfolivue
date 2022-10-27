<template>
  <div class="uiContainer">
    <transition name="nav" appear>
      <div class="list">
        <div @click="show(1)" :class="index===1? 'active':''" class="btn">
        <a :class="index===1? 'mask':''">
          <img src="../assets/img/figma/sky.png" alt="" class="preview">
        </a>
        </div>
        <div @click="show(2)" :class="index===2? 'active':''" class="btn">
          <a :class="index===2? 'mask':''">
            <img src="../assets/img/figma/volunteer.png" alt="" class="preview">
          </a>
        </div>
        <div @click="show(3)" :class="index===3? 'active':''" class="btn">
          <a :class="index===3? 'mask':''">
            <img src="../assets/img/figma/CESA.png" alt="" class="preview">
          </a>
        </div>
      </div>
    </transition>
    <transition name="switch">
      <uiDisplay project="sky" class="one" v-if="index===1 && isShow"/>
      <uiDisplay project="volunteer" class="two" v-else-if="index===2 && isShow"/>
      <uiDisplay project="CESA" class="three" v-else/>
    </transition>
  </div>
</template>

<script>
import uiDisplay from '../components/uiDisplay.vue'

export default {
  name: 'ui',
  components:{
    uiDisplay
  },
  data () {
    return {
      index: 1,
      isShow: true
    }
  },
  methods: {
    show (value) {
      this.index === value ? this.isShow = !this.isShow : this.isShow = true
      this.index = value
    }
  }
}
</script>

<style scoped>
.preview{
  width: 100px;
  height: 85px;
}
.btn {
  margin: 30px 10px;
  margin-top: 0px;
  display: inline-block;
  width: 100px;
  height: 85px;
  border-radius: 10px;
  background-color: #000; 
  overflow: hidden;
  box-shadow: 0 0 6px 1px rgb(206, 206, 206);
}
.btn a{
  transition: .5s; 
  opacity: .6;
}
.btn a.mask  {
  opacity: 1; 
}
.btn a:hover { 
  opacity: 1; 
}
.btn:hover{
  cursor: pointer;
}
</style>