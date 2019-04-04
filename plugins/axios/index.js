/*
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 */
//如下{ $axios, redirect }表示引用VUE系统_ref对像的_ref.$axios,_ref.redirect
export default function({ $axios, redirect }) {
  let axios = $axios

  axios.onRequest(config => {
    debugger
    config.headers['XToken'] = 'custtoken'
    config.timeout = 5000
    //mock 把onUploadProgress置为不是函数，不要上传,估计是个BUG
    config.onUploadProgress = 'disable'
    console.log('拦截器打印请求URL:' + config.url)
  }),
    axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
}
