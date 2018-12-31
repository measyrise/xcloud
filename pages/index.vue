<template>

  <div class="flex-container">
    <div class="flex-item">
      <!-- <h1>{{item.title}}</h1> -->

      <!-- 要传不显示的参数、用params 面要传params 得指定name名称  -->

      <nuxt-link v-for="i in items"
                 :key="i.id"
                 :to="{name:i.title1, path:i.clink, query:{newsID:i.value,testidd:i.text,link:i.link}, params:{hideid:i.text }}">
        {{i.text}}
      </nuxt-link>
      <!-- <nuxt-link :to="{name:'login',path:'/login',query:{newsID:item.value,testidd:item.text,link:item.link},params:{hideid:item.text }}">登陆</nuxt-link> -->

      <!-- <nuxt-link :to="{name:item.link,path:item.link,params:{vv:item.link}}">{{ item.text }}</nuxt-link> -->
    </div>
  </div>

</template>
<script>
export default {


  data() {
    return {
      items: [{ clink: '/about', text: '关于', value: '123', title: 'about' },
      { clink: '/login', text: '登陆', value: '123', title: 'login' }
      ]
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
</style>
