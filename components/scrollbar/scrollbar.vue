<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2018-11-28 10:47:34
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <cScrollbar 
    ref="scrollContainer" 
    :vertical="false" 
    class="scroll-container" 
    @wheel.native.prevent="handleScroll">
    <slot/>
  </cScrollbar>
</template>

<script>
const tagAndTagSpacing = 4 // tagAndTagSpacing
import cScrollbar from './elscrollbar';
export default {
  name: 'ScrollPane',
  components: { cScrollbar },
  data() {
    return {
      left: 0
    };
  },
  methods: {
    handleScroll(e) {
      debugger
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    },
    moveToTarget(currentTag) {
      const $container = this.$refs.scrollContainer.$el
      const $containerWidth = $container.offsetWidth
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
      const tagList = this.$parent.$refs.tag

      let firstTag = null
      let lastTag = null
      let prevTag = null
      let nextTag = null

      // find first tag and last tag
      if (tagList.length > 0) {
        firstTag = tagList[0]
        lastTag = tagList[tagList.length - 1]
      }

      // find preTag and nextTag
      for (let i = 0; i < tagList.length; i++) {
        if (tagList[i] === currentTag) {
          if (i === 0) {
            //如果是第一个元素的话不存在上个元素
            nextTag = tagList[i].length > 1 && tagList[i + 1]
          } else if (i === tagList.length - 1) {
            //如果是最后一个元素的话不存在下个元素
            prevTag = tagList[i].length > 1 && tagList[i - 1]
          } else {
            prevTag = tagList[i - 1]
            nextTag = tagList[i + 1]
          }
          break
        }
      }

      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft =
          $scrollWrapper.scrollWidth - $containerWidth
      } else {
        // the tag's offsetLeft after of nextTag
        const afterNextTagOffsetLeft =
          nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing

        // the tag's offsetLeft before of prevTag
        const beforePrevTagOffsetLeft =
          prevTag.$el.offsetLeft - tagAndTagSpacing

        if (
          afterNextTagOffsetLeft >
          $scrollWrapper.scrollLeft + $containerWidth
        ) {
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft
        }
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
