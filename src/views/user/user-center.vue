/**
* 个人中心
* @file: user-center.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2019-02-02 21:53
*/
<template>
  <div class="user-center-container">
    <div class="user-info">
      <div class="info">
        <img src="../../assets/home/头像 男孩.png"
             class="user-img">
        <div class="user-txt">
          <span class="user-name">Groot</span>
          <div class="user-ul">
            <div>
              <span>1</span>
              <span>帖子</span>
            </div>
            <div>
              <span>2</span>
              <span>赞</span>
            </div>
            <div>
              <span>0</span>
              <span>收到的赞</span>
            </div>
          </div>
        </div>
      </div>
      <el-button class="user-edit"
                 type="primary"
                 size="small"
                 round>编辑资料</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-center',
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
     .user-center-container{
       width: 970px;
       margin: 0 auto;
       min-height: 600px;
       .user-info{
         padding: 15px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         .info{
           display: flex;
           align-items: center;
           justify-content: space-between;
           .user-img{
             width: 80px;
             height: 80px;
           }
           .user-txt{
             margin-left: 20px;
             display: flex;
             flex-direction: column;
             .user-name{
               font-size: 26px;
               padding: 5px 0;
               font-weight: bold;
             }
             .user-ul{
               display: flex;
               flex-direction: row;
               margin-left: -20px;
               div{
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 cursor: pointer;
                 padding-right: 5px;
                 width: 60px;
                 text-align: left;
                 span:nth-child(1){
                   color: #409EFF;
                   font-size: 14px;
                   font-weight: bold;
                 }
                 span:nth-child(2){
                   color: #5a5a5a;
                   font-size: 13px;
                 }
               }
             }
           }
         }
         .user-edit{
         
         }
       }
     }
</style>

<style lang="scss">
     .user-center-container{

     }
</style>