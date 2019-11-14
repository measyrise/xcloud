<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-04-04 08:18:10
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <div id="app">
    <div class="ctn ctn1">
      <div 
        v-for="(site, index) in list1"
        :key="index"
        class="sub sub1">
        <div 
          class="dragCtn fixed"
          @mousedown="mousedown(site, $event)"
          @mousemove.prevent="mousemove(site, $event)"
          @mouseup="mouseup(site, $event)">{{ site.name }}</div>
      </div>
    </div>
    <div class="ctn ctn2">
      <div 
        v-for="(site, index) in list2"
        :key="index"
        class="sub sub2">
        <div class="dragCtn">{{ index }} : {{ site.name }}</div>
      </div>
    </div>
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
.ctn {
  line-height: 50px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  float: left;
}
.sub:hover {
  background: #e6dcdc;
  color: white;
  width: 100px;
}
.ctn1 {
  border: 1px solid green;
  width: 100px;
}
.ctn2 {
  border: 1px solid black;
  width: 100px;
  margin-left: 50px;
}
.fixed {
  width: 100px;
  height: 100px;
  position: fixed;
  background: red;
  left: 10px;
  top: 10px;
  cursor: move;
}
</style>
