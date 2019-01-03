<template>

  <div class="container">
    <div class="cl main">
    </div>
    <div class="cl sub"></div>
    <div class="cl extra"></div>
  </div>

</template>



  
<style rel="stylesheet/scss" lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
.container {
  width: 100%;
}
.container:after {
  display: table;
  content: '.';
  clear: both;
}

.container .cl {
  float: left;
  border: 1px solid red;
  height: 200px;
}

.main {
  width: 100%;
  padding: 0 290px 0 320px;
  background-color: blue;
}
.sub {
  width: 320px;
  margin-left: -100%;
  background-color: green;
}
.extra {
  width: 290px;
  margin-left: -290px;
  background-color: yellow;
}
 </style>
