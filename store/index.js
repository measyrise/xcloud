import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
Vue.use(Vuex)

//模块化方法，每个state，mutations，action都单独导出，并放文件里
// nuxt很贴心的帮我们省去了返回Vuex实例的代码，我们可以不用去写了
// 只有store文件夹下的index.js是一级的vuex状态，其他的js文件都是二级的状态树。（能不能有三级的我不知道，不过感觉没必要，哈哈哈！！）
// 每个状态树文件都可以包含state，mutation，action
// 使用二级状态树的state用： $store.state.文件名.变量名
// 使用二级状态树的mutation用： $store.commit(‘文件名 / 变量名’)
// 使用二级状态树的action用： $store.dispatch(‘文件名 / 变量名’)

//-----------------------------------------------------------------

//本文如下采用的是普通方法，并采取了模块化
//一级状态树与二级状态树同名同方法时，以二级状态书优先

const store = () =>
  new Vuex.Store({
    modules: { app },

    state: {
      locales: ['en', 'zh'],
      locale: 'en',
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false },
        { id: 3, text: '...', done: true }
      ],
      size: 'onesize'
    },
    mutations: {
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      },
      SET_SIZE: (state, size) => {
        state.size = size
      }
    },
    getters
  })
export default store
