<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2019-01-06 23:04:55
 -->
<template>
  <div class="row" :style="style">
    <slot></slot>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '~assets/styles/variables.scss';

.row {
  display: inline-flex;

  // border: 1px solid $red;

  width: 100%;

  overflow: hidden;
}
</style>
  
<script>
export default {
  name: 'xlrow',
  extends: {},
  props: {
    w: {
      type: String,

      default: '100%'
    },

    h: {
      type: String,

      default: '100%'
    },

    full: {
      type: Boolean,

      default: false
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
    let s="";
    if (this.w=='0px' || this.w=='0%')
    {
      let a="";
    }
    else
    {
       s = 'width:' + this.w + ';'
    }

    s += 'height:' + this.h + ';'

    if (this.full) {
      s += 'flex-grow:' + 1 + ';'
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
