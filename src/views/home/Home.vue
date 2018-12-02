/**
* 项目首页
* @file: Home.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018/11/26 20:27
*/
<template>
  <div class="Home-container">
    <div class="home-top"></div>
    <div class="home-header-container">
      <div class="home-header">
        <div class="header-title">
          <div class="header-logo">
            <img src="../../assets/home/yoyo-logo.png">
          </div>
          <div class="header-nav">
            <ul class="nav-ul">
              <li class="li-item first">首页</li>
              <li class="li-item">问答</li>
              <li class="li-item">专栏</li>
              <li class="li-item">讲堂</li>
              <li class="li-item">发现</li>
            </ul>
          </div>
        </div>
        <div class="header-search">
          <el-input v-model="searchValue"
                    placeholder="请输入内容"
                    size="medium"
                    clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="header-user">
          <div class="user-login">
            立即登录
          </div>
          <div class="user-register">
            免费注册
          </div>
        </div>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <div class="home-svg" v-if="!isLogin&&showSvg">
      <div class="svg-info">
        <div class="info-title">
          在 SegmentFault，学习技能、解决问题
        </div>
        <div class="info-content">
          每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助力他们在技术能力、职业生涯、影响力上获得提升。
        </div>
      </div>
      <div class="svg-user">
        <div class="register user">
           免费注册
        </div>
        <div class="login user">
           立即登录
        </div>
      </div>
      <div class="close" @click="showSvg=false">
        x
      </div>
    </div>
    </transition>
    <div class="home-content">
      <div class="content-nav">
        <el-menu :default-active="index" router="true">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">为你推荐</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">跳蚤市场</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">树洞</span>
          </el-menu-item>
          <el-menu-item index="4">
           <i class="el-icon-setting"></i>
           <span slot="title">寻物启事</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">寻物启事</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">寻物启事</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content-main">
        <Lunbo></Lunbo>
        <NewsItem :data="newsList"></NewsItem>
      </div>
      <div class="content-recommend">
        <div class="hot-header">
          <div>沸点<span class="hot-top" style="font-weight: bold">&nbsp;&nbsp;HOT</span></div>
          <span class="hot-top"><i class="fa fa-signal"></i>&nbsp;&nbsp;Top 5</span>
        </div>
        <div class="hot-group">
          <div class="hot-item">
            <div class="hot-title">
              <span>1</span>
              <span>微信小程序黑客马拉松</span>
            </div>
            <div class="hot-info"></div>
          </div>
          <div class="hot-progress"></div>
        </div>
      </div>
    </div>
    <div class="home-footer">

    </div>
  </div>
</template>

<script>
  import NewsItem from './components/NewsItem';
  import Lunbo from './components/Lunbo';

  export default {
    name: 'Home',
    props: {},
    mixins: [],
    components: {
      NewsItem,
      Lunbo,
    },
    data() {
      return {
        searchValue:'',
        isLogin:false,
        showSvg:true,
        index:"1",
        newsList:[
          {
            id:1,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:2,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:3,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:4,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:5,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:6,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:7,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:8,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
        ]
      };
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
     .Home-container{
       min-height: 100%;
       .home-top{
         height: 3px;
         background-color:#409EFF ;
       }
       .home-header-container{
         box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
         .home-header{
           height: 64px;
           line-height: 64px;
           width: 1140px;
           margin: 0 auto;
           display: flex;
           justify-content: space-between;
           .header-title{
             display: flex;
             flex-direction: row;
             .header-logo{
               width: 150px;
               height: 100%;
               margin-top: -75px;
               margin-right: 60px;
               cursor: pointer;
             }
             .header-nav{
               height: 100%;
               line-height: 64px;
               margin-left: 20px;
               ul{
                 margin: 0;
                 list-style: none;
                 padding: 0;
               }
               .nav-ul{
                 .li-item{
                   display: inline-block;
                   padding: 0 10px;
                   color: #757575;
                   font-size: 16px;
                   cursor: pointer;
                 }
                 .first{
                   color: #409EFF;
                   font-weight: bold;
                 }
               }
             }
           }
           .header-search{

           }
           .header-user{
             display: flex;
             flex-direction: row;
             align-items: center;
             .user-login{
               color: #409EFF;
               font-size: 14px;
               cursor: pointer;
             }
             .user-register{
               cursor: pointer;
               height: 30px;
               line-height: 30px;
               background-color: #409EFF;
               margin-left: 20px;
               color: #fff;
               border-color: #008151;
               padding: 0 13px;
               font-size: 14px;
               border-radius: 4px;
             }
           }
         }
       }
       .home-svg{
         background-color:#409EFF;
         height: 188px;
         position: relative;
         background-image: url("../../assets/home/banner-bg.svg");
         display: flex;
         justify-content: space-between;
         padding: 0 15%;
         .svg-info{
           max-width: 970px;
           margin: 40px 0 0 0;
           .info-title{
             padding-bottom: 20px;
             font-size: 30px;
             color: #fff;
           }
           .info-content{
             font-size: 18px;
             color: #fff;
             width: 80%;
           }
         }
         .svg-user{
           display: flex;
           flex-direction: row;
           height: 40px;
           margin: auto 0;
           .user{
             padding: 10px 16px;
             font-size: 18px;
             line-height: 1.33;
             border-radius: 6px;
             cursor: pointer;
             box-sizing: border-box;
             min-width: 106px;
           }
           .register{
             color: #409EFF;
             background-color: white;

           }
           .login{
             margin-left: 20px;
             border: 1px solid white;
             color: white;
           }
         }
         .close{
           width: 20px;
           height: 20px;
           border-radius: 10px;
           position: absolute;
           text-align: center;
           line-height: 18px;
           top: 15px;
           right: 15px;
           cursor: pointer;
           background-color: #2e78c1;
           color: rgba(255,255,255,0.25);
         }
       }
       .home-content{
         padding: 0 15%;
         margin: 30px auto;
         display: flex;
         flex-direction: row;
         min-height: 700px;
         .content-nav{

           width: 15%;
           height: 100%;
         }
         .content-main{
           width: 55%;
           height: 100%;
           padding: 0 20px;
         }
         .content-recommend{
           width: 25%;
           height: 100%;
           .hot-header{
             padding: 15px 5px;
             color: #212121;
             font-weight: 500;
             display: flex;
             justify-content: space-between;
             .hot-top{
               color: red;
               font-size: 13px;
               margin-top: 5px;
             }
           }
           .hot-group{
             display: flex;
             flex-direction: row;
             height: 300px;
             padding-top: 5px;
             .hot-item{
               width: 290px;
               .hot-title{
                 font-size: 14px;
               }
               .hot-info{

               }
             }
             .hot-progress{
               margin-left: 10px;
               width: 25px;
               height: 100%;
               background: linear-gradient(to bottom, #f54912, #ffc8d0);
               border-radius: 20px;
             }
           }
         }
       }
       .home-footer{
         background-color: red;
         height: 200px;
         width: 1140px;
         margin: 0 auto;
       }
     }
</style>

<style lang="scss">
  .Home-container {
    .header-search{
      .el-input-group{
          width: 80% !important;
      }
    }
  }
</style>
