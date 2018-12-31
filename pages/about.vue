<template>
  <div>
    <h1>{{ ip }}</h1>
    <h2>{{ chideid }}</h2>
    <p>param: {{ $t('login.welmsg') }} {{ cmsg }} </p>
  </div>
</template>

<script>
import Mock from 'mockjs'

// debugger
// Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
// Mock.XHR.prototype.send = function() {
//   if (this.custom.xhr) {
//     this.custom.xhr.withCredentials = this.withCredentials || false
//   }
//   this.proxy_send(...arguments)
// }

//   }] //     'article': '@csentence' //     'title': '@title', //   'data|1-2': [{ // Mock.mock('http://myname.com', 'post', {//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以 // }) //   'age|1-10': 10 //   'name': '@cname', // Mock.mock('http://icanhazip.com', 'get',{//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以 // import MockAdapter from 'axios-mock-adapter'
// })

// .Mock.setup({
//   timeout: '200-400'
// })

var data = Mock.mock(
  'http://abc.json',
  'get',
  {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
      }
    ]
  }
)
// 输出结果
// console.log(JSON.stringify(data, null, 4))

// Mock.mock('http://icanhazip.com', 'get',"'dd':'3333'")
// ;('use strict')
export default {
  head: {
    title: 'myTitle'
  },
  async asyncData({ $axios }) {
    let data = null
    await $axios
      .request({
        url: 'http://abc.json',
        method: 'get',
        data: 'params'
      })
      .then(result => {
      //   debugger
        data = result.data
      //   console.log(result)
      })
      .catch(err => {
      //   debugger
      //   console.log(err)
      })

    return {
      ip: data ? data : 'null'
    }
  },
  data() {
    return {
      //注意，直接刷新本界面时会存在$route值不存在,因为根据就不存在跳转，所以程序设计上要注意
      msg: '',
      hideid: ''
    }
  },
  computed: {
    cmsg: function() {
      //  debugger
      // const test=this.msg;
      // const data= this.$axios.$get('http://icanhazip.com').then((result) => {
      //    console.log(result);

      // }).catch((err) => {
      //     console.log("asyncData");
      // });

      // console.log(this.$route.query.testidd);
      // console.log(this.$route.params.hideid);
      //  this.msg=this.$route.query.newsID;

      return this.$route.query.newsID ? this.$route.query.newsID : '空值'
    },
    chideid: function() {
      return this.$route.params.hideid ? this.$route.params.hideid : '空值'
    }
  }
}
</script>
