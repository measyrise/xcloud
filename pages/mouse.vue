<template>
  <div class="outer">
    <div 
      v-drag 
      class="left"/>
    <div 
      v-drag 
      class="right"/>
  </div>
</template>
<script>
export default {
  name: "Mousemove",
  data() {
    return {
      list1: [{ name: '拖动我', index: 0 }],
      list2: [
        { name: 'a', index: 0 },
        { name: 'b', index: 1 },
        { name: 'c', index: 2 },
        { name: 'd', index: 3 }
      ],
      vm: '',
      sb_bkx: 0,
      sb_bky: 0,
      is_moving: false
    }
  },
  methods: {
    mousedown: function(site, event) {
      var startx = event.x
      var starty = event.y
      this.sb_bkx = startx - event.target.offsetLeft
      this.sb_bky = starty - event.target.offsetTop
      this.is_moving = true
    },
    mousemove: function(site, event) {
      var endx = event.x - this.sb_bkx
      var endy = event.y - this.sb_bky
      var _this = this
      if (this.is_moving) {
        event.target.style.left = endx + 'px';
        event.target.style.top = endy + 'px';
      }
    },
    mouseup: function(e) {
      this.is_moving = false
    }
  }
}
</script>

<style lang="scss" scoped>
.outer div {
  position: absolute;
  width: 100px;
  height: 100px;
}
.outer .left {
  background-color: red;
  top: 0;
  left: 0;
}
.outer .right {
  background-color: blue;
  top: 0;
  right: 0;
}
</style>
