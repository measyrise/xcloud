<template>
  <xlgrid h="600px">
    <div id="root">
      <transition
        name="fade"
        enter-active-class="animated bounceOutLeft"
        leave-active-class="animated fadeOutRightBig"
      >
        <div v-if="show">hello world</div>
      </transition>
      <button @click="handleClick">切换</button>

      <xlrow h="10px">
        <xlcol w="50px"></xlcol>
        <xlcol w="100%"></xlcol>
      </xlrow>
    </div>
     <!-- <VueSelect placeholder="default, options=[1,5,10]" :options="[1,5,10]"></VueSelect>  -->
  </xlgrid>
</template>
  


<script>
import animate from 'animate.css'
import { xlgrid, xlrow, xlcol } from '../components/layouts/xgrid/xgrid.js'
// import { VueSelect } from '../components/select/xselect/index.js'

export default {
  components: { xlgrid, xlrow, xlcol},
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
