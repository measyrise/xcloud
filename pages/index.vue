<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2018-12-24 01:17:01
 -->
<template>
  <div>
    <div class="flex-container">
      <div class="flex-item">
        <!-- <h1>{{item.title}}</h1> -->
        <!-- 要传不显示的参数、用params 面要传params 得指定name名称  -->
        <nuxt-link v-for="i in items"
                   :key="i.id"
                   :to="{ path:i.clink,name:i.title1, query:{newsID:i.value,testidd:i.text,link:i.link}, params:{hideid:i.text }}">{{i.text}}</nuxt-link>

        <!-- <li><nuxt-link to='crouter1'>child</nuxt-link></li>
      <li><nuxt-link to='crouter2'>child2</nuxt-link></li> -->

        <!-- <nuxt-link :to="{name:'login',path:'/login',query:{newsID:item.value,testidd:item.text,link:item.link},params:{hideid:item.text }}">登陆</nuxt-link> -->
        <!-- <nuxt-link :to="{name:item.link,path:item.link,params:{vv:item.link}}">{{ item.text }}</nuxt-link> -->
      </div>
      <div>

        <button @click="onclick">lang</button>
      </div>
    </div>
    <hr class="center">
    <div class="center">
      <!-- <p>嵌套子页面内容区</p> -->
      <!-- <router-view> -->
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      items: [
        {
          clink: '/about',
          text: '关于MOCK AXIOS 演示DEMO',
          value: '123',
          title: 'about'
        },
        { clink: '/login', text: '登陆', value: '123', title: 'login' },
        {
          clink: '/adtest',
          text: '动画测试',
          value: '123',
          title: 'animate.css测试'
        },
        { clink: '/trtest', text: '过渡测试', value: '123', title: '过渡测试' },
        { clink: '/gird', text: '栅格测试', value: '123', title: '栅格测试' },
        { clink: '/drag', text: 'drag', value: '123', title: 'drag' },
        { clink: '/touch', text: 'touch', value: '123', title: 'touch' },
        { clink: '/mouse', text: 'mouse', value: '123', title: 'mouse' },
        { clink: '/mousestyle', text: 'mousestyle', value: '123', title: '坐标与样式' },
        { clink: '/slot', text: 'slot', value: '123', title: 'slot' },
        { clink: '/main', text: 'main', value: '123', title: 'main' },
        // { clink: '/menu', text: 'menu', value: '123', title: 'menu' },
         { clink: '/table', text: '表格', value: '123', title: '表格' },
        { clink: '/menu1', text: 'menu1', value: '123', title: 'menu1' },
        { clink: '/crouter1', text: 'crouter1', value: '1', title: 'crouter1' },
        { clink: '/crouter2', text: 'crouter2', value: '2', title: 'crouter2' }
      ]
    }
  },
  methods: {
    onclick() {
      debugger
      var lang = this.$store.state.locale
      if (lang == 'zh') {
        lang = 'en'
      } else {
        lang = 'zh'
      }
      //语言切换的最重要一条
      Cookies.set('language', lang)
      Cookies.set('lang', lang)
      this.$i18n.locale = lang
      // this.$store.commit('SET_LANG', lang)
      this.$store.dispatch('setLanguage', lang)
      // Cookie.set("locale",'en') 
      // 将当前语言保存到cookie 中，代码仅作为演示，自己完善下哈
      //  this.i18n.locale = this.state.locale
      alert('test')
    }
  }
}
</script>

<style>
.flex-container {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 10px;
}

.flex-item {
  display: -webkit-flex;
  display: flex;
  width: auto;
  height: auto;
  border: 1px;
}
a {
  margin-left: 5px;
}
.center {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
</style>
