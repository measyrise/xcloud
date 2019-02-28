<template>
  <div class="prepend">
    <div class="calling-code-picker">
      <div class="btn" @click="show(1)">
        <span class="text">{{text}}</span>
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-triangle icon"
          :class="{reverse:isshow}"
        >
          <path fill="#222" d="M8 14l8-12H0z"></path>
        </svg>
      </div>
      <div class="dropdown" v-show="isshow" v-clickoutside="handleClose">
        <div class="container">
          <div class="item" v-for="(item,index) in countrylist" 
          :key="index"    @click="selectitem(item)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="sep"></div>
  </div>
</template>


<style  rel="stylesheet/scss" lang="scss" scoped>
.prepend {
  display: inline-flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;
  .calling-code-picker {
    position: relative;
    height: 100%;
    .btn {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
       .text{
          max-width: 56px;
          text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
       }

      .icon-triangle {
        margin-left: 5px;
        width: 10px;
        min-width: 10px;
        height: 8px;
        fill: #222;
        transition: 0.3s;
      }
      .reverse {
        transform: rotate(180deg);
      }
    }
    .dropdown {
      position: absolute;
      top: calc(100% + 1px);
      left: -16px;
      z-index: 99;
      padding: 10px 0;
      border: 1px solid #dcdcdc;
      background: #fff;

      .container {
        width: 200px;
        height: 258px;
        font-size: 12px;
        overflow-x: hidden;
        overflow-y: scroll;

        .item {
          position: relative;
          padding-left: 19px;
          height: 25px;
          line-height: 25px;
          font-size: 14px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #222;
          cursor: pointer;
        }
         .item:hover{
            background:#ccc;
         }


        .item:hover:before {
          content: "";
          position: absolute;
          top: 8px;
          left: 6px;
          width: 8px;
          height: 5px;
          border-left: 2px solid #1677d9;
          border-bottom: 2px solid #1677d9;
          transform: rotate(-45deg);
         }

      }

      .container::-webkit-scrollbar {
        margin-right: 5px;
        width: 15px;
      }
      .container::-webkit-scrollbar-thumb {
        height: 50px;
        background: #ccc;
        background-clip: padding-box;
        border: 5px solid transparent;
        border-radius: 20px;
      }
    }
  }

  .sep {
    margin-left: 16px;
    height: 20px;
    width: 1px;
    background: #ccc;
  }
}
</style>

<script>
      const clickoutside = {
          // 初始化指令
          bind(el, binding, vnode) {
              function documentHandler(e) {
                  // 这里判断点击的元素是否是本身，是本身，则返回
                  debugger
                  if (el.contains(e.target)
                    ||e.target.classList.contains('text')
                    ||e.target.classList.contains('icon')
                    ||e.target.classList.contains('btn')
                  ) {
                      return false;
                  }
                  // 判断指令中是否绑定了函数
                  if (binding.expression) {
                      // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                      binding.value(e);
                  }
              }
              // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
              el.__vueClickOutside__ = documentHandler;
              document.addEventListener('click', documentHandler);
          },
          update() {},
          unbind(el, binding) {
              // 解除事件监听
              document.removeEventListener('click', el.__vueClickOutside__);
              delete el.__vueClickOutside__;
          },
      };



export default {
  data: function() {
    return {
      text: '中国',
      isshow: false,
      countrylist:[
        {id:1,name:"阿尔巴尼亚" },
        { id:2,name:"阿尔及利亚" },
        {id:3,name: "阿富汗" },
        {id:4,name:"阿根廷" },
        {id:5,name:"埃及" },
        {id:6,name:"安哥拉" }
      ]
    }
  },
  directives: {clickoutside},
  methods: {
    show(v) {
      this.isshow = !this.isshow
      //   alert('tst' + v)
    },
    handleClose(e) {
         this.isshow = false;
     },
    selectitem(item)
    {
      this.text=item.name;
      this.isshow=false;
    }
        
  }
}
</script>
