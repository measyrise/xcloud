<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2019-01-06 23:04:55
 --    :style="(item.name==2?seconditemstyle:(item.name==2?seconditemstyle:(item.name>=3?itemstyle:'')))" 
   <xlrow
        v-for="(item,index) in numitems"
        :class="{'headitem':item.name==1}"
        :style="(index==1?seconditemstyle:itemstyle)"
        :key="index"
      >{{ item.name }}</xlrow>
  -->
<template>
  <!-- 外套 装上 SCROLLBAR  Ul是一个，只是放在DIV里，还是放在-->
  <!-- 这里制定二级与二级以后的style -->
  <ul class="ulitem" :style="ulstyle"  >
   

    <!-- 没有下级窗口的POPPER，就是一按钮 -->
    <li v-if="!item.children" class="nlastmenuitem" :style="listyle">
      <a :href="item.path">{{ item.path }}</a>
    </li>


    <!-- 有下级窗口的POPPER，且只有一行 -->

    <!-- 有下级窗口的POPPER，通过mouseover获得本元素坐标，调用子元素方法、传入坐标 -->
    <Submenu v-else class="lisubmenuitem" :style="[listyle]"   ref="subpopper"  >
      <template slot="title">{{ item.path }}</template>

      <template v-for="(subitem,index) in item.children"   
        v-if="!subitem.hidden" >
        <Sidebaritem
          v-if="subitem.children && subitem.children.length>0 "
          :itemw="itemw"
          :itemh="itemh"
          :item="subitem"
          :index="index"
          :isNest="true"
          :key="subitem.path"
          :scrollTop="scrollTop"
         />
          <li v-else class="hlastmenuitem" :key="subitem.path" :style="listyle">
          <a :href="item.path">{{subitem.path}}</a>
          </li>

      </template>
    </Submenu>
  </ul>
</template>

<style rel="stylesheet/scss" lang="scss" >

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ulitem {
  align-items: center;
  display: inline-flex;
  height: 100%;
  width: 100%;
  color: white;
}

li:hover {
  background: #333;
}

li:hover > .nextulitem {
  background: #333;
  display: block;
  // transition:  1s;
}
</style>
  
<script>
import { xlgrid, xlrow, xlcol } from '../layouts/xgrid/xgrid'
import Submenu from '../sidebar/submenu'
import Vue from 'vue'
export default {
  name: 'Sidebaritem',
  components: { xlgrid, xlrow, xlcol, Submenu },
  extends: '',
  props: {
    isNest: {
      type: Boolean,
      default: false
    },
    // v=竖，纵向,h=水平
    direction: {
      type: String,
      default: 'v'
    },
    itemw: {
      type: String,
      default: '100%'
    },
    itemh: {
      type: String,
      default: '100%'
    },
    border: {
      type: String,
      default: '0'
    },
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      listyle: {},
      ulstyle: {},
      ccstyle:{},
      test1:{},
      test2:{},
      scrollTop:0,
      top:0,
      left:0,
      seconditemstyle: {},
      sw: '0%',
      sh: '0%',
      numitems: [],
      x:0,
      y:0
    }
  },
  computed: {
    cstyle: function() {
      return 'width:100%'
    }

    
  },
  watch: {},
  created: function() {
   
    if (this.index == 0) {
      this.ulstyle.background='#333'
    } else {
      this.ulstyle.background='#676a6c'
      // ulstyle = 'background:green'
    }

    if (this.itemw == '0px' || this.itemw == '0%') {
      let a = ''
    } else {
      this.listyle.width= this.itemw
    }

    if (this.itemh == '0px' || this.itemh == '0%') {
      let a = ''
    } else {
       this.listyle.height=this.itemh
   
       this.listyle['line-height']=this.itemh
    }

    this.listyle.border= this.border + ' solid red'
   
    // this.listyle.top=this.top+'px'
    // this.listyle.left=this.left+'px'

    var s1={}
    s1.background="red"

    // Vue.set(s1,"background","red")
    // Vue.set(s1,'width:"100px"')
    // s1.push('width:"100px"')

     var s2={}
    s2.margin="auto"
    // Vue.set(s2,'margin',"auto")
    // s2.push('left:"0px"')

    // this.test1=s1
    // this.test2=s2
  },
  inject: [],
  beforeDestroy: function() {},
  mounted: function() {},
  methods: {
      setscrollTop(v) {
        this.$refs.subpopper.setscrollTop(v)
      }
  
}
}



</script>