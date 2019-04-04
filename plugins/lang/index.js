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

Vue.use(VueI18n)

export default ({
  app,
  store
}) => {
  debugger
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh',
    messages: {
      en: require('~/plugins/lang/en.js'),
      zh: require('~/plugins/lang/zh.js')
    }
  })

  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }

  // import Cookies from 'js-cookie'
  // import enLocale from './en'
  // import zhLocale from './zh'

  // const messages={

  // 	zh:{
  // 		...zhLocale
  // 	},
  // 	en:{
  // 		...enLocale
  // 	}

  // }

  // const i18n=new VueI18n({

  // 	//从cookies 里取，如果取不到则用zh来代替
  // 	 locale: Cookies.get('language') || 'zh',
  // 	// set locale messages
  // 	 messages
  // })
}
