<template>
  <transition name="fade" appear>
    <div class="ps">
<<<<<<< HEAD
        <Display type="photoshop" total="12"/>
=======
        <Display type="photoshop" total="11"/>
>>>>>>> 1159c4f35a18f1da92ddf0625e4b811c71a3b7f1
    </div>
  </transition>
</template>


<script>
import Display from '@/components/Display.vue'

export default {
  name: 'Photoshop',
  components:{
    Display
  }
}
</script>

<style>
/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6)
}
.list-enter-to{
  opacity: 1;
  transform: scale(1);
}
.list-enter-active{
  transition: .4 ease;
}
</style>
