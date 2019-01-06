<template>
  <div class="row" :style="style">
    <slot></slot>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '~assets/styles/variables.scss';

.row {
  display: inline-flex;

  border: 1px solid $red;

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
    let s = 'width:' + this.w + ';'

    s += 'height:' + this.h + ';'

    if (this.full) {
      s += 'flex-grow:' + 1 + ';'
    }

    this.style = s
  },

  inject: [],

  beforeDestroy: function() {},

  mounted: function() {},

  methods: {}
}
</script>
