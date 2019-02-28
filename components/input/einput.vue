<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 * @Date: 2019-02-28 08:56:16
 -->


<template>
      <div class="flex_full">

           <input :type="type"  :placeholder ="placeholder"  class="text-input" :style="style" v-model="value" >

            <!-- 错误提示 -->
           <div class="errortip" v-show="iserror()"> {{verrortip}} </div>

           <!-- 图片按钮，这个按钮功能设在调用窗口实现 -->
           <div class="showpwd" v-show="isshowpwd()" @click="switchshowpwd()"> 
             <span :class="{hidepwd:showorhide===false,showpwd:showorhide===true}"></span>
           </div>

      </div> 
     

</template>

<script>     
export default {

data() {
    return {
       style: {},
       value:'',
       showorhide:true
    }
  },

created: function () {
    let s = 'width:' + this.w + ';'
    s += 'height:' + this.h + ';'
    this.style = s
  },

props: {
 
    /**
     * @Description: 文件描述
     * @Author: liangbojie
     * @param {type} 
     * @return: 
     * @LastEditors: liangbojie
     * @LastEditTtime: Do not edit
     * @Date: 2019-02-28 09:43:23
     */  
    
     placeholder: {
      type: String,
      default: null
    },
    verrortip: {
       type: String,
       default: null
      },
    w: {
      type: String,
      default: '100%'
    },
    h: {
      type: String,
      default: '100%'
    },
    type:{
       type: String,
       default: 'text'
    },
    showpwd:{
     type: Boolean,
     default: false
    },

    viserror:{
      type: Boolean,
      default: false
    }

   },

  methods: {
      iserror()
      {
        return this.viserror
      },
      isshowpwd()
      {
        debugger
        if (this.value.length && this.showpwd)
        {
         return true
        }
        else{
          return false
        }
      },
      switchshowpwd()
      {
        this.showorhide=!this.showorhide
      },
      seterror(text)
      {
        this.viserror=true
        this.verrortip=text
      }


    }
     
}

 
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

      @import '../../assets/styles/xmixin.scss';
      // @import '../assets/styles/variables.scss';

        .flex_full {
            flex-grow: 1;
            display: flex;
            align-items:center;
            overflow: hidden;
            margin: auto;
            justify-content:flex-end;
            width: 0;
 
           //验证码输入框
          .text-input {
            margin-left: 16px;
            min-width: 0;
            background: white;
            //解决自动填充后黄色底的问题
            box-shadow: 0 0 0px 1000px white inset;
            border: none;
            outline: none;
            flex-grow: 1;
            padding: 0px 5px 0px 3px;
          }
          .errortip
          {
            font-size: 12px;
            color: #e62e4d;
            max-width: 40%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .showpwd
          {
            font-size: 12px;
            color: #e62e4d;
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
            .showpwd{
              @include svg_logo('../../assets/svg/pwd/showpwd.svg', 30px);
            }
            .hidepwd{
              @include svg_logo('../../assets/svg/pwd/hidepwd.svg', 30px);
            }
          }
          
        }


</style>
