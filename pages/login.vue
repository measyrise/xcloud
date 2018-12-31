<template>
  <div class="body">
    <div class="login">
      <div class="top">
        <div class="svg_comlogo">
        </div>
      </div>

      <div class="contain_login"
           v-show="typeid==1">
        <div class="header">
          <!--  -->
          <div class="router">
            <nuxt-link v-for="(item,index) in ltabs"
                       @click.native="selectitem(1,index)"
                       :to="item.to"
                       :key="index"
                       :class="{'active':index===currid}"
                       v-show="true">
              {{item.name}}
            </nuxt-link>
          </div>
        </div>
        <!--FORM 区  -->
        <div class="loginform"
             v-show="typeid==1">

          <div v-show="0 == currid"
               class="child">
            <form action="a-mobile">

              <!-- 手机输入行 -->
              <div class="inputlinebox">
                <div class="prepend">
                  <div><span class="text">中国</span> </div>
                </div>
                <div class="flex_full">
                  <input type="text"
                         placeholder="请输入手机号"
                         class="text-input">
                  <!-- 图标考虑 -->
                </div>

              </div>

              <!-- 密码输入行 -->
              <div class="inputlinebox">

                <div class="checkbox">
                  <input type="text"
                         placeholder="请输入验证码"
                         class="text-input checkbox">
                  <!-- 图标考虑 -->
                </div>

                <div class="smsbox">
                  <button type="button"
                          class="btnsend">获取短信验证码(1)</button>
                </div>

              </div>

              <!-- 登陆按钮 -->
              <button type="submit"
                      class="btn inputlinebox"><span>登陆</span></button>

            </form>

            <div class="tip">注册即表示同意<a href="/terms"
                 target="_blank"
                 class="link">《使用条款》
              </a>和<a href="/comment-self-discipline"
                 target="_blank"
                 class="link">《跟帖评论自律管理承诺书》</a></div>

          </div>

          <div v-show="1 == currid"
               class="child">
            <form action="a-mobile">

              <!-- 手机输入行 -->
              <div class="inputlinebox">
                <!-- <div data-v-4a5bb81d="" class="prepend">
							<div ><span  class="text">中国</span> </div>
							</div>  -->
                <div class="flex_full">
                  <input type="text"
                         placeholder="请输入手机号/手机号/邮箱"
                         class="text-input">
                  <!-- 图标考虑 -->
                </div>

              </div>

              <!-- 密码输入行 -->
              <div class="inputlinebox">

                <div class="flex_full">
                  <input type="text"
                         placeholder="请输入登陆密码"
                         class="text-input checkbox">
                  <!-- 图标考虑 -->
                </div>

                <div class="smsbox">
                  <button type="button"
                          class="btnsend">忘记密码？</button>
                </div>

              </div>

              <!-- 登陆按钮 -->
              <button type="submit"
                      class="btn inputlinebox"><span>登陆</span></button>

            </form>

            <div class="tip">注册即表示同意<a href="/terms"
                 target="_blank"
                 class="link">《使用条款》
              </a>和<a href="/comment-self-discipline"
                 target="_blank"
                 class="link">《跟帖评论自律管理承诺书》</a></div>

          </div>

        </div>
      </div>

      <div class="contain_register"
           v-show="typeid==2">
        <div class="header">
          <!--  -->
          <div class="router">
            <nuxt-link v-for="(item,index) in rtabs"
                       @click.native="selectitem(2,index)"
                       :to="item.to"
                       :key="index"
                       :class="{'active':index===currid}"
                       v-show="true">
              {{item.name}}
            </nuxt-link>
          </div>
        </div>
        <!--FORM 区  -->
        <div class="loginform">

          <div v-show="0 == currid"
               class="child">
            <form action="a-mobile">

              <!-- 手机输入行 -->
              <div class="inputlinebox">
                <div class="prepend">
                  <div><span class="text">中国</span> </div>
                </div>
                <div class="flex_full">
                  <input type="text"
                         placeholder="请输入手机号"
                         class="text-input">
                  <!-- 图标考虑 -->
                </div>

              </div>
              <!-- ****************************333333******************************************* -->
              <!-- 密码输入行 -->
              <div class="inputlinebox">

                <div class="flex_full">
                  <input type="text"
                         placeholder="请输入验证码"
                         class="text-input checkbox">
                  <!-- 图标考虑 -->
                </div>

                <div class="smsbox">
                  <button type="button"
                          class="btnsend">获取短信验证码(1)</button>
                </div>

              </div>

              <!-- 登陆按钮 -->
              <button type="submit"
                      class="btn inputlinebox"><span>登陆</span></button>

            </form>

            <div class="tip">注册即表示同意<a href="/terms"
                 target="_blank"
                 class="link">《使用条款》
              </a>和<a href="/comment-self-discipline"
                 target="_blank"
                 class="link">《跟帖评论自律管理承诺书》</a></div>

          </div>

        </div>
      </div>

      <div class="foot">
        <!--  -->
        <div class="line">
          <div class="befor"></div>
          <div class="text">第三方平台注册/登陆</div>
          <div class="after"></div>
        </div>

        <div class="thirdbox">
          <!-- 微信 -->
          <div>
            <nuxt-link to="#"
                       class="">
              <span class="svg-weixin"></span>
            </nuxt-link>
          </div>

          <!-- 支付宝 -->
          <!-- <div>
            <nuxt-link to="#"
                       class="">
              <span class="svg-qq"></span>
            </nuxt-link>
          </div> -->

          <!--  QQ-->
          <div>
            <nuxt-link to="#"
                       class="">
              <span class="svg-qq"></span>
            </nuxt-link>
          </div>

          <!--  GITHUB -->
          <div>
            <nuxt-link to="#"
                       class="">
              <span class="svg-github"></span>
            </nuxt-link>
          </div>
          <!--  微博 -->
          <div>
            <nuxt-link to="#"
                       class="">
              <span class="svg-weibo"></span>
            </nuxt-link>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>



