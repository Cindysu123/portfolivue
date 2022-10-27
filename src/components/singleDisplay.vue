<template>
  <div class="single_display" v-if="display" :style="'height:'+ top + 'px'">
      <div class="block" :style="'height:'+ height + 'px'"></div>
      <transition name="fade" appear>
        <div @click="close" class="close" :style="'top:'+ cHeight + 'px'">Close</div>
      </transition>
    <div @click="next" class="nav right" :style="'top:'+ navHeight + 'px'"></div>
    <div @click="previous" class="nav left" :style="'top:'+ navHeight + 'px'"></div>
    <transition name="fade" appear>
        <img :src="url" alt="image">
    </transition>
  </div>
</template>

<script>
export default {
    props: {
        srcollHeight:String,
        index:Number,
        type:String,
        total:String,
        images:Array
    },
    methods:{
        close(){
            this.display = false
            this.$emit('close',false)
        },
        next(){
            if(this.imgIndex < parseInt(this.total)){
                this.imgIndex += 1;
                let indexString = this.imgIndex.toString()
                this.url =  require("../assets/img/" + this.type + "/" + indexString + ".jpg")
            } else {
                alert('You have reached the end')
            }
        },
        previous(){
            if(this.imgIndex > 1){
                this.imgIndex -= 1;
                let indexString = this.imgIndex.toString()
                this.url =  require("../assets/img/" + this.type + "/" + indexString + ".jpg")
            } else {
                alert('You have reached the begining')
            }
        }
    },
    data(){
        return{
            display:true,
            top:document.body.offsetHeight,
            height: this.srcollHeight,
            url: require("../assets/img/" + this.type + "/" + this.index + ".jpg"),
            imgIndex: parseInt(this.index),
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
            }
        }
    },
    computed:{
        cHeight: function(){
            return (parseInt(this.srcollHeight) + 50).toString();
        },
        navHeight: function(){
            return (parseInt(this.srcollHeight) + 300).toString();
        }
    }
}
</script>

<style scoped>
img {
    margin: 40px auto;
}
.single_display {
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
}
.close{
    position: absolute;
    left: 100px;
    width: 100px;
    height: 40px;
    background-color: rgb(96, 55, 245);
    color: white;
    border-radius: 5px;
    line-height: 40px;
    font-weight: 800;
    cursor: pointer;
    transition: .3s;
}
.close:hover{
    background-color: #fff;
    color: rgb(96, 55, 245);
}
.nav {
    position: absolute;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    cursor: pointer;
    transition: .3s;
}
.nav:hover {
    border: 5px solid #fff;
}
.right {
    right: 100px;
    border-top: 5px solid rgb(96, 55, 245);
    border-right: 5px solid rgb(96, 55, 245);
}
.left {
    left:100px;
    border-bottom: 5px solid rgb(96, 55, 245);
    border-left: 5px solid rgb(96, 55, 245);
}
</style>