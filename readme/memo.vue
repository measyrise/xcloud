<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github: https://github.com/measyrise/xcloud.git
 * @Date: 2019-07-04 16:24:49
 * @LastEditors: liangbojie
 * @LastEditTtime: Do not edit
 -->
<!--
/**
2019-07-04

   1.命名规范
      1.私有的函数或是变量前面加_
      2.全局函数或是变量前面加g,这样有利于分析代码结构，有时候有些变量或是函数不知从哪来
      eg:全局函数或是变量_gsetName(String name)
   2.工具包的函数又怎么定义？
      全局性的，区域性的
   3.组件命名x-组件名
   4.

   2.变量规范，全局变量，本地变量
   3.scrollbar组件扩展
   4.左侧菜单SIDERBAR
   5.顶部NAVBAR
   6.后台框架
   7.多语言
   8.统一皮肤，统一字体
   9.在VUE对像上加载的变量，函数，命名规范
 */

/////////////////    关于格式化的相关知识点////////////////////////////////////////////////////////
 1）ESlint：javascript代码检测工具，可以配置每次保存时格式化js，但每次保存只格式化一点点，你得连续按住Ctrl+S好几次,才格式化好，自行体会~~
 2）vetur：可以格式化html、标准css（有分号 、大括号的那种）、标准js（有分号 、双引号的那种）、vue文件，
但是！格式化的标准js文件不符合ESlint规范，会给你加上双引号、分号等，像这样
 3）Prettier - Code formatter：只关注格式化，并不具有eslint检查语法等能力，只关心格式化文件(最大长度、混合标签和空格、引用样式等)，包括JavaScript · Flow · TypeScript · CSS · SCSS · Less · JSX · Vue · GraphQL · JSON · Markdown
 4）Manta's Stylus Supremacy： 格式化stylus的插件（不用就不装），因为vetur会把css格式化有分号 、大括号的那种，此插件会把css格式化成stylus风格，像这样-->
 <template>
   <div></div>
</template>
