<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-01-01 08:01:31
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
   <xlgrid h="600px">
      <div id="root">
         <transition v-name="fade"
                     enter-active-class="animated bounceOutLeft"
                     leave-active-class="animated fadeOutRightBig">
            <div v-if="show">hello world</div>
         </transition>
         <button @click="handleClick">切换 </button>

         <xlrow h="10px">
            <xlcol w="50px" />
            <xlcol w="100%" />
         </xlrow>
      </div>
      <!-- <VueSelect placeholder="default, options=[1,5,10]" :options="[1,5,10]"></VueSelect>  -->
   </xlgrid>
</template>



<script>
import { xlgrid, xlrow, xlcol } from "../components/layouts/xgrid/xgrid.js";

export default {
   components: { xlgrid, xlrow, xlcol },
   data () {
      return {
         show: true
      };
   },
   methods: {
      handleClick: function () {
         this.show = !this.show;
         console.log("3333");
      }
   }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.x-table-view-right-wrapper {
   overflow: hidden;
   .x-table-view-head-right-wrapper {
      overflow: hidden;
      .x-table-view-head-right-wrapper1 {
         overflow: hidden;
         .x-table-view-head-right-wrapper1 {
            overflow: hidden;
         }
      }
   }
}
</style>
