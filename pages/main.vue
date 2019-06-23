<!--
 * @Description: 文件描述
    整个菜单栏采用左右布局
    1.左布局就是菜单的展开和未展开装态，左侧菜单位于最高层
    2.右则布局大栏如下，最上也是功能打开栏，右上是相关退出，关闭等（可有可无，根据定义）
    3，右中就是功能区，功能区导行是，左是功能 ，右是功能按钮导航，下是状态导行（可有可无）
    4. 功能区的表格可{单}，{左右}，{上下}，{左（多）右}，{左右{多}}，{左（多）右{多}}
       {左（上下）右}，{左右（上下）}，{左{}上下}，从这里可以总结出，所有的表都在放在
       TAB控件下,想怎么改就怎么改
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2019-04-04 08:18:10
 -->

<template>
  <div class="main">
    <xlgrid border="1px">
      <xlrow h="100%" border="0px">
        <!-- 父窗口w='0%' or 0px 时随子窗口变化，不填时为100% -->

        <xlcol border="0px" w="0px" style="overflow:visible;">
          <Xsidebar h="100%" w="100px" itemw="100px" itemh="60px"></Xsidebar>
          <!-- <div style="width:100px;height:100%"></div> -->
          <!-- <Sidebar class="sidebar-container"/> -->
        </xlcol>

        <!-- 右方文档 -->
        <xlcol w="100%" border="1px" style="flex-grow:1">
          <xlgrid w="100%" h="100%">
            <xlrow h="60px" border="1px">
              <tagsview></tagsview>
            </xlrow>
            <xlrow h="100%" border="1px">
              <Slotdemo :lists="menulist" sslot="aaa">
                <template slot="footer">333</template>
                <template slot="header">111</template>
                <template slot="main">222</template>
                <template slot="boy">提供的男人</template>
                <template slot="girl"></template>
                <template slot="dd">1</template>
                <!-- //这里的B就是引用了所有的作用域插槽，slot-scope="b" 时的b 就是引用指针，引用所有
                作用域-->
                <template slot-scope="b">
                  {{ b }}
                  <!-- {{b.say}}
                  {{b.shit}}-->
                  <!-- {{b.menu.id}} -->
                </template>
              </Slotdemo>

              <!-- 默认的插的内容
              <h4>这个世界不仅有男人和女人</h4>-->

              <!-- <div style="height:1px;background-color:red;"></div> 
                  <div style="height:1px;background-color:red;"></div>
              <slot tl="girldd">作用域插插调用</slot>-->
            </xlrow>
          </xlgrid>
        </xlcol>
      </xlrow>
    </xlgrid>
  </div>
</template>  

<script>
import { xlgrid, xlrow, xlcol } from '../components/layouts/xgrid/xgrid.js'
import Xsidebar from '../components/sidebar/sidebar.vue'
import Sidebar from '../components/elem/sidebar/index.vue'
import Slotdemo from '../pages/slot'
import tagsview from '../components//tags/tagsview.vue'
export default {
  components: { xlgrid, xlrow, xlcol, Xsidebar, Slotdemo, Sidebar, tagsview },
  data() {
    return {
      menulist: [
        { id: 1, name: '孙悟空' },
        { id: 2, name: '猪八戒' },
        { id: 3, name: '沙和尚' },
        { id: 4, name: '唐僧' },
        { id: 5, name: '小白龙' }
      ],
      slot: 'ssss'
    }
  }
}
</script>

<style lang="scss" >
</style>
