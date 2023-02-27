<template>
  <transition name="fade" appear>
    <div class="ps">
        <Display type="photoshop" total="12"/>
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
