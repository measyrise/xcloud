(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{244:function(t,e,i){var l=i(318);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);(0,i(26).default)("490bb9d6",l,!0,{})},317:function(t,e,i){"use strict";var l=i(244);i.n(l).a},318:function(t,e,i){(t.exports=i(25)(!1)).push([t.i,".flex-container{display:flex;justify-content:center;width:100%;height:100%;margin:10px}.flex-item{display:flex;width:auto;height:auto;border:1px}a{margin-left:5px}.center{margin-left:auto;margin-right:auto;display:flex;justify-content:center}",""])},334:function(t,e,i){"use strict";i.r(e);i(1),i(2),i(3);var l=i(9),n=i.n(l),a={data:function(){return{items:[{clink:"/about",text:"关于MOCK AXIOS 演示DEMO",value:"123",title:"about"},{clink:"/login",text:"登陆",value:"123",title:"login"},{clink:"/adtest",text:"动画测试",value:"123",title:"animate.css测试"},{clink:"/trtest",text:"过渡测试",value:"123",title:"过渡测试"},{clink:"/gird",text:"栅格测试",value:"123",title:"栅格测试"},{clink:"/drag",text:"drag",value:"123",title:"drag"},{clink:"/touch",text:"touch",value:"123",title:"touch"},{clink:"/mouse",text:"mouse",value:"123",title:"mouse"},{clink:"/mousestyle",text:"mousestyle",value:"123",title:"坐标与样式"},{clink:"/slot",text:"slot",value:"123",title:"slot"},{clink:"/main",text:"main",value:"123",title:"main"},{clink:"/table",text:"表格",value:"123",title:"表格"},{clink:"/menu1",text:"menu1",value:"123",title:"menu1"},{clink:"/crouter1",text:"crouter1",value:"1",title:"crouter1"},{clink:"/crouter2",text:"crouter2",value:"2",title:"crouter2"}]}},methods:{onclick:function(){var t=this.$store.state.locale;t="zh"==t?"en":"zh",n.a.set("language",t),n.a.set("lang",t),this.$i18n.locale=t,this.$store.dispatch("setLanguage",t),alert("test")}}},u=(i(317),i(28)),s=Object(u.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"flex-container"},[i("div",{staticClass:"flex-item"},t._l(t.items,function(e){return i("nuxt-link",{key:e.id,attrs:{to:{path:e.clink,name:e.title1,query:{newsID:e.value,testidd:e.text,link:e.link},params:{hideid:e.text}}}},[t._v(t._s(e.text))])}),1),t._v(" "),i("div",[i("button",{on:{click:t.onclick}},[t._v("lang")])])]),t._v(" "),i("hr",{staticClass:"center"}),t._v(" "),i("div",{staticClass:"center"},[i("nuxt-child")],1)])},[],!1,null,null,null);s.options.__file="index.vue";e.default=s.exports}}]);