<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-02 16:50:12
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <ElScrollbar  wrapClass="scrollbar-wrapper">
     <ElMenu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
          <!-- <div class="menu-wrapper">
            <li role="menuitem" aria-haspopup="true" class="el-submenu is-opened" 
            aria-expanded="true">
            <div class="el-submenu__title" 
            style="padding-left: 20px; color: rgb(191, 203, 217); 
            background-color: rgb(48, 65, 86);">
              <svg data-v-c8a70580="" aria-hidden="true" class="svg-icon">
                <use data-v-c8a70580="" xlink:href="#icon-component">
                  </use></svg><span>组件</span>
                  <i class="el-submenu__icon-arrow el-icon-arrow-right">
                    </i>
             </div>
             </li>
         </div> -->
       <!-- <SidebarItem v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"></SidebarItem>  -->
    </ElMenu> 
  </ElScrollbar >
</template>

<script>
 import ElScrollbar from './elscrollbar.js'
 import ElMenu from '../menu/src/menu.vue'
// import SidebarItem from './SidebarItem'
export default {
   components: {ElScrollbar,ElMenu},
 data() {
    return {
        permission_routers: [
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
  // comments:{ElScrollbar},
  methods:{
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}

</script>
