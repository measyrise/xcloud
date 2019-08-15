/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 */
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
  // debugger
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  return { abcd: 'test' } //返回这个数组,也就是返回处理后的假数据)
})
Mock.mock(/\/api\/setlang/, 'get', function(options) {
  debugger
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  return {
    lang: 'lang'
  } //返回这个数组,也就是返回处理后的假数据)
})
