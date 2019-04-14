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
  <ul class="ulitem" :style="ulstyle">
    <!-- 如果窗口就执行连接到具体事务窗口 -->

    <li v-if="!item.children" class="limenuitem" :style="listyle">
      <a :href="item.path">111</a>
      <ul class="pnextulitem">{{item.path}}</ul>
    </li>

    <Submenu v-else class="lisubmenuitem" :style="listyle">
      <template slot="title">{{ item.path }}</template>

      <template v-for="(subitem,index) in item.children" v-if="!subitem.hidden">
        <Sidebaritem
          v-if="subitem.children && subitem.children.length>0 "
          :itemw="itemw"
          :itemh="itemh"
          :item="subitem"
          :index="index"
          :isNest="true"
          :key="subitem.path"
        />

        <li v-else class="lastchild" :key="subitem.path">{{subitem.path}}</li>
      </template>
    </Submenu>
  </ul>
</template>
<style rel="stylesheet/scss" lang="scss" >
.scrollbar {
  background-color: green;
  overflow-y: auto;
}
.scrollbarhide::-webkit-scrollbar {
  display: none; //Safari and Chrome
  -ms-overflow-style: none; //IE 10+
  overflow: -moz-scrollbars-none; //Firefox
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

li:hover {
  background: #333;
}

li:hover > .nextulitem {
  background: #333;
  display: block;
}

.ulitem {
  align-items: center;
  display: inline-flex;
  height: 100%;
  width: 100%;
  color: white;
}

.pnextulitem {
  display: none;
  position: absolute;
  top: 0px;
  left: 100px;
  z-index: 99;
  width: 200px;
  height: 200px;
  opacity: 1;
  transform: translateZ(0);
}
</style>
  
<script>
import { xlgrid, xlrow, xlcol } from '../layouts/xgrid/xgrid'
import Submenu from '../sidebar/submenu'
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
      seconditemstyle: {},
      sw: '0%',
      sh: '0%',
      numitems: [],
      asyncRouterMap: [
        {
          path: '/permission',
          component: '',
          redirect: '/permission/index',
          alwaysShow: true, // will always show the root menu
          meta: {
            title: 'permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
          },
          children: [
            {
              path: 'page',
              component: '',
              name: 'PagePermission',
              meta: {
                title: 'pagePermission',
                roles: ['admin'] // or you can only set roles in sub nav
              }
            },
            {
              path: 'directive',
              component: '',
              name: 'DirectivePermission',
              meta: {
                title: 'directivePermission'
                // if do not set roles, means: this page does not require permission
              }
            }
          ]
        },

        {
          path: '/icon',
          component: '',
          children: [
            {
              path: 'index',
              component: '',
              name: 'Icons',
              meta: { title: 'icons', icon: 'icon', noCache: true }
            }
          ]
        },

        /** When your routing table is too long, you can split it into small modules**/

        {
          path: '/example',
          component: '',
          redirect: '/example/list',
          name: 'Example',
          meta: {
            title: 'example',
            icon: 'example'
          },
          children: [
            {
              path: 'create',
              component: '',
              name: 'CreateArticle',
              meta: { title: 'createArticle', icon: 'edit' }
            },
            {
              path: 'edit/:id(\\d+)',
              component: '',
              name: 'EditArticle',
              meta: { title: 'editArticle', noCache: true },
              hidden: true
            },
            {
              path: 'list',
              component: '',
              name: 'ArticleList',
              meta: { title: 'articleList', icon: 'list' }
            }
          ]
        },

        {
          path: '/tab',
          component: '',
          children: [
            {
              path: 'index',
              component: '',
              name: 'Tab',
              meta: { title: 'tab', icon: 'tab' }
            }
          ]
        },

        {
          path: '/error',
          component: '',
          redirect: 'noredirect',
          name: 'ErrorPages',
          meta: {
            title: 'errorPages',
            icon: '404'
          },
          children: [
            {
              path: '401',
              component: '',
              name: 'Page401',
              meta: { title: 'page401', noCache: true }
            },
            {
              path: '404',
              component: '',
              name: 'Page404',
              meta: { title: 'page404', noCache: true }
            }
          ]
        },

        {
          path: '/error-log',
          component: '',
          redirect: 'noredirect',
          children: [
            {
              path: 'log',
              component: '',
              name: 'ErrorLog',
              meta: { title: 'errorLog', icon: 'bug' }
            }
          ]
        },

        {
          path: '/excel',
          component: '',
          redirect: '/excel/export-excel',
          name: 'Excel',
          meta: {
            title: 'excel',
            icon: 'excel'
          },
          children: [
            {
              path: 'export-excel',
              component: '',
              name: 'ExportExcel',
              meta: { title: 'exportExcel' }
            },
            {
              path: 'export-selected-excel',
              component: '',
              name: 'SelectExcel',
              meta: { title: 'selectExcel' }
            },
            {
              path: 'upload-excel',
              component: '',
              name: 'UploadExcel',
              meta: { title: 'uploadExcel' }
            }
          ]
        },

        {
          path: '/zip',
          component: '',
          redirect: '/zip/download',
          alwaysShow: true,
          meta: { title: 'zip', icon: 'zip' },
          children: [
            {
              path: 'download',
              component: '',
              name: 'ExportZip',
              meta: { title: 'exportZip' }
            }
          ]
        },

        {
          path: '/theme',
          component: '',
          redirect: 'noredirect',
          children: [
            {
              path: 'index',
              component: '',
              name: 'Theme',
              meta: { title: 'theme', icon: 'theme' }
            }
          ]
        },

        {
          path: '/clipboard',
          component: '',
          redirect: 'noredirect',
          children: [
            {
              path: 'index',
              component: '',
              name: 'ClipboardDemo',
              meta: { title: 'clipboardDemo', icon: 'clipboard' }
            }
          ]
        },

        {
          path: '/i18n',
          component: '',
          children: [
            {
              path: 'index',
              component: '',
              name: 'I18n',
              meta: { title: 'i18n', icon: 'international' }
            }
          ]
        },

        {
          path: 'external-link',
          component: '',
          children: [
            {
              path: 'https://github.com/PanJiaChen/vue-element-admin',
              meta: { title: 'externalLink', icon: 'link' }
            }
          ]
        },

        { path: '*', redirect: '/404', hidden: true }
      ]
    }
  },
  computed: {
    cstyle: function() {
      return 'width:100%'
    }
  },
  watch: {},
  created: function() {
    let listyle = ''
    let ulstyle = ''

    if (this.index == 0) {
      ulstyle = 'background:#333'
    } else {
      ulstyle = 'background:#676a6c'
      // ulstyle = 'background:green'
    }

    if (this.itemw == '0px' || this.itemw == '0%') {
      let a = ''
    } else {
      listyle = 'width:' + this.itemw + ';'
    }

    if (this.itemh == '0px' || this.itemh == '0%') {
      let a = ''
    } else {
      listyle += 'height:' + this.itemh + ';'
      listyle += 'line-height:' + this.itemh + ';'
    }

    listyle += 'border:' + this.border + ' solid red;'

    this.listyle = listyle
    this.ulstyle = ulstyle
  },
  inject: [],
  beforeDestroy: function() {},
  mounted: function() {},
  methods: {}
}
</script>