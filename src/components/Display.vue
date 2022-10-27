<template>
  <div class="display">
    <!-- <p>type: {{type}}</p> -->
       <transition-group tag="ul" name="list" appear>
          <li :key="index" v-for="(item, index) in images">
              <a >
              <figure>
                <img :src="item.imgUrl" class="img" @click="enlarge(index)"/>
              </figure>
              </a>
          </li>
        </transition-group>
  </div>
  <singleDisplay v-if="display" v-on:close="closeDisplay($event)" :srcollHeight="scrollHeight()" 
                  :index="displayIndex" 
                  :type="type" 
                  :total="total" 
                  :images="images"/>
</template>

<script>
import singleDisplay from './singleDisplay.vue'

export default {
  name: 'Display',
  components:{
    singleDisplay
  },
  props: {
    type: String,
    total: String,
    display: Boolean
  },
  methods: {
    enlarge(index){
      this.displayIndex = index + 1
      this.display = !this.display
    },
    closeDisplay(display){
      this.display = display
    },
    scrollHeight(){
      return document.documentElement.scrollTop.toString()
    }
  },
  data () {
    var images = new Array(this.total);
    for(var i = 0; i < parseInt(this.total); i++){
      images[i]  = {
        title: 'Image' + i.toString(),
        imgUrl: require("../assets/img/" + this.type + "/" + (i+1).toString() + ".jpg")
      }
    }
    return{
      images,
      display: false,
      displayIndex: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img{
  width: 320px;
  cursor: pointer;
}
</style>
