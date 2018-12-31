export default function({ $axios, redirect }) {
  let axios = $axios

  axios.onRequest(config => {
    // debugger
    config.headers['XToken'] = 'custtoken'
    config.timeout = 5000
    //mock 把onUploadProgress置为不是函数，不要上传,估计是个BUG
    config.onUploadProgress = 'disable'
    console.log('Making request to ' + config.headers['XToken'])
  }),
    axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
  // axios.onResponse(
  //   response => response,
  //   error => {
  //     console.log('err' + error) // for debug
  //     Message({
  //       message: error.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     return Promise.reject(error)
  //   }
  // )
}
