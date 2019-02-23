/**
* 首页轮播
* @file: Lunbo.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018/12/1 22:36
*/
<template>
  <div class="Lunbo-container">
    <el-carousel height="200px"
                 :interval="4000"
                 type="card">
      <el-carousel-item>
        <img src="../_img/tab-1.jpg" height="192px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../_img/tab-2.jpg" height="200px" width="366px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../_img/tab-3.jpg" height="200px">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Lunbo',
    props: {},
    mixins: [],
    components: {},
    data() {
      return {
        imgList:[
          {
            id:1,
            imgUrl:'../_img/tab-1.jpg'
          },
          {
            id:2,
            imgUrl:'../_img/tab-2.jpg'
          },
          {
            id:3,
            imgUrl:'../_img/tab-3.jpg'
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

<style lang="scss">
     .Lunbo-container{
       border-radius: 4px;
       margin-top: 10px;
       .el-carousel {
         border-radius: 4px;
         .el-carousel__item h3 {
           color: #475669;
           font-size: 14px;
           opacity: 0.75;
           line-height: 200px;
           margin: 0;
         }
         .el-carousel__item:nth-child(2n) {
           background-color: #99a9bf;
         }
         .el-carousel__item:nth-child(2n+1) {
           background-color: #d3dce6;
         }
       }
     }
</style>
