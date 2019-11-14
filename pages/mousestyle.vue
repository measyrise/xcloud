<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-02 08:57:59
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 @mouseover="selectStyle (item) "
 -->
<template>
  <div>
    <ul>
      <template v-for="(item,index) in items">
        <li :class="{'active':item.active}"
            :key="index"
            @mouseover="mouseover"
            @mouseout="outStyle(item)"
            @touchmove="touchmove">
          {{ item.select }}
          <span v-show="item.active"
                class="icon">{{ item.icon }}</span>

        </li>

      </template>
      <div :style="cstyle"
           class="popbox">{{ x }}:{{ y }}</div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      cstyle: {},
      x: 0,
      y: 0,
      items: [
        { select: '第一行', icon: 1 },
        { select: '第二行', icon: 2 },
        { select: '第三行', icon: 3 },
        { select: '第四行', icon: 4 }
      ]
    }
  },
  methods: {
    selectStyle (item) {
      var _this = this
      this.$nextTick(function () {
        this.items.forEach(function (item) {
          _this.$set(item, 'active', false);
        })
        this.$set(item, 'active', true);
      })

      // this.x = event.x
      // this.y = event.y
      // this.cstyle="display: block;"+"top:"+this.y+"px;"+"left:"+this.x+"px;"
    },
    outStyle (item) {
      // this.cstyle="display: none;"
      this.$set(item, 'active', false);
    },

    // touchstart(e) {
    //  // 获取起始坐标位置x
    // this.lastPosX = e.targetTouches[0].clientX
    // },
    touchmove (e) {
      // 获取当前位置x
      // debugger
      this.x = e.targetTouches[0].clientX
      // 计算差值
      this.y = e.targetTouches[0].clientY
      // 其他业务逻辑
      // ...
      // 更新lastPosX
      // this.lastPosX = this.curPosX
    },
    mouseover (e) {
      //  debugger

      this.x = event.x
      this.y = event.y
      this.cstyle =
        'display: block;' + 'top:' + this.y + 'px;' + 'left:' + this.x + 'px;';
    }
  }
}
</script>

<!-- 样式 -->
<style scoped>
ul {
  overflow: hidden;
}
li {
  float: left;
  color: #000;
  transition: width 0.3s linear;
  outline: 1px solid red;
}
.active {
  color: red;
  background: chartreuse;
}
.icon {
  float: right;
  font-size: 12px;
}

.popbox {
  position: absolute;
  z-index: 2116;
  /* display: none; */
  background: red;
  width: 100px;
  height: 100px;
}
</style>
