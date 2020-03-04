/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 */

import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import errorLog from "./modules/errorLog";
import tagsView from "./modules/tagsView";
import getters from "./getters";
Vue.use(Vuex);

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
//每次刷新会执行这块，,属于后端，看点击时的情况：点击不执行,因为数据已返到前端，前端在后台获取相关数据了,只有刷新再从这里取数
import Cookies from "js-cookie";
const store = () =>
  new Vuex.Store({
    modules: {
      app,
      errorLog,
      tagsView
    },
    actions: {
      //每次网页刷新时会在后端执行,但这个req 是怎么带进来
      nuxtServerInit({ commit }, { req }) {
        debugger;
        console.log(
          "******************************isClient*************************************"
        );
        // console.log(isClient)
        console.log("**********************req headers***************");
        // console.log(req.headers)
        console.log("**********************req cookie***************");
        // console.log(req.headers.cookie)

        // let lang = req.headers.cookie.split('language=')[1]
        let lang = "zh";
        console.log("**********************req language***************");
        console.log(lang);
        commit("SET_LANG", lang);
      },
      setLanguage({ commit }, language) {
        commit("SET_LANG", language);
      }
    },

    state: {
      locales: ["zh", "en"],
      locale: Cookies.get("language") || "zh",
      todos: [
        {
          id: 1,
          text: "...",
          done: true
        },
        {
          id: 2,
          text: "...",
          done: false
        },
        {
          id: 3,
          text: "...",
          done: true
        }
      ],
      size: "onesize"
    },
    mutations: {
      SET_LANG(state, locale) {
        // debugger
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale;
          Cookies.set("language", locale);
        }
      },
      SET_SIZE: (state, size) => {
        state.size = size;
      }
    },
    getters: {
      doneTodos: state => state.todos.filter(todo => todo.done),
      gapp: state => state.app.device,
      doneTodos: state => state.todos.filter(todo => todo.done),
      gapp: state => state.app.device,
      sidebar: state => state.app.sidebar,
      language: state => state.app.language,
      size: state => state.app.size,
      device: state => state.app.device,
      visitedViews: state => state.tagsView.visitedViews,
      cachedViews: state => state.tagsView.cachedViews,
      token: state => state.user.token,
      avatar: state => state.user.avatar,
      name: state => state.user.name,
      introduction: state => state.user.introduction,
      status: state => state.user.status,
      roles: state => state.user.roles,
      setting: state => state.user.setting,
      permission_routers: state => state.permission.routers,
      addRouters: state => state.permission.addRouters,
      errorLogs: state => state.errorLog.logs
    }
  });
export default store;
