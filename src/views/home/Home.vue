/**
* 项目首页
* @file: Home.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018/11/26 20:27
*/
<template>
  <div class="Home-container">
    
    <!--首页content start-->
    <div class="home-content">
      <div class="content-nav">
        <el-menu :default-active="activeIndex"
                 :router="true">
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">为你推荐</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">闲置交易</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">毕业贩卖</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">寻物启事</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">树洞角落</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">寻物启事</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content-main">
        <Lunbo></Lunbo>
        <router-view></router-view>
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
    <!--首页content end-->
    
   
    
  </div>
</template>

<script>
  import Lunbo from './components/Lunbo';
  
  export default {
    name: 'Home',
    props: {},
    mixins: [],
    components: {
      Lunbo,
    },
    data() {
      return {};
    },
    computed: {
      activeIndex() {
        console.clear();
        console.log(this.$route)
        const paths = this.$route.path.split('/');

        return paths[paths.length - 1];
      },
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  .Home-container {
    min-height: 100%;
    .home-content {
      padding: 0 15%;
      margin: 30px auto;
      display: flex;
      flex-direction: row;
      min-height: 700px;
      .content-nav {
        width: 15%;
        height: 100%;
      }
      .content-main {
        width: 55%;
        height: 100%;
        padding: 0 20px;
      }
      .content-recommend {
        width: 25%;
        height: 100%;
        .hot-header {
          padding: 15px 5px;
          color: #212121;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          .hot-top {
            color: red;
            font-size: 13px;
            margin-top: 5px;
          }
        }
        .hot-group {
          display: flex;
          flex-direction: row;
          height: 300px;
          padding-top: 5px;
          .hot-item {
            width: 290px;
            .hot-title {
              font-size: 14px;
            }
            .hot-info {

            }
          }
          .hot-progress {
            margin-left: 10px;
            width: 25px;
            height: 100%;
            background: linear-gradient(to bottom, #f54912, #ffc8d0);
            border-radius: 20px;
          }
        }
      }
    }

  }
</style>


