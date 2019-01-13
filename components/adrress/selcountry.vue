<template>
  <div class="prepend">
    <div class="calling-code-picker">
      <div class="btn" @click="show(1)">
        <span class="text">中国</span>
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          class="icon-triangle icon"
          :class="{reverse:isshow}"
        >
          <path fill="#222" d="M8 14l8-12H0z"></path>
        </svg>
      </div>
      <div class="dropdown" v-show="isshow">
        <div class="container">
          <div class="item">阿尔巴尼亚</div>
          <div class="item">阿尔及利亚</div>
          <div class="item">阿富汗</div>
          <div class="item">阿根廷</div>
          <div class="item">埃及</div>
          <div class="item">安哥拉</div>
          <div class="item">阿尔及利亚</div>
          <div class="item">阿富汗</div>
          <div class="item">阿根廷</div>
          <div class="item">埃及</div>
          <div class="item">安哥拉</div>
          <div class="item">阿尔及利亚</div>
          <div class="item">阿富汗</div>
          <div class="item">阿根廷</div>
          <div class="item">埃及</div>
          <div class="item">安哥拉</div>
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
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;

      .icon-triangle {
        margin-left: 5px;
        width: 10px;
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
      left: -15px;
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
export default {
  data: function() {
    return {
      text: '',
      isshow: false
    }
  },
  methods: {
    show(v) {
      this.isshow = !this.isshow
      //   alert('tst' + v)
    }
  }
}
</script>
