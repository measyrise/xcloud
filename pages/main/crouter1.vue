<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-26 21:24:30
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->

<template>
  <div>
    <h2> {{ $t('main.router') }}</h2>
    <ul>
      <li>
        <nuxt-link to="/main/crouter1/c1">tab1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/main/crouter1/c2">tab2</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/main/crouter1/c3">tab3</nuxt-link>
      </li>
    </ul>
    <nuxt-child/>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
</style>
