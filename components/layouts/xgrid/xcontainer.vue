<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2019-01-06 23:04:55
 -->
<template>
  <div class="container" :style="style">
    <slot></slot>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '~assets/styles/variables.scss';

.container {
  background: $white;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
</style>
  
<script>
export default {
  name: 'xlgrid',
  extends: '',
  props: {
    w: {
      type: String,

      default: '100%'
    },

    h: {
      type: String,

      default: '100%'
    },
    border: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      style: {}
    }
  },
  computed: {},
  watch: {},
  created: function() {
    // debugger
    let s = ''
    if (this.w == '0px' || this.w == '0%') {
      let a = ''
    } else {
      s = 'width:' + this.w + ';'
    }

    if (this.h == '0px' || this.h == '0%') {
      let a = ''
    } else {
      s += 'height:' + this.h + ';'
    }

    s += 'border:' + this.border + ' solid red;'

    this.style = s
  },

  inject: [],

  beforeDestroy: function() {},

  mounted: function() {},

  methods: {}
}
</script>
