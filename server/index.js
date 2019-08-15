/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 */

const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  console.log('0')
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // debugger
  //在这个时刻加入国际误言
  // var lang = new VueI18n({
  //   locale: Cookies.get('language') || 'zh',
  //   fallbackLocale: Cookies.get('language') || 'zh',
  //   // debugger,
  //   messages: {
  //     zh: require('../plugins/lang/zh'),
  //     en: require('../plugins/lang/en')
  //   }
  // })

  // app.use(lang)

  // app.i18n.locale = 'en'
  /* 这段代码也没什么用，不知为什么要*/
  // app.i18n.path = link => {
  //   debugger
  //   if (app.i18n.locale === app.i18n.fallbackLocale) {
  //     return `/${link}`
  //   }
  //   return `/${app.i18n.locale}/${link}`
  // }

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
