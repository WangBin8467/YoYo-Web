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
        <div class="info-img">
          <img src="../../assets/home/头像 男孩.png"
               class="user-img">
          <el-button type="success"
                     round
                     plain
                     size="mini"
                     class="img-btn">更改头像</el-button>
        </div>
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
    <div class="user-content">
      <el-tabs v-model="activeName"
               type="border-card">
        <el-tab-pane name="userInfo">
          <span slot="label"><i class="el-icon-date"></i> 个人资料</span>
          <el-form ref="user"
                   class="user-form"
                   :model="user"
                   label-position="left"
                   label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio v-model="user.sex" :label="1">男</el-radio>
              <el-radio v-model="user.sex" :label="2">女</el-radio>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane name="messages">
          <span slot="label"><i class="el-icon-date"></i> 我的消息</span>
          我的消息
        </el-tab-pane>
        <el-tab-pane name="news">
          <span slot="label"><i class="el-icon-date"></i> 我的帖子</span>
          我的帖子</el-tab-pane>
        <el-tab-pane name="like">
          <span slot="label"><i class="el-icon-date"></i> 我赞过的</span>
          我赞过的
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'user-center',
    props: {
    },
    mixins: [],
    components: {},
    data() {
      return {
      };
    },
    computed: {
      ...mapState(['user','isLogin']),
      activeName:{
        get() {
          return this.$route.params.type;
        },
        set() {}
      }
    },
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
           .info-img{
             display: flex;
             flex-direction: column;
             align-items: center;
             .user-img{
               width: 60px;
               height: 60px;
             }
             .img-btn{
               margin-top: 10px;
               font-size: 12px;
             }
           }
           .user-txt{
             margin-left: 25px;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
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
       .user-content{
         margin-top: 15px;
         .user-form{
           padding: 0 20px;
         }
       }
     }
</style>

<style lang="scss">
     .user-center-container{

     }
</style>