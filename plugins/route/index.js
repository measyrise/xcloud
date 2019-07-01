export default ({ app: { router, head }, store, route, res, req }) => {
  router.beforeEach((to, from, next) => {
    console.log('route  beforeEach:' + to.path)
    // 没有这行会出现问题，路由不工作了
    var dr = {}
    dr.path = '/main/crouter3'
    dr.name = 'r3'
    dr.component = '/pages/main/crouter3.vue'
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
      console.log('route afterEach:' + to.path)
    })
}
