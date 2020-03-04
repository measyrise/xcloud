<!--
 * @Description: 文件描述
 * @Author: liangbojie
 * @Github:
 * @LastEditors: liangbojie
 * @LastEditTtime: lastTime
 * @Date: 2018-12-27 11:59:20
 -->

<template>
   <div class="main">
      <xlgrid>
         <xlrow h="50px">
            <xlcol w="40%" />
            <xlcol w="100%">text</xlcol>
         </xlrow>

         <xlrow h="100%">
            <!-- 动画应用 -->
            <div :class="{fadeOutRightBig:ad==2,fadeInLeft:ad==1,fadeOutLeftBig:ad==4,fadeInRight:ad==3}"
                 class="login animated">
               <!-- 头部LOGO 显示 -->
               <div class="top">
                  <div class="svg_comlogo" />
               </div>

               <!-- 中部框架 -->
               <div v-show="typeid==1"
                    class="contain_login">
                  <!-- 切换TAB  -->
                  <div class="header">
                     <div class="router">
                        <nuxt-link v-for="(item,index) in ltabs"
                                   v-show="true"
                                   :to="item.to"
                                   :key="index"
                                   :class="{'active':index===currid}"
                                   @click.native="selectitem(1,index)">{{ item.name }}</nuxt-link>
                     </div>
                  </div>

                  <!--TAB 显示 FORM 区  -->
                  <div v-show="typeid==1"
                       class="loginform">
                     <div v-show="0 == currid"
                          class="child">
                        <form action="a-mobile">
                           <!-- 手机输入行 -->
                           <div :class="{error:iserror===true}"
                                class="inputlinebox">
                              <!-- 使用地区插件 -->
                              <selcountry />
                              <!-- 使用input插件 -->
                              <einput ref="idmobile"
                                      placeholder="请输入手机号"
                                      verrortip="请输入正确的手机号" />
                           </div>

                           <!-- 密码输入行 -->
                           <div class="inputlinebox">
                              <einput :showpwd="true"
                                      placeholder="请输入验证码"
                                      verrortip="请输入正确的密码"
                                      type="password" />

                              <div class="smsbox">
                                 <button type="button"
                                         class="btnsend"
                                         @click="sendsms()">获取短信验证码(1)</button>
                              </div>
                           </div>

                           <!-- 登陆按钮 -->
                           <button type="submit"
                                   class="loginbtn inputlinebox">
                              <span>手机登陆</span>
                           </button>
                        </form>

                        <div class="tip">
                           注册即表示同意
                           <a href="/terms"
                              target="_blank"
                              class="link">《使用条款》</a>和
                           <a href="/comment-self-discipline"
                              target="_blank"
                              class="link">《跟帖评论自律管理承诺书》</a>
                        </div>
                     </div>

                     <div v-show="1 == currid"
                          class="child">
                        <form action="a-mobile">
                           <!-- 手机输入行 -->
                           <div class="inputlinebox">
                              <einput placeholder="请输入手机号/手机号/邮箱" />
                           </div>

                           <!-- 密码输入行 -->
                           <div class="inputlinebox">
                              <einput :showpwd="true"
                                      placeholder="请输入验证码"
                                      verrortip="请输入正确的密码"
                                      type="password" />

                              <div class="smsbox">
                                 <button type="button"
                                         class="btnsend">忘记密码？</button>
                              </div>
                           </div>

                           <!-- 登陆按钮 -->
                           <button type="submit"
                                   class="regbtn inputlinebox">
                              <span>帐号登陆</span>
                           </button>
                        </form>

                        <div class="tip">
                           注册即表示同意
                           <a href="/terms"
                              target="_blank"
                              class="link">《使用条款》</a>和
                           <a href="/comment-self-discipline"
                              target="_blank"
                              class="link">《跟帖评论自律管理承诺书》</a>
                        </div>
                     </div>
                  </div>
               </div>

               <div v-show="typeid==2"
                    class="contain_register">
                  <div class="header">
                     <!--  -->
                     <div class="router">
                        <nuxt-link v-for="(item,index) in rtabs"
                                   v-show="true"
                                   :to="item.to"
                                   :key="index"
                                   :class="{'active':index===currid}"
                                   @click.native="selectitem(2,index)">{{ item.name }}</nuxt-link>
                     </div>
                  </div>
                  <!--FORM 区  -->
                  <div class="loginform">
                     <div v-show="0 == currid"
                          class="child">
                        <form action="a-mobile">
                           <!-- 手机输入行 -->
                           <div class="inputlinebox">
                              <!-- <div class="prepend">
                      <div>
                        <span class="text">中国</span>
                      </div>
                    </div>-->
                              <selcountry />
                              <einput type="text"
                                      placeholder="请输入手机号" />
                              <!-- 图标考虑 -->
                           </div>
                           <!-- ****************************333333444******************************************* -->
                           <!-- 密码输入行 -->
                           <div class="inputlinebox">
                              <einput :showpwd="true"
                                      type="password"
                                      placeholder="请输入验证码" />

                              <div class="smsbox">
                                 <button type="button"
                                         class="btnsend">获取短信验证码(1)</button>
                              </div>
                           </div>

                           <!-- 登陆按钮 -->
                           <button type="submit"
                                   class="regbtn inputlinebox">
                              <span>注册帐号</span>
                           </button>
                        </form>

                        <div class="tip">
                           注册即表示同意
                           <a href="/terms"
                              target="_blank"
                              class="link">《使用条款》</a>和
                           <a href="/comment-self-discipline"
                              target="_blank"
                              class="link">《跟帖评论自律管理承诺书》</a>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="foot">
                  <!--  -->
                  <div class="line">
                     <div class="befor" />
                     <div class="text">第三方平台注册/登陆</div>
                     <div class="after" />
                  </div>

                  <div class="thirdbox">
                     <!-- 微信 -->
                     <div>
                        <nuxt-link to="#"
                                   class>
                           <span class="svg-weixin" />
                        </nuxt-link>
                     </div>

                     <!-- 支付宝 -->
                     <!-- <div>
                  <nuxt-link to="#"
                            class="">
                    <span class="svg-qq"></span>
                  </nuxt-link>
              </div>-->
                     <!--  QQ-->
                     <div>
                        <nuxt-link to="#"
                                   class>
                           <span class="svg-qq" />
                        </nuxt-link>
                     </div>

                     <!--  GITHUB -->
                     <div>
                        <nuxt-link to="#"
                                   class>
                           <span class="svg-github" />
                        </nuxt-link>
                     </div>
                     <!--  微博 -->
                     <div>
                        <nuxt-link to="#"
                                   class>
                           <span class="svg-weibo" />
                        </nuxt-link>
                     </div>
                  </div>
               </div>
            </div>
         </xlrow>
         <xlrow h="30px" />
      </xlgrid>
   </div>
