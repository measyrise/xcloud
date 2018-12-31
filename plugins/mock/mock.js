// 引入mockjs
// const Mock = require('mockjs')
// 获取 mock.Random 对象
import Mock from 'mockjs'

// Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
// Mock.XHR.prototype.send = function() {
//   if (this.custom.xhr) {
//     this.custom.xhr.withCredentials = this.withCredentials || false
//   }
//   this.proxy_send(...arguments)
// }
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(/\/api/, 'get', function(options) {
  debugger
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  return { abcd: 'test' } //返回这个数组,也就是返回处理后的假数据)
})
