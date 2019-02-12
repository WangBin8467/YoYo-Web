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
                     @click="changeImage"
                     class="img-btn">更改头像</el-button>
        </div>
        <div class="user-txt">
          <span class="user-name">Groot</span>
          <div class="user-ul">
            <div>
              <span>{{userNews.length}}</span>
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
          <el-form ref="userData"
                   class="user-form"
                   :model="userData"
                   label-position="left"
                   label-width="80px">
            <el-form-item label="用户名">
              <template v-if="editForm">
                <el-input v-model="userData.name"></el-input>
              </template>
              <template v-else>
                {{userData.name}}
              </template>
            </el-form-item>
            <el-form-item label="性别">
              <template v-if="editForm">
                <el-radio v-model="userData.sex" :label="0">男</el-radio>
                <el-radio v-model="userData.sex" :label="1">女</el-radio>
              </template>
              <template v-else>
                {{userData.sex===0?'男':'女'}}
              </template>
            </el-form-item>
            <el-form-item label="年级">
              <el-select v-model="userData.degree"
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
                <el-select v-model="userData.age"
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
                {{userData.age}}
              </template>
            </el-form-item>
            <el-form-item label="简介">
              <template v-if="editForm">
                <el-input type="textarea"
                          v-model="userData.remark"
                          placeholder="你还没有介绍自己~">
                </el-input>
              </template>
              <template v-else>
                <span v-if="userData.remark.length">{{userData.remark}}</span>
                <span v-else>你还没有介绍自己~</span>
              </template>
            </el-form-item>
          </el-form>
          <template v-if="editForm">
            <el-button type="success"
                       size="small"
                       round
                       class="save-btn"
                       @click="saveInfo">保存资料</el-button>
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
                   :key="item._id"
                   shadow="always"
                   class="news-item"
                   @click.native="toNews(item._id)">
            <div class="news-content">你于
              <span style="color: #e6990c">{{item.createTime}}</span> 发布了
              <span style="color: #e6990c">"{{item.title}}"</span>
            </div>
            <div class="news-like">收获了12个赞</div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="like">
          <span slot="label"><i class="el-icon-star-off"></i> 我赞过的</span>
          <div v-for="(item,index) in likeNewsData"
               :key="item._id"
               class="new-item">
            <div class="new-title"
                 @click="toNewsDetail(item._id)">{{item.title}}</div>
            <div class="new-content" v-html="item.content"></div>
            <div class="new-author">
              <a>{{item.author}}</a>
            </div>
            <div class="new-time">{{item.createTime}}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="privacy">
          <span slot="label"><i class="el-icon-setting"></i> 隐私与安全设置</span>
          <el-steps :active="stepActive"
                    finish-status="success"
                    class="privacy-tab">
            <el-step title="输入现有密码"></el-step>
            <el-step title="输入新的密码"></el-step>
            <el-step title="密码重置成功"></el-step>
          </el-steps>
          <div class="edit-form">
            <div class="edit-item">
              <el-input type="password"
                        size="small"
                        :autofocus="true"
                        v-model="pwdInit"
                        @blur="checkPwd"></el-input>
            </div>
            <div class="edit-item" style="margin-left: 240px;">
              <el-input type="password"
                        v-model="pwdReset"
                        @blur="checkPwdReset"
                        size="small"
                        v-if="stepActive!=1"></el-input>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog title="上传头像"
               width="600px"
               center
               :visible.sync="showChangeImage"
               class="upload-image">
      <el-upload
              class="upload-demo"
              drag
              list-type="picture"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showChangeImage = false">取 消</el-button>
        <el-button type="primary"
                   @click="showChangeImage = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios';
  
  export default {
    name: 'user-center',
    props: {
    },
    mixins: [],
    components: {
    },
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
        userNews:[],
        likeNewsData:[
          {
            _id:1,
            title:'xxxxxxxx',
            content:'xxxxxxxxxxxxxxx',
            author:'xxxx',
            createTime:'xxxxxxxx'
          },
          {
            _id:2,
            title:'xxxxxxxx',
            content:'xxxxxxxxxxxxxxx',
            author:'xxxx',
            createTime:'xxxxxxxx'
          },
          {
            _id:3,
            title:'xxxxxxxx',
            content:'xxxxxxxxxxxxxxx',
            author:'xxxx',
            createTime:'xxxxxxxx'
          },
          {
            _id:4,
            title:'xxxxxxxx',
            content:'xxxxxxxxxxxxxxx',
            author:'xxxx',
            createTime:'xxxxxxxx'
          },
        ],
        stepActive:1,
        pwdInit:'',
        pwdReset:'',
        userData:{},
        showChangeImage:false
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
      this.userData=_.cloneDeep(this.user);
      this.getUserNews();
    },
    methods: {
      saveInfo(){
        axios.post('/api/users/updateInfo',{...this.userData})
        .then(res=>{
          this.$message({
            type:'success',
            message:'资料更新成功！'
          })
          this.$store.commit('userLogin',this.userData);
          this.editForm=false;
        }).catch(err=>{
          this.$message.error('操作失败！')
        })
      },
      toNews(id){
        this.$router.push({path:`/News/id/${id}`});
      },
      checkPwd(){
        if(this.pwdInit===this.user.password){
          this.stepActive=2;
        }else{
          this.$message.error('密码输入错误！')
        }
      },
      checkPwdReset(){
        if(this.pwdReset.length<6){
          this.$message.error('密码不得少于6位字符')
        } else if (this.pwdReset===this.user.password){
          this.$message.error('密码不得与最近密码一致！')
        }else{
          axios.post('/api/users/changeUserPwd', {
            password:this.pwdReset,
            _id:this.user._id
          }).then(res=>{
            this.userData.password=this.pwdReset
            this.stepActive=3;
            this.pwdInit='';
            this.pwdReset='';
            this.$store.commit('userLogin',this.userData);
            this.$message({
              type:'success',
              message:'重置密码成功！'
            })
          }).catch(err=>{
            this.$message.error('操作失败！')
          })
        }
      },
      getUserNews(){
        axios.post('/api/news/getUserNews',{userID:this.user._id})
        .then(res=>{
          this.userNews=res.data.result.news;
        })
      },
      changeImage(){
        this.showChangeImage=true
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
         position: relative;
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
           cursor: pointer;
           .news-content{
             font-size: 15px;
             color: #6a6a6a;
           }
           .news-like{
             font-size: 13px;
             margin-top: 5px;
           }
         }
         .new-item{
           border-bottom: 1px solid #e0dada;
           padding: 10px 0 30px;
           .new-title{
             cursor: pointer;
             color: #212121;
             font-weight: 500;
             font-size: 18px;
             margin: 10px 0;
             overflow: hidden;
             text-overflow:ellipsis;
             white-space: nowrap;
           }
           .new-title:hover{
             color:#409EFF;
             font-weight: bold;
           }
           .new-content{
             color: #888;
             font-size: 13px;
             margin: 5px 0;
             display: -webkit-box;
             -webkit-box-orient: vertical;
             -webkit-line-clamp: 2;
             overflow: hidden;
             line-height: 1.5;
             max-height: 130px;
           }
           .new-author{
             float: left;
             color: #666;
             font-size: 13px;
             margin: 5px 0;
             color: #409EFF;
             font-weight: bold;
           }
           .new-time{
             margin-top: 5px;
             float: right;
             display: inline-block;
             color: #888;
             font-size: 13px;
           }
         }
         .privacy-tab{
           height: 400px;
           padding: 10px 30px;
         }
         .edit-form{
           position: absolute;
           left: 40px;
           top: 120px;
           display: flex;
           flex-direction: row;
           .edit-item{
             height: 185px;
             margin: 0 30px;
           }
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
         .news-item{
           .el-card__body{
             display: flex;
             justify-content: space-between;
             align-items: center;
           }
         }
         .privacy-tab{
           .el-step{
             .el-step__main{
               .el-step__title{
                 font-size: 14px;
               }
             }
           }
         }
         .edit-form{
           .edit-item{
             .el-input{
               width: 160px !important;
             }
           }
         }
       }
     }
</style>