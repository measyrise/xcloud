<template>
  <div>
    <ul class="nav">
      <li>
        <a href>首页</a>
      </li>
      <li>
        <a href>衣服</a>
        <ul class="list">
          <li>
            <a href>夹克</a>
          </li>
          <li>
            <a href>衬衫</a>
          </li>
          <li>
            <a href>羽绒服</a>
          </li>
          <li>
            <a href>毛线衣</a>
          </li>
        </ul>
      </li>
      <li class="mr0">
        <a href>裤子</a>
      </li>
    </ul>
  </div>
</template>

<style lang='scss'  scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
.nav {
  width: 320px;
  height: 50px;
  margin: 50px auto;
}
.nav li {
  float: left;
  width: 100px;
  height: 50px;
  margin-right: 10px;
  background-color: pink;
  line-height: 50px;
  text-align: center;
}
.nav .mr0 {
  margin-right: 0;
}
.nav li a {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 20px;
}
.nav > li:nth-child(2) {
  position: relative;
}
.nav .list {
  position: absolute;
  overflow: hidden; /*必须用overflow,不然内容会挤出去，就算设置高度为零也没意义*/
  top: 50px;
  left: 0;
  height: 0;
  transition: 1s;
}
.nav > li:nth-child(2):hover .list {
  height: 200px;
}
</style>