<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-01 08:10:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <div>{{ title }}</div>
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
import Vue from 'vue'
// import bus from '../../utils/ebus'
export default {
  name: 'tagsview',
  data() {
    return {
      styles: { top: '0px', left: '0px' },
      title: '组件标题'
    }
  },

  mounted() {
    var self = this
    this.xebus.$on('menuclick', function(menuitem) {
      debugger
      self.title = menuitem.path
    })
  }
}
</script>