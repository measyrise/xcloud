(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{235:function(n,t,e){var a=e(300);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(26).default)("b4836b4a",a,!0,{})},299:function(n,t,e){"use strict";var a=e(235);e.n(a).a},300:function(n,t,e){(n.exports=e(25)(!1)).push([n.i,".container[data-v-c8910d2e]{width:80px;height:300px;position:absolute;left:0;display:flex;flex-direction:column;padding:0}.item[data-v-c8910d2e]{margin-top:10px;transition:all .3s linear}",""])},343:function(n,t,e){"use strict";e.r(t);var a=e(11),r=e.n(a),o=(e(1),e(2),e(3),{name:"Toolbar",data:function(){return{items:[{key:1,color:"#ffebcc"},{key:2,color:"#ffb86c"},{key:3,color:"#f01b2d"}],dragging:[]}},methods:{handleDragStart:function(n,t){console.log("handleDragStart"),this.dragging=t},handleDragEnd:function(n,t){console.log("handleDragEnd"),this.dragging=null},handleDragOver:function(n){console.log("handleDragOver"),n.dataTransfer.dropEffect="move"},handleDragEnter:function(n,t){if(console.log("handleDragEnter"),n.dataTransfer.effectAllowed="move",t!==this.dragging){var e=r()(this.items);console.log(e);var a=e.indexOf(this.dragging),o=e.indexOf(t);e.splice.apply(e,[o,0].concat(r()(e.splice(a,1)))),this.items=e}}}}),i=(e(299),e(28)),l=Object(i.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("transition-group",{staticClass:"container",attrs:{tag:"div"}},n._l(n.items,function(t,a){return e("div",{key:t.key,staticClass:"item",style:{background:t.color,width:"80px",height:"80px"},attrs:{id:a,draggable:"true"},on:{dragstart:function(e){n.handleDragStart(e,t)},dragover:function(e){e.preventDefault(),n.handleDragOver(e,t)},dragenter:function(e){n.handleDragEnter(e,t)},dragend:function(e){n.handleDragEnd(e,t)}}})}),0)],1)},[],!1,null,"c8910d2e",null);l.options.__file="drag.vue";t.default=l.exports}}]);