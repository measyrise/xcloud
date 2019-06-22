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
  <div class="scrollbarhide scrollbar"  v-on:scroll.passive="onScroll">
    <xlgrid :h="sh" :w="sw">
      <xlrow
        v-for="(item,index) in asyncRouterMap"
        :class="{'headitem':index==0}"
        :style="(index==1?seconditemstyle:itemstyle)"
        :key="index"
        class="sidebarmenu"
      >
        <Sidebaritem
          :key="index"
          :itemw="itemw"
          :itemh="itemh"
          :item="item"
          :direction="direction"
          :index="index"
          ref="rsidebar"
        />
      </xlrow>
    </xlgrid>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" >
.scrollbar {
  overflow-y:auto;
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
</style>
  
<script>
import { xlgrid, xlrow, xlcol } from '../layouts/xgrid/xgrid'
import Sidebaritem from '../sidebar/sidebaritem'
import Vue from 'vue'
export default {
  components: { xlgrid, xlrow, xlcol, Sidebaritem },
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
    }
  },
  data() {
    return {
      style: {},
      itemstyle: {},
      seconditemstyle: {},
      scrollTop:0,
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
        },{
          path: '/nested',
          component: '',
          redirect: '/nested/menu1/menu1-1',
          name: 'Nested',
          meta: {
            title: 'nested',
            icon: 'nested'
          },
          children: [
            {
              path: 'menu1',
              component: '', // Parent router-view
              name: 'Menu1',
              meta: { title: 'menu1' },
              redirect: '/nested/menu1/menu1-1',
              children: [
                {
                  path: 'menu1-1',
                  component: '',
                  name: 'Menu1-1',
                  meta: { title: 'menu1-1' }
                },
                {
                  path: 'menu1-2',
                  component: '',
                  name: 'Menu1-2',
                  redirect: '/nested/menu1/menu1-2/menu1-2-1',
                  meta: { title: 'menu1-2' },
                  children: [
                    {
                      path: 'menu1-2-1',
                      component: '',
                      name: 'Menu1-2-1',
                      meta: { title: 'menu1-2-1' }
                    },
                    {
                      path: 'menu1-2-2',
                      component: '',
                      name: 'Menu1-2-2',
                      meta: { title: 'menu1-2-2' }
                    }
                  ]
                },
                {
                  path: 'menu1-3',
                  component: '',
                  name: 'Menu1-3',
                  meta: { title: 'menu1-3' }
                }
              ]
            },
            {
              path: 'menu2',
              name: 'Menu2',
              component: '',
              meta: { title: 'menu2' }
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

        { path: '*', redirect: '/404', hidden: true },
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
        }  , {
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
        }  , {
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
        }  , {
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
        }
      ],
      sidebarstyle: {}
    }
  },
  computed: {
    cstyle: function() {
      return 'width:100%'
    }
  },
  watch: {},
  created: function() {
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
  methods: {

     onScroll (e) {
       

      //  gscrollTop=e.target.scrollTop;
        // debugger
        this.scrollTop=e.target.scrollTop;
        //方式1.建立全局变量，用的时候自动引用,这样也不依懒VUEX管理
        Vue.prototype.GscrollTop=e.target.scrollTop
        //方式2：组件修改，这种可能容易出问题
        // if(e.target.scrollTop)
        // {
        //  for(var i = 0; i <this.$refs.rsidebar.length; i++ ){
        //     let t=this.$refs.rsidebar[i].$children
        //    if (t.length>0) {
        //       this.$refs.rsidebar[i].setscrollTop(this.scrollTop)
        //     }
        // }
        // }
        
        
    }

  }
}
</script>
