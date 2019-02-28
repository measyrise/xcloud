<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2019-01-06 23:04:55
 -->
<template>
  <div class="container"
       :style="style">
    <slot></slot>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '~assets/styles/variables.scss';

.container {
  background: $white;

  height: 100%;

  width: 100%;

  display: flex;

  overflow: hidden;

  border: 1px solid $red;

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
    }
  },
  data() {
    return {
      style: {}
    }
  },
  computed: {},
  watch: {},
  created: function () {
    let s = 'width:' + this.w + ';'

    s += 'height:' + this.h + ';'

    this.style = s
  },

  inject: [],

  beforeDestroy: function () { },

  mounted: function () { },

  methods: {}
}
</script>
