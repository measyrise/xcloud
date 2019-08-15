/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
Vue.use(VueI18n)

//每次刷新会执行这块，路由是不会执行这块,属于后端，看点击时的情况：点击不执行
export default ({ app, store }) => {
  // debugger
  var t = new Date()
  console.log(
    t +
      '********************************lang_plugin********************************'
  )

  if (!app.i18n) {
    app.i18n = new VueI18n({
      locale: store.state.locale,
      fallbackLocale: 'zh',
      defaultLocale: 'zh',
      messages: {
        zh: require('../../plugins/lang/zh'),
        en: require('../../plugins/lang/en')
      }
    })
  }

  //这是一个扩展函数，在页面可以$调用
  // app.i18n.path = link => {
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`
  //   }

  //   return `/${app.i18n.locale}/${link}`
  // }
}
