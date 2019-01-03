<template>
   <div>
  <div class="main">
    <div class="container">
      <div class="row50"> 
       
       <div class="container">
         <div class="row10"></div>
         <div class="row30"></div>
        <div class="row10 fill"></div> 
       </div>

      </div>
      <div class="row10">
        <div class="col10"></div>
        <div class="col20"></div>
        <div class="col10 fill">

            <div class="container">
              <div class="row10"></div>
              <div class="row30"></div>
              <div class="row10 fill"></div> 
            </div>

        </div>
        <div class="col10 "></div>
      </div>
      <div class="row10"></div>
      <div class="row10 fill"></div>
    </div>
  </div>
  </div>

</template>
<script>
export default {
  
} 
</script>
<style rel="stylesheet/scss" lang="scss">
@import '../assets/styles/global.scss';

.smain{
   width: 400px;
   height: 600px;
}

.main
{
  width: calc(100vw - 1px);
  height: calc(100vh - 1px);
   zoom:1;

overflow: hidden;

             clear: both;

             position:relative

}
  .main:after{
                 /*添加一个内容*/
                content: "";
                /*转换为一个块元素*/
                 display: block;
                 /*清除两侧的浮动*/
                 clear: both;
             }




</style>
