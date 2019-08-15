import lang from '../lang'
import Cookies from 'js-cookie'
import Mock from 'mockjs'
/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2018-12-24 01:17:01
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 */
Mock.mock('/api/setlang', 'get', {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-20': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }
  ]
})

export default ({
  app: { router, head, i18n },
  $axios,
  store,
  route,
  res,
  req
}) => {
  router.beforeEach((to, from, next) => {
    console.log('route  beforeEach:' + route.fullPath)
    // 没有这行会出现问题，路由不工作了
    var dr = {}
    dr.path = '/main/crouter3'
    dr.name = 'r3'
    dr.component = '/pages/main/crouter3.vue'
    var lang = ''
    if (route.fullPath.indexOf('?') > 0) {
      lang = '&lang=en'
    } else {
      lang = '?lang=en'
    }
    // route.fullPath = route.fullPath + lang
    // debugger
    // let isClient = process.client
    // if (isClient) {
    //   let currentUrl = location.href
    //   if (currentUrl.indexOf('lang=') !== -1) {
    //     let lang = currentUrl.split('lang=')[1]
    //     lang = wechattoken.split('&')[0]
    //     Cookies.set('language', lang)
    //   }
    //   let lang = Cookies.get('language')
    //   if (lang) {
    //     store.state.locale = lang
    //     //对当前的
    //     $axios
    //       .request({
    //         //url: '/fi',   //  代理设了 /=/API/ 这里翻译过来就是  /API/FI,那么MOCK 要设成/API/FI
    //         url: '/setlang', //  代理设了 /=/API/ 这里翻译过来就是  /API/FI,那么MOCK 要设成/API/FI
    //         method: 'get',
    //         data: lang
    //       })
    //       .then(result => {
    //         debugger
    //         var data = result.data
    //         console.log(data)
    //       })
    //       .catch(err => {
    //         debugger
    //         console.log(err)
    //       })
      // }
    // }
    // app.i18n.locale = store.state.locale
    // debugger
    // // if (to.path.indexOf('crouter1') > 0) {
    // //   store.commit('SET_LANG', 'zh')
    // // } else {
    // //   store.commit('SET_LANG', 'en')
    // // }
    // // app.i18n.locale = store.state.locale
    // router.addRoutes(dr) // 动态添加可访问路由表
    // next({
    //   ...to,
    //   replace: true
    // })
    // if (to.path == '/main/index1') {
    //   next()
    // }

    next()
  }),
    router.afterEach((to, from) => {
      // debugger
      console.log('route afterEach:' + route.fullPath)
    })
}
