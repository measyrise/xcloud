(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{242:function(t,e,s){var n=s(314);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(26).default)("2a40e7ac",n,!0,{})},313:function(t,e,s){"use strict";var n=s(242);s.n(n).a},314:function(t,e,s){(t.exports=s(25)(!1)).push([t.i,".ctn[data-v-c265b06a]{line-height:50px;cursor:pointer;font-size:20px;text-align:center;float:left}.sub[data-v-c265b06a]:hover{background:#e6dcdc;color:#fff;width:100px}.ctn1[data-v-c265b06a]{border:1px solid green;width:100px}.ctn2[data-v-c265b06a]{border:1px solid #000;width:100px;margin-left:50px}.fixed[data-v-c265b06a]{width:100px;height:100px;position:fixed;background:red;left:10px;top:10px;cursor:move}",""])},337:function(t,e,s){"use strict";s.r(e);s(1),s(2),s(3);var n={name:"Mousemove",data:function(){return{list1:[{name:"拖动我",index:0}],list2:[{name:"a",index:0},{name:"b",index:1},{name:"c",index:2},{name:"d",index:3}],vm:"",sb_bkx:0,sb_bky:0,is_moving:!1}},methods:{mousedown:function(t,e){var s=e.x,n=e.y;this.sb_bkx=s-e.target.offsetLeft,this.sb_bky=n-e.target.offsetTop,this.is_moving=!0},mousemove:function(t,e){var s=e.x-this.sb_bkx,n=e.y-this.sb_bky;this.is_moving&&(e.target.style.left=s+"px",e.target.style.top=n+"px")},mouseup:function(t){this.is_moving=!1}}},i=(s(313),s(28)),o=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"ctn ctn1"},t._l(t.list1,function(e,n){return s("div",{key:n,staticClass:"sub sub1"},[s("div",{staticClass:"dragCtn fixed",on:{mousedown:function(s){t.mousedown(e,s)},mousemove:function(s){s.preventDefault(),t.mousemove(e,s)},mouseup:function(s){t.mouseup(e,s)}}},[t._v(t._s(e.name))])])}),0),t._v(" "),s("div",{staticClass:"ctn ctn2"},t._l(t.list2,function(e,n){return s("div",{key:n,staticClass:"sub sub2"},[s("div",{staticClass:"dragCtn"},[t._v(t._s(n)+" : "+t._s(e.name))])])}),0)])},[],!1,null,"c265b06a",null);o.options.__file="touch.vue";e.default=o.exports}}]);