<template>
  <div class="col" :style="style">
    <slot></slot>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
@import '~assets/styles/variables.scss';

.col {
  display: inline-flex;
  border: 1px solid red;
  height: 100%;
  overflow: hidden;
}
</style>
  
<script>
export default {
  extends: '',
  data() {
    return {
      style: {}
    }
  },
  name: 'xlcol',
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
  watch: {},
  computed: {
    cstyle: function() {
      return 'width:100%'
    }
  },
  methods: {}
}
</script>