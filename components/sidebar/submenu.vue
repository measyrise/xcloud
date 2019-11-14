<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-01 08:10:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <li class="tag"
      @mouseover="mouseover">
    <a>
      <slot name="title" />
    </a>
    <transition name="fade">
      <ul :style="[styles]"
          class="nextulitem">
        <slot />
      </ul>
    </transition>
  </li>
</template>

<style>
.nextulitem {
  display: none;
  position: fixed;
  z-index: 99;
  /* opacity: 1; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
import Vue from 'vue';
export default {
  name: 'Submenu',
  data () {
    return {
      styles: { top: '0px', left: '0px' }
    }
  },
  methods: {
    mouseover (e) {
      //  debugger
      let scrollTop = Vue.prototype.GscrollTop
      if (!scrollTop) {
        scrollTop = 0
      }
      var pos = getElementPosition(this.$el)

      //只用第一级菜单需要这样计算位置，因为第一级的坐标算准了后后面的就可参照了
      if (isfirstmenu(this.$el)) {
        this.styles.top = pos.top - scrollTop + 'px';
        this.styles.left = pos.left + 'px';
      } else {
        this.styles.top = pos.top + 'px';
        this.styles.left = pos.left + 'px';
      }
    },
    setscrollTop (v) {
      this.scrollTop = v
    }
  }
}

function isfirstmenu (element) {
  // debugger
  var current = element.parentElement
  while (current !== null) {
    if (current.className.indexOf('lisubmenuitem') >= 0) {
      return 0
    }
    current = current.parentElement
  }
  return 1
}

function getElementPosition (element) {
  var left = element.offsetLeft
  var top = element.offsetTop
  var scrollTop = element.scrollTop
  var current = element.offsetParent

  while (current !== null) {
    left += current.offsetLeft
    top += current.offsetTop
    scrollTop += current.scrollTop
    current = current.offsetParent
  }
  left = left + element.offsetWidth
  // top = top
  // debugger
  return {
    top: top,
    left: left
  }
}
</script>
