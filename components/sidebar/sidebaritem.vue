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
  <!-- 外套 装上 SCROLLBAR -->

  <ul style="width:100%;height:100%">
    <!-- 如果窗口就执行连接到具体事务窗口 -->
    <li v-if="!item.children" class="linkto">
      <a>{{ item.path }}</a>
      <ul style="display:none" class="onlychild">onlychild</ul>
    </li>

    <Submenu v-else class="menuitem">
      <template slot="title">{{ item.path }}</template>

      <template v-for="subitem in item.children" v-if="!subitem.hidden">
        <Sidebaritem
          v-if="subitem.children && subitem.children.length>0 "
          :itemw="itemw"
          :itemh="itemh"
          :item="subitem"
          :w="w"
          :h="h"
          :index="index"
          :key="subitem.path"
          style="display:none"
        />

        <li v-else style="display:none" class="lastchild" :key="subitem.path">lastchild</li>
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
.headitem {
  position: fixed;
  background: white;
  width: inherit;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
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
    w: {
      type: String,
      default: '100%'
    },
    h: {
      type: String,
      default: '100%'
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
    index: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      style: {},
      itemstyle: {},
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
    debugger
    let sstyle = ''
    let sitemstyle = ''
    let sseconditemstyle = ''
    // debugger
    if (this.w == '0px' || this.w == '0%') {
      let a = ''
    } else {
      // 如果水平，宽度不定宽，自动增长
      if (this.direction == 'h') {
        this.sw = '0%;'
      } else {
        this.sw = this.w
        sstyle = 'width:' + this.w + ';'
      }
    }

    if (this.h == '0px' || this.h == '0%') {
      let a = ''
    } else {
      if (this.direction == 'h') {
        this.sh = this.h
        sstyle += 'height:' + this.h + ';'
      } else {
        this.sh = '0%'
      }
    }

    if (this.itemw == '0px' || this.itemw == '0%') {
      let a = ''
    } else {
      sitemstyle = 'width:' + this.itemw + ';'
    }

    if (this.itemh == '0px' || this.itemh == '0%') {
      let a = ''
    } else {
      sitemstyle += 'height:' + this.itemh + ';'
    }
    if (this.direction == 'h') {
      sseconditemstyle = 'margin-teft: ' + this.itemw + ';'
    } else {
      sseconditemstyle = 'margin-top:' + this.itemh + ';'
    }

    for (var i = 1; i < 20; i++) {
      let a = {}
      a.name = i
      this.numitems.push(a)
    }
    sstyle += 'border:' + this.border + ' solid red;'
    // debugger
    sitemstyle += 'border:' + this.border + ' solid red;'
    sseconditemstyle = sitemstyle + sseconditemstyle

    this.style = sstyle
    this.itemstyle = sitemstyle
    this.seconditemstyle = sseconditemstyle
  },
  inject: [],
  beforeDestroy: function() {},
  mounted: function() {},
  methods: {}
}
</script>