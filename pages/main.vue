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
      <xlrow h="100%" border="1px">
         
         <!-- 父窗口w='0%' or 0px 时随子窗口变化，不填时为100% -->
        <xlcol w='0%'  border="1px" style="z-index:1000">
   
             <div class="" style="width:200px;background-color:green;">

          </div>
         </xlcol>
        <xlcol w="100%"  border="1px" style="z-index:1000;flex-grow:1"></xlcol>
      </xlrow>
    </xlgrid>
  </div>
</template>

<script>
import { xlgrid, xlrow, xlcol } from '../components/layouts/xgrid/xgrid.js'

export default {
  components: { xlgrid, xlrow, xlcol }
}
</script>

<style lang="scss" >
</style>
