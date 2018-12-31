export default ({ app }) => {
  app.router.afterEach((to, from) => {
    // debugger
    console.log('route:' + to.path)
  })
}
