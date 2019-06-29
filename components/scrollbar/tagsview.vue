<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-01 08:10:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 
  //监控中间滚轮事件 @wheel.prevent
  
  -->


<template>

  <div class="tags-view-container">
    <!-- <div class="tags-scrollpane" ref="scrollref"
         @wheel="handleScroll($event)"> -->
     <ScrollPane ref="scrollPane" class="tags-view-wrapper">
      <!-- <div ref=tagsref class="tags"> -->
      
            <nuxt-link v-for=" (tag,index) in tags" :key="index" :to="tag.path"
                       style="text-decoration:none;" 
                      class="tags-view-item"
                      tag="span"
                       :class="isActive(tag)?'active':''"
                       @click.middle.native="closeSelectedTag(tag)"
                       @contextmenu.prevent.native="openMenu(tag,$event)" 
                      >
              {{ tag.name }}

               <!-- //关闭按钮 -->
            <span class="el-icon-close"
                  @click.prevent.stop="closeSelectedTag(tag)" />
 
            </nuxt-link>
          
          <!-- <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
          <li @click.native="refreshSelectedTag(selectedTag)">刷新</li>
          <li @click.native="closeSelectedTag(selectedTag)">关闭</li>
          <li @click.native="closeOthersTags">关闭其它</li>
          <li @click.native="closeAllTags">关闭所有</li>
        </ul> -->

     </ScrollPane>

      <!-- </div> -->
      
    <!-- </div> -->
  </div>

</template>

<style rel="stylesheet/scss" lang="scss">

.tags-view-container{
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}

.tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }

.tags-container {
  display: flex;
  align-items: center;
  .tags-scrollpane {
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    display: inline-flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
     .tag {
        display: inline-flex;
        margin: 0 0 0 10px;
        cursor: pointer;
        flex-shrink: 0; //加后元素不会产生挤压问题
      }
  }
  .tags-scrollpane::-webkit-scrollbar {
    display: none; //Safari and Chrome
    -ms-overflow-style: none; //IE 10+
    overflow: -moz-scrollbars-none; //Firefox
  }
}


.tags-view-item{
  display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
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
 import ScrollPane from '../scrollbar'
export default {
  name: 'Tagsview',
  components: { ScrollPane },
  data() {
    return {
      styles: { top: '0px', left: '0px' },
      title: '组件标题',
      visible: false,
      selectedTag: {},
      tags: [
        {
          name: '首页',
          path: '/main'
        }

        // {
        //   name:"子窗口1",
        //   path:"/main/crouter1"
        // },
        //  {
        //   name:"子窗口2",
        //   path:"/main/crouter2"
        // }
      ]
    }
  },

  mounted() {
    var self = this
    this.xebus.$on('menuclick', function (menuitem) {
      // debugger
      self.title = menuitem.path
      self.tags.push(menuitem)
    })
  },
  methods: {
      isActive(route) {
      return route.path === this.$route.path
    }, //打开上下文菜单
    openMenu(tag, e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }
      this.top = e.clientY

      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    }
  }
}
</script>
