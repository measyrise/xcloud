import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _d851183c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _6ab21aa0 = () => interopDefault(import('..\\pages\\adtest.vue' /* webpackChunkName: "pages_adtest" */))
const _55c60422 = () => interopDefault(import('..\\pages\\drag.vue' /* webpackChunkName: "pages_drag" */))
const _dcde78ba = () => interopDefault(import('..\\pages\\json.vue' /* webpackChunkName: "pages_json" */))
const _7d36f1be = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _06c70bf4 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages_main" */))
const _6590a3e4 = () => interopDefault(import('..\\pages\\main\\index.vue' /* webpackChunkName: "pages_main_index" */))
const _02ae538e = () => interopDefault(import('..\\pages\\main\\crouter1.vue' /* webpackChunkName: "pages_main_crouter1" */))
const _5f07ce67 = () => interopDefault(import('..\\pages\\main\\crouter1\\c1.vue' /* webpackChunkName: "pages_main_crouter1_c1" */))
const _5f15e5e8 = () => interopDefault(import('..\\pages\\main\\crouter1\\c2.vue' /* webpackChunkName: "pages_main_crouter1_c2" */))
const _5f23fd69 = () => interopDefault(import('..\\pages\\main\\crouter1\\c3.vue' /* webpackChunkName: "pages_main_crouter1_c3" */))
const _0292248c = () => interopDefault(import('..\\pages\\main\\crouter2.vue' /* webpackChunkName: "pages_main_crouter2" */))
const _4bfd39f0 = () => interopDefault(import('..\\pages\\main\\crouter33.vue' /* webpackChunkName: "pages_main_crouter33" */))
const _0259c688 = () => interopDefault(import('..\\pages\\main\\crouter4.vue' /* webpackChunkName: "pages_main_crouter4" */))
const _30c795a8 = () => interopDefault(import('..\\pages\\main\\drag.vue' /* webpackChunkName: "pages_main_drag" */))
const _396a4ecc = () => interopDefault(import('..\\pages\\menu.vue' /* webpackChunkName: "pages_menu" */))
const _f3cc66f2 = () => interopDefault(import('..\\pages\\menu1.vue' /* webpackChunkName: "pages_menu1" */))
const _06a440fa = () => interopDefault(import('..\\pages\\mouse.vue' /* webpackChunkName: "pages_mouse" */))
const _6c7faea7 = () => interopDefault(import('..\\pages\\mousestyle.vue' /* webpackChunkName: "pages_mousestyle" */))
const _72f7748e = () => interopDefault(import('..\\pages\\slot.vue' /* webpackChunkName: "pages_slot" */))
const _6d2a83a3 = () => interopDefault(import('..\\pages\\table.vue' /* webpackChunkName: "pages_table" */))
const _0d3ff2d8 = () => interopDefault(import('..\\pages\\touch.vue' /* webpackChunkName: "pages_touch" */))
const _07d86a0b = () => interopDefault(import('..\\pages\\trtest.vue' /* webpackChunkName: "pages_trtest" */))
const _4a10a083 = () => interopDefault(import('..\\pages\\css\\t.js' /* webpackChunkName: "pages_css_t" */))
const _98e162b2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5f738bfb = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages_index_index" */))
const _636f952c = () => interopDefault(import('..\\pages\\index\\crouter1.vue' /* webpackChunkName: "pages_index_crouter1" */))
const _637dacad = () => interopDefault(import('..\\pages\\index\\crouter2.vue' /* webpackChunkName: "pages_index_crouter2" */))
const _7fd1c61b = () => interopDefault(import('..\\pages\\index\\drag.vue' /* webpackChunkName: "pages_index_drag" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _d851183c,
      name: "about"
    }, {
      path: "/adtest",
      component: _6ab21aa0,
      name: "adtest"
    }, {
      path: "/drag",
      component: _55c60422,
      name: "drag"
    }, {
      path: "/json",
      component: _dcde78ba,
      name: "json"
    }, {
      path: "/login",
      component: _7d36f1be,
      name: "login"
    }, {
      path: "/main",
      component: _06c70bf4,
      children: [{
        path: "",
        component: _6590a3e4,
        name: "main"
      }, {
        path: "crouter1",
        component: _02ae538e,
        name: "main-crouter1",
        children: [{
          path: "c1",
          component: _5f07ce67,
          name: "main-crouter1-c1"
        }, {
          path: "c2",
          component: _5f15e5e8,
          name: "main-crouter1-c2"
        }, {
          path: "c3",
          component: _5f23fd69,
          name: "main-crouter1-c3"
        }]
      }, {
        path: "crouter2",
        component: _0292248c,
        name: "main-crouter2"
      }, {
        path: "crouter33",
        component: _4bfd39f0,
        name: "main-crouter33"
      }, {
        path: "crouter4",
        component: _0259c688,
        name: "main-crouter4"
      }, {
        path: "drag",
        component: _30c795a8,
        name: "main-drag"
      }]
    }, {
      path: "/menu",
      component: _396a4ecc,
      name: "menu"
    }, {
      path: "/menu1",
      component: _f3cc66f2,
      name: "menu1"
    }, {
      path: "/mouse",
      component: _06a440fa,
      name: "mouse"
    }, {
      path: "/mousestyle",
      component: _6c7faea7,
      name: "mousestyle"
    }, {
      path: "/slot",
      component: _72f7748e,
      name: "slot"
    }, {
      path: "/table",
      component: _6d2a83a3,
      name: "table"
    }, {
      path: "/touch",
      component: _0d3ff2d8,
      name: "touch"
    }, {
      path: "/trtest",
      component: _07d86a0b,
      name: "trtest"
    }, {
      path: "/css/t",
      component: _4a10a083,
      name: "css-t"
    }, {
      path: "/",
      component: _98e162b2,
      children: [{
        path: "",
        component: _5f738bfb,
        name: "index"
      }, {
        path: "crouter1",
        component: _636f952c,
        name: "index-crouter1"
      }, {
        path: "crouter2",
        component: _637dacad,
        name: "index-crouter2"
      }, {
        path: "drag",
        component: _7fd1c61b,
        name: "index-drag"
      }]
    }],

    fallback: false
  })
}
