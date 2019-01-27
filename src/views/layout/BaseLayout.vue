/**
* 基础模板
* @file: BaseLayout.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018-12-27 21:50
*/
<template>
  <div class="BaseLayout-container">
    <AppHeader></AppHeader>
    <div class="main-container">
      <slot></slot>
      <!--回到顶部 start-->
      <div class="home-to-top"
           @click="scrollTop">
        返回<br/>顶部
      </div>
      <!--回到顶部 end-->
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from 'src/views/layout/LayoutHeader';
  import AppFooter from 'src/views/layout/LayoutFooter';
  
  export default {
    name: 'BaseLayout',
    props: {},
    mixins: [],
    components: {
      AppHeader,
      AppFooter
    },
    data() {
      return {};
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {
      scrollTop() {
        $('body,html').animate({ scrollTop: 0 }, 50);
      },
    },
  };
</script>

<style lang="scss" scoped>
     .BaseLayout-container{
       height: 100%;
        .main-container{
          background-color: #f4f5f5;
          .home-to-top {
            position: fixed;
            width: 45px;
            height: 45px;
            font-size: 14px;
            background-color: #409eff;
            color: white;
            font-weight: bold;
            right: 50px;
            bottom: 50px;
            padding-top: 5px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
            cursor: pointer;
            user-select: none;
          }
        }
     }
</style>