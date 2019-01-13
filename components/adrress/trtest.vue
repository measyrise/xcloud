<template>
  <div id="root">
    <transition
      name="fade"
      enter-active-class="animated bounceOutLeft"
      leave-active-class="animated fadeOutRightBig"
    >
      <div v-if="show">hello world</div>
    </transition>

    <button @click="handleClick">切换</button>
  </div>
</template>



<script>
import animate from 'animate.css'

export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleClick: function() {
      this.show = !this.show
      console.log('3333')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
