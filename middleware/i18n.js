/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:16:17
 */
/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 * //每次刷新会执行这块，,属于后端，看点击时的情况：点击不执行,因为数据已返到前端，前端在前台获取相关数据了,只有刷新再从这里取数
 */
import Cookies from 'js-cookie'
export default function({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
  req
}) {
  debugger
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params

  //刷新后这个是获取的是原值，不是设定的值
  // const setlang = store.state.locale
  // console.log('reflash-setlang:' + setlang)
  // //刷新后这个获取不值
  // const clang = Cookies.get('language')
  // console.log('reflash-clang:' + clang)
  // //这个一值保持原值
  // console.log('reflash-defaultLocale:' + defaultLocale)
  var locale = store.state.locale
  // console.log('reflash-locale:' + locale)

  // var locale = null
  // if (route.fullPath.indexOf('lang=zh') > 0) {
  //   var locale = 'en'
  // } else {
  //   var locale = 'zh'
  // }
  // console.log('reflash')
  if (store.state.locales.indexOf(locale) === -1) {
    return error({
      message: 'This page could not be found.',
      statusCode: 404
    })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = locale
  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    const url = route.fullPath.replace(re, '/')
    return redirect(url)
  }
}
