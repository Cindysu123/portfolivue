<template>
  <div class="home">
    <transition name="fade" appear>
      <div class="container">
        <h1 class="h1text">HELLO</h1>
        <h2 class="h2text">Welcome To My Portfolio :)</h2>
      </div>
    </transition>
    <threejsBg/>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/animation.css'
import threejsBg from '@/components/threejsBg.vue'

export default {
  name: 'Home',
  components: {
    threejsBg
  }
}
</script>

<style>
body {
  background: hsl(0, 0%, 95%);
}
.h1text {
  font-size: 100px;
  color: #ededed;
  font-weight: 800;
}
.h2text {
  font-size: 40px;
  margin-top: 0;
  color: #ededed;
  font-weight: 600;
}
</style>
