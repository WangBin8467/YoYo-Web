/**
* 模板底部
* @file: LayoutFooter.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018-12-27 21:56
*/
<template>
  <div class="LayoutFooter-container">
    <!--底部 start-->
    <div class="home-footer">
      <div class="footer-content">
        <ul>
          <li class="ul-title"><a href="javascript:;">关于YoYo</a></li>
          <li><a href="javascript:;">联系我们</a></li>
          <li><a href="javascript:;">加入我们</a></li>
          <li><a href="javascript:;">后台入口</a></li>
        </ul>
        <ul>
          <li class="ul-title"><a href="javascript:;">友情连接</a></li>
          <li><a href="https://2.taobao.com">闲鱼</a></li>
          <li><a href="http://www.zhuanzhuan.com/">转转</a></li>
          <li><a href="https://nc.58.com/">58同城</a></li>
        </ul>
        <ul>
          <li class="ul-title"><a href="javascript:;">版权所有</a></li>
          <li>
            <a href="javascript:;">开发者：Groot</a>
          </li>
          <li><a href="javascript:;">指导老师：曾雅琳</a></li>
          <li><a href="http://rjxy.jxnu.edu.cn/">江西师范大学软件学院</a></li>
        </ul>
        <div class="code-about">
          <a href="https://github.com/WangBin8467">
            <i class="fa fa-github" style="font-size: 28px"></i>
          </a>
        </div>
      </div>
    </div>
    <!--底部 end-->
  </div>
</template>

<script>
  export default {
    name: 'LayoutFooter',
    props: {},
    mixins: [],
    components: {},
    data() {
      return {};
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
     .LayoutFooter-container{
       .home-footer {
         height: 200px;
         width: 100%;
         margin: 0 auto;
         border-top: 1px solid #eee;
    
         padding-top: 40px;
         line-height: 1.6;
         background-color: #2c3e50;
         .footer-content {
           width: 970px;
           margin: 0 auto;
           height: 100%;
           display: flex;
           justify-content: space-around;
           ul {
             list-style: none;
             font-size: 12px;
             margin: 0 20px;
             .ul-title {
               font-weight: bold;
               font-size: 14px;
             }
             li {
               padding: 5px 0;
               a {
                 text-decoration: none;
                 color: #d3d3d3;
               }
               a:hover{
                 color: #f5f7fa;
               }
             }
           }
           .code-about {
             margin-top: 20px;
             margin-left: 50px;
             font-size: 14px;
             a {
               text-decoration: none;
               color: #e4e4e4;
               i:hover{
                 color: #409eff;
               }
             }
           }
         }
       }
     }
</style>