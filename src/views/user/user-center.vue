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
                 round
                 @click="editForm=true">编辑资料</el-button>
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
              <template v-if="editForm">
                <el-input v-model="user.name"></el-input>
              </template>
              <template v-else>
                {{user.name}}
              </template>
            </el-form-item>
            <el-form-item label="密码">
              <template v-if="editForm">
                <el-input v-model="user.password"
                          type="password"></el-input>
              </template>
              <template v-else>{{user.password}}</template>
            </el-form-item>
            <el-form-item label="性别">
              <template v-if="editForm">
                <el-radio v-model="user.sex" :label="0">男</el-radio>
                <el-radio v-model="user.sex" :label="1">女</el-radio>
              </template>
              <template v-else>
                {{user.sex===0?'男':'女'}}
              </template>
            </el-form-item>
            <el-form-item label="年级">
              <el-select v-model="user.degree"
                         :disabled="!editForm">
                <el-option
                        v-for="item in degreeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年龄">
              <template v-if="editForm">
                <el-select v-model="user.age"
                           filterable>
                  <el-option
                          v-for="item in 100"
                          :key="item"
                          :label="item"
                          :value="item">
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                {{user.age}}
              </template>
            </el-form-item>
            <el-form-item label="简介">
              <template v-if="editForm">
                <el-input type="textarea"
                          v-model="user.remark"
                          placeholder="你还没有介绍自己~">
                </el-input>
              </template>
              <template v-else>
                <span v-if="user.remark.length">user.remark</span>
                <span v-else>你还没有介绍自己~</span>
              </template>
            </el-form-item>
          </el-form>
          <template v-if="editForm">
            <el-button type="success"
                       size="small"
                       round
                       class="save-btn">保存资料</el-button>
            <el-button type="info"
                       size="small"
                       round
                       class="close-btn"
                       @click="editForm=false">取消</el-button>
          </template>
        </el-tab-pane>
        <el-tab-pane name="messages">
          <span slot="label"><i class="el-icon-message"></i> 我的消息</span>
          <div :class="['like-item',{'borderBottom':index!=likeData.length-1}]"
               v-for="(item,index) in likeData"
               :key="item.id">
            <div class="like-user">
              <div class="liker-img"></div>
              <div class="liker-info">
                <div class="liker-name">{{item.liker_name}}</div>
                <div class="liker-createTime">{{item.createTime}}</div>
              </div>
              <div class="liker-detail">
                <i class="fa fa-thumbs-o-up" style="color: red"></i>&nbsp;了你的帖子
              </div>
            </div>
            <div class="like-news" @click="toNews(item.newsData.id)">
                <div class="news-name">
                  {{item.newsData.name}}
                </div>
                <span class="news-createTime">{{item.newsData.createTime}}</span>
                <div class="news-content">
                  {{item.newsData.content}}
                </div>
              </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="news">
          <span slot="label"><i class="el-icon-tickets"></i> 我的帖子</span>
          <el-card v-for="(item,index) in userNews"
                   :key="item.id"
                   shadow="always"
                   class="news-item">
           <div>你于 {{item.createTime}} 发布了
             <span style="color: #e6990c">{{item.name}}</span>
           </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="like">
          <span slot="label"><i class="el-icon-star-off"></i> 我赞过的</span>
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
        degreeOptions:[
          {
            value:1,
            label:'大一',
          },
          {
            value:2,
            label:'大二',
          },
          {
            value:3,
            label:'大三',
          },
          {
            value:4,
            label:'大四',
          },
          {
            value:5,
            label:'未知',
          },
        ],
        editForm:false,
        likeData:[
          {
            id:1,
            liker_img:'',
            liker_name:'xxx',
            createTime:'2019-01-21',
            newsData:{
              id:1,
              name:'xxxxxxx',
              content:'xxxxxxxxxxxxxx',
              createTime:'2018-12-11',
            }
          },
          {
            id:2,
            liker_img:'',
            liker_name:'xxx',
            createTime:'2019-01-21',
            newsData:{
              id:1,
              name:'xxxxxxx',
              content:'xxxxxxxxxxxxxx',
              createTime:'2018-12-11',
            }
          },
          {
            id:3,
            liker_img:'',
            liker_name:'xxx',
            createTime:'2019-01-21',
            newsData:{
              id:1,
              name:'xxxxxxx',
              content:'xxxxxxxxxxxxxx',
              createTime:'2018-12-11',
            }
          },
          {
            id:4,
            liker_img:'',
            liker_name:'xxx',
            createTime:'2019-01-21',
            newsData:{
              id:1,
              name:'xxxxxxx',
              content:'xxxxxxxxxxxxxx',
              createTime:'2018-12-11',
            }
          },
        ],
        userNews:[
          {
            id:1,
            name:'xxxxxxxxx',
            content:'xxxxxxxxxxx',
            createTime:'2019-01-11',
            likeList:[
              {
                id:1,
                likeTime:'2019-01-19'
              },
              {
                id:2,
                likeTime:'2019-01-19'
              },
              {
                id:3,
                likeTime:'2019-01-19'
              },
              {
                id:4,
                likeTime:'2019-01-19'
              },{
                id:5,
                likeTime:'2019-01-19'
              },
            ]
          },
          {
            id:2,
            name:'xxxxxxxxx',
            content:'xxxxxxxxxxx',
            createTime:'2019-01-11',
            likeList:[
              {
                id:1,
                likeTime:'2019-01-19'
              },
              {
                id:2,
                likeTime:'2019-01-19'
              },
              {
                id:3,
                likeTime:'2019-01-19'
              },
              {
                id:4,
                likeTime:'2019-01-19'
              },{
                id:5,
                likeTime:'2019-01-19'
              },
            ]
          },
          {
            id:3,
            name:'xxxxxxxxx',
            content:'xxxxxxxxxxx',
            createTime:'2019-01-11',
            likeList:[
              {
                id:1,
                likeTime:'2019-01-19'
              },
              {
                id:2,
                likeTime:'2019-01-19'
              },
              {
                id:3,
                likeTime:'2019-01-19'
              },
              {
                id:4,
                likeTime:'2019-01-19'
              },{
                id:5,
                likeTime:'2019-01-19'
              },
            ]
          },
          {
            id:4,
            name:'xxxxxxxxx',
            content:'xxxxxxxxxxx',
            createTime:'2019-01-11',
            likeList:[
              {
                id:1,
                likeTime:'2019-01-19'
              },
              {
                id:2,
                likeTime:'2019-01-19'
              },
              {
                id:3,
                likeTime:'2019-01-19'
              },
              {
                id:4,
                likeTime:'2019-01-19'
              },{
                id:5,
                likeTime:'2019-01-19'
              },
            ]
          },
          {
            id:5,
            name:'xxxxxxxxx',
            content:'xxxxxxxxxxx',
            createTime:'2019-01-11',
            likeList:[
              {
                id:1,
                likeTime:'2019-01-19'
              },
              {
                id:2,
                likeTime:'2019-01-19'
              },
              {
                id:3,
                likeTime:'2019-01-19'
              },
              {
                id:4,
                likeTime:'2019-01-19'
              },{
                id:5,
                likeTime:'2019-01-19'
              },
            ]
          },
        ]
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
    methods: {
      toNews(id){
        console.clear();
        console.log(id);
      }
    },
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
         margin: 15px 0 30px;
         .user-form{
           padding: 0 20px;
         }
         .save-btn{
           margin-left: 85px;
         }
         .close-btn{
           margin-left: 15px;
         }
         .like-item{
           margin: 0 20px;
           padding: 15px 0;
           .like-user{
             padding: 0 10px;
             display: flex;
             justify-content: flex-start;
             align-items: center;
             .liker-img{
               width: 40px;
               height: 40px;
               background-color: red;
             }
             .liker-info{
               margin-left: 20px;
               .liker-name{
                 font-size: 18px;
               }
               .liker-createTime{
                 font-size: 12px;
                 color: gray;
               }
             }
             .liker-detail{
               color: darkgray;
               font-size: 14px;
               margin-left: 40px;
             }
           }
           .like-news{
             margin: 15px 20px 0;
             padding: 0 10px;
             position: relative;
             border-radius: 4px;
             cursor: pointer;
             border: 1px solid #ebeef5;
             background-color: #fff;
             color: #303133;
             -webkit-transition: .3s;
             transition: .3s;
             .news-name{
               font-size: 16px;
               font-weight: bold;
               padding: 5px;
               color: #409EFF;
             }
             .news-createTime{
               position: absolute;
               top:5px;
               right: 5px;
               margin-right: 20px;
               font-size: 12px;
             }
             .news-content{
               padding: 0 5px 5px;
               color: #969696;
               font-size: 16px;
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 3;
               overflow: hidden;
             }
           }
           .like-news:hover{
             transform: translate(0, -2px);
             box-shadow: 0 10px 20px -10px #6a6a6a;
           }
         }
         .news-item{
           margin: 5px 0;
         }
         .borderBottom{
           border-bottom: 1px solid #dfdfdf;
         }
       }
     }
</style>

<style lang="scss">
     .user-center-container{
       .user-content{
         .user-form{
           .el-input{
             width: 220px !important;
           }
           .el-textarea{
             width: 420px !important;
           }
         }
       }
     }
</style>