</template>



<script>
import animate from "animate.css";
import { xlgrid, xlrow, xlcol } from "../components/layouts/xgrid/xgrid.js";
import selcountry from "../components/adrress/selcountry.vue";
import einput from "../components/input/einput.vue";

export default {
   components: {
      xlgrid,
      xlrow,
      xlcol,
      selcountry,
      einput
   },
   data () {
      return {
         ltabs: [
            {
               name: "手机登陆",
               to: "#",
               show: true
            },
            {
               name: "帐号登陆",
               to: "#",
               show: false
            },
            {
               name: "注册",
               to: "#",
               show: false
            }
         ],
         rtabs: [
            {
               name: "注册",
               to: "#",
               show: true
            },
            {
               name: "已有帐号、去登陆",
               to: "#",
               show: false
            }
         ],
         currid: 0,
         typeid: 1,
         ad: 0,
         iserror: false
      };
   },
   methods: {
      selectitem (typeid, index) {
         // debugger
         let ltypeid = typeid;
         let lindex = index;

         //  let login=query(".login");

         //  login.addClass("dd");
         if (typeid == 1 && index == 2) {
            ltypeid = 2;
            lindex = 0;
            this.ad = 2;
            setTimeout(() => {
               this.ad = 1;
            }, 300);
            // this.ad=0;
         }

         if (typeid == 2 && index == 1) {
            ltypeid = 1;
            lindex = 0;
            this.ad = 4;
            setTimeout(() => {
               this.ad = 3;
            }, 300);
            //  this.ad=0;
         }

         this.typeid = ltypeid;
         this.currid = lindex;
      },
      sendsms () {
         this.$refs.idmobile.seterror("test");
         this.iserror = true;
      }
   }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../assets/styles/xmixin.scss";
@import "../assets/styles/variables.scss";

.login {
   backface-visibility: hidden;
   position: relative;
   width: 460px;
   height: 500px;
   margin: auto;
   box-shadow: 0 6px 12px $b1677d9;

   //只有属发生变化后这个效果才会现
   //transition:width 10s;
   //  transition: width 2s;  //移动或是
   //transform: rotate(0deg); //基于什么转
   //  animation  动画
   .top {
      width: 100%;
      min-height: 70px;
      .svg_comlogo {
         @include svg_logo("../assets/svg/auth/comlogo.svg", 60px);
      }
   }

   .header {
      margin: auto;
      height: 30px;

      .router {
         margin-top: 20px;
         margin-left: auto;
         margin-right: auto;
         font-size: 17px;
         width: 100%;
         display: inline-block;
         box-shadow: 0 -1px 0 0 $wccc inset;

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
            color: $black;
            cursor: pointer;
         }

         a:link {
            color: $black;
         }

         /* 未访问链接*/

         // a:visited {color:#00FF00;}  /* 已访问链接 */
         /* 鼠标点击时 */
         a:hover {
            border-bottom: 1px solid $b1677d9;
         }

         a:hover:not(.active) {
            font-size: 17px;
         }

         //获得Hover 但不是激活是
         a.active {
            font-size: 18px;
            border-bottom: 2px solid $b1677d9;
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
               border: 1px solid $wccc;
               margin-top: 20px;

               // .flex_full {
               //   flex-grow: 1;
               //   display: flex;
               // }

               // //验证码输入框
               // .text-input {
               //   margin-left: 16px;
               //   min-width: 0;
               //   line-height: 45px;
               //   background: transparent;
               //   border: none;
               //   outline: none;
               //   flex-grow: 1;
               //   padding: 0px 5px 0px 3px;
               // }

               .checkbox {
                  display: flex;
                  flex-grow: 1;
               }

               .smsbox {
                  border-left: 1px solid $wccc;
                  display: inline-flex;
                  height: 100%;
               }

               .btnsend {
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
               @include focus();
            }
            .error {
               border: 1px solid red;
            }

            //登础按钮
            .loginbtn {
               background: #1677d9;
               color: #fff;
               display: block;
               margin-top: 30px;
            }

            //注册按钮
            .regbtn {
               background: #1677d9;
               color: #fff;
               display: block;
               margin-top: 30px;
            }
         }
      }

      .tip {
         margin-top: 20px;
         margin-left: auto;
         margin-right: auto;
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
            @include svg_logo("../assets/svg/auth/qq.svg", 30px);
         }
         .svg-weixin {
            @include svg_logo("../assets/svg/auth/weixin.svg", 30px);
         }
         .svg-github {
            @include svg_logo("../assets/svg/auth/github.svg", 30px);
         }
         .svg-weibo {
            @include svg_logo("../assets/svg/auth/weibo.svg", 30px);
         }
      }
   }
}
</style>
