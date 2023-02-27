<template>
  <div class="home">
    <transition name="fade" appear>
      <div class="container">
<<<<<<< HEAD
        <h1 class="h1text">HELLO</h1>
        <h2 class="h2text">Welcome To My Portfolio :)</h2>
=======
        <h1 class="h1text">HELLO  :)</h1>
        <h2 class="h2text">My name is Cindy and this is where I put all my paintings</h2>
>>>>>>> 1159c4f35a18f1da92ddf0625e4b811c71a3b7f1
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
<<<<<<< HEAD
  color: #ededed;
=======
  color: rgb(88, 66, 185);
>>>>>>> 1159c4f35a18f1da92ddf0625e4b811c71a3b7f1
  font-weight: 800;
}
.h2text {
  font-size: 40px;
  margin-top: 0;
<<<<<<< HEAD
  color: #ededed;
=======
  color: rgb(88, 66, 185);
>>>>>>> 1159c4f35a18f1da92ddf0625e4b811c71a3b7f1
  font-weight: 600;
}
</style>