<script>
export default {
  data() {
    return {
      ltabs: [{
        name: '手机登陆',
        to: "#",
        show: true
      },
      {
        name: '帐号登陆',
        to: "#",
        show: false
      },
      {
        name: '注册',
        to: "#",
        show: false
      }

      ],
      rtabs: [{
        name: '注册',
        to: "#",
        show: true
      },
      {
        name: '已有帐号、去登陆',
        to: "#",
        show: false
      }
      ],
      currid: 0,
      typeid: 1
    }
  },
  methods: {
    selectitem(typeid, index) {
      let ltypeid = typeid;
      let lindex = index;
      debugger
      if (typeid == 1 && index == 2) {
        ltypeid = 2;
        lindex = 0;

      }

      if (typeid == 2 && index == 1) {
        ltypeid = 1;
        lindex = 0;
      }

      this.typeid = ltypeid;
      this.currid = lindex;
    }


  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
@mixin svg_logo($url, $size) {
  background-image: url(../assets/svg/auth/#{$url});
  display: inline-block;
  background-repeat: round;
  width: $size;
  height: $size;
  vertical-align: middle;
  padding-right: 10px;
  background-size: $size;
  &:hover {
    opacity: 0.7;
  }
}

.login {
  //  border:1px solid #F00;
  text-align: center;
  /*让div内部文字居中*/
  //   background-color: rgb(233, 192, 12);
  // border-radius: 5px;
  // width: 50%;
  // height: 50%;
  min-width: 380px;
  min-height: 300px;
  max-width: 380px;
  max-height: 850px;
  margin: auto;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // box-shadow: 10px 5px 70px #0d957a;
  box-shadow: 0 6px 12px rgba(154, 111, 111, 0.5);

  transition: width 2s;

  // transform: translate3d(-50%, 0, 0);
  .top {
    width: 100%;
    min-height: 70px;
    .svg_comlogo {
      @include svg_logo('comlogo.svg', 60px);
    }
  }

  .header {
    background: white;
    margin: auto;
    height: 30px;

    .router {
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      font-size: 17px;
      width: 100%;
      display: inline-block;
      box-shadow: 0 -1px 0 0 #e6e6e6 inset;

      a:nth-last-child(1) {
        float: right;
        padding: 0;
        margin-right: 10px;
      }

      a {
        margin-left: 10px;
        margin-bottom: 2px;
        display: block;
        text-decoration: none;
        float: left;
        height: 28px;
        font-size: 17px;
        color: #000000;
        cursor: pointer;
      }

      a:link {
        color: #000000;
      }

      /* 未访问链接*/

      // a:visited {color:#00FF00;}  /* 已访问链接 */
      /* 鼠标点击时 */
      a:hover {
        border-bottom: 1px solid #1677d9;
      }

      a:hover:not(.active) {
        font-size: 17px;
      }

      //获得Hover 但不是激活是
      a.active {
        font-size: 18px;
        border-bottom: 2px solid #1677d9;
        font-weight: 900;
      }
    }
  }

  .loginform {
    margin: auto;
    width: 95%;
    // height: calc(100% - 180px);
    margin-top: 30px;

    .child {
      //  height: 100%;
      width: 100%;

      form {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        //手机输入框
        .inputlinebox {
          // flex-shrink: 0;
          display: flex;
          align-items: center;
          height: 48px;
          width: 100%;
          border: 1px solid #ccc;
          margin-top: 20px;

          .prepend {
            margin-left: 16px;
            display: inline-flex;
            align-items: center;
            border-right: 1px solid #666;
            padding-right: 16px;
          }

          .flex_full {
            flex-grow: 1;
            display: flex;
          }

          //验证码输入框
          .text-input {
            margin-left: 16px;
            min-width: 0;
            line-height: 45px;
            background: transparent;
            border: none;
            outline: none;
            flex-grow: 1;
            padding: 0px 5px 0px 3px;
          }

          .checkbox {
            display: flex;
            flex-grow: 1;
          }

          .smsbox {
            border-left: 1px solid #666;
            display: inline-flex;
          }

          .btnsend {
            height: 48px;
            font-size: 14px;
            border: none;
            /* outline: none; */
            background: transparent;
            cursor: pointer;
            transition: 0.15s;
            color: #666;
          }

          .btnsend:hover {
            color: #1677d9;
          }

          .btnsend:hover.not {
            color: #666;
          }
        }

        .inputlinebox:hover {
          border: 1px solid #1677d9;
          box-shadow: 0 0 0 2px #cce6ff;
        }

        //登础按钮
        .btn {
          background: #1677d9;
          color: #fff;
          display: block;
          margin-top: 30px;
        }
      }
    }

    .tip {
      margin-top: 10px;
      font-size: 12px;
      padding-bottom: 30px;
      // box-shadow: 0 -1px 0 0 #e6e6e6 inset;
    }
  }

  .foot {
    width: 100%;
    min-height: 50px;

    .line {
      margin-top: 1px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      .befor {
        border-top: 1px solid #b5b5b5;
        flex-grow: 1;
        margin-right: 12px;
      }

      .text {
        font-size: 12px;
        font-weight: 900;
        flex-grow: 0;
      }

      .after {
        border-top: 1px solid #b5b5b5;
        flex-grow: 1;
        margin-left: 12px;
      }
    }

    .thirdbox {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      .svg-qq {
        @include svg_logo('qq.svg', 30px);
      }
      .svg-weixin {
        @include svg_logo('weixin.svg', 30px);
      }
      .svg-github {
        @include svg_logo('github.svg', 30px);
      }
      .svg-weibo {
        @include svg_logo('weibo.svg', 30px);
      }
    }
  }
}
</style>
