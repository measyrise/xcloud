<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-06-01 08:10:26
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<template>
  <div id="leftMenu">
    <ul>
      <li>
        <a href="#">一级目录1</a>
        <ul>
          <li>
            <a href="#">100001</a>
          </li>
          <li>
            <a href="#">100002</a>
            <ul>
              <li>
                <a href="#">100021</a>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </li>
              <li>
                <a href="#">100022</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">一级目录2</a>
      </li>
      <li>
        <a href="#">一级目录3</a>
        <ul>
          <li>
            <a href="#">300001</a>
          </li>
          <li>
            <a href="#">300002</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang='scss'  scoped>
* {
  margin: 0;
  padding: 0;
}
#leftMenu {
  width: 100px;
  position: absolute;
  background: #dadada;
  list-style: none;
}
#leftMenu li {
  width: 100px;
  position: relative;
}
li > ul {
  left: 100px;
  top: 0;
  transition: 1s;
  display: none;
  width: 1px;
  height: 1px;
  position: relative;
}

li:hover > ul {
   display: block;
}
</style>