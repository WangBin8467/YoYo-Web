/**
* 评论组件模块
* @file: news-comment.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2019-01-01 21:04
*/
<template>
  <div class="news-comment-container">
      <div class="comment"
           v-for="(item,index) in comments"
           :key="item._id">
        <div class="info">
          <img class="avatar"
               :src="`data:image/png;base64,${item.comment_avatar}`"
               width="36"
               height="36"/>
          <div class="right">
            <div class="name">{{item.comment_name}}</div>
            <div class="date">{{index+1}}楼 · {{item.createTime}}</div>
          </div>
        </div>
        <div class="content">{{item.comment_content}}</div>
        <div class="control">
          <span class="comment-reply" @click="showCommentInput(item)">
            <i class="iconfont icon-comment"></i>
            <span>回复</span>
          </span>
        </div>
        <div class="reply">
          <div class="item"
               v-for="(reply,ind) in item.replyList"
               :key="reply.reply_id">
            <div class="reply-content">
              <span class="from-name">{{reply.reply_name}}</span><span>: </span>
              <span class="to-name">@{{reply.reply_to_name}}</span>
              <span>{{reply.reply_content}}</span>
            </div>
            <div class="reply-bottom">
              <span>{{reply.reply_createTime}}</span>
              <span class="reply-text"
                    @click="showCommentInput(reply,reply,item._id)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
            </div>
          </div>
          <div class="write-reply"
               v-if="item.replyList.length >0"
               @click="showCommentInput(item)">
            <i class="el-icon-edit"></i>
            <span class="add-comment">添加新评论</span>
          </div>
          <transition name="fade">
            <div class="input-wrapper"
                 ref="item.comment_name"
                 v-if="showInput">
              <el-input class="gray-bg-input"
                        v-model="inputComment"
                        type="textarea"
                        :rows="3"
                        autofocus
                        placeholder="写下你的评论">
              </el-input>
              <div class="btn-control">
                <span class="cancel"
                      @click="cancel">取消</span>
                <el-button class="btn"
                           type="success"
                           round
                           @click="commitComment(index)">确定</el-button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import { mapState } from 'vuex'
  
  export default {
    name: 'news-comment',
    props: {
      comments: {
        type: Array,
        required: true
      }
    },
    components: {},
    data() {
      return {
        inputComment: '',
        showInput: false,
        checkComment:{
          id:null,
          name:'',
          replyList:[],
        },
      }
    },
    computed: {
      ...mapState(['user','showUserDialog','isLogin']),
    },
    created() {
    },
    mounted() {},
    methods: {
      //点击取消按钮
      cancel() {
        this.showInput =false;
        this.inputComment='';
        this.checkComment={};
      },

      //提交评论
      commitComment(index) {
        if (!this.inputComment){
          this.$message.error('请输入你的评论~')
        } else{
          axios.post('/api/comments/addReply',{
            userID:this.user._id,
            userName:this.user.name,
            reply_to_uid:this.checkComment.id,
            reply_to_name:this.checkComment.name,
            reply_content:this.inputComment,
            replyList:this.checkComment.replyList,
            cid:this.checkComment.cid,
          }).then(res=>{
            this.comments[index].replyList.push(res.data.result);
            this.$message({
              type:'success',
              message:'评论成功！'
            })
            this.checkComment={};
            this.showInput=false;
          })
        }
      },
      
      //  点击评论按钮显示输入框
      //  id: 当前评论的用户id
      //  name: 当前评论的用户姓名
      //  reply: 子回复或子评论
      showCommentInput(item,reply,cid) {
        this.showInput=true;
        if (reply) {
          console.clear();
          console.log('1212')
          this.checkComment.id=item.reply_uid;
          this.checkComment.name=item.reply_name;
          this.checkComment.replyList=item.replyList;
          this.checkComment.cid=cid;
          this.inputComment = "@" + item.reply_name + "："+" ";
          console.log(this.checkComment)
        } else {
          this.checkComment.id=item.comment_uid;
          this.checkComment.name=item.comment_name;
          this.checkComment.replyList=item.replyList;
          this.checkComment.cid=item._id;
          this.inputComment = '';
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  $color-main: #409EFF;
  $color-success: #67C23A;
  $color-warning: #E6A23C;
  $color-danger: #F56C6C;
  $color-info: #909399;
  
  $text-main: #303133;
  $text-normal: #606266;
  $text-minor: #909399;  //次要文字
  $text-placeholder: #C0C4CC;
  $text-333: #333;
  
  $border-first: #DCDFE6;
  $border-second: #E4E7ED;
  $border-third: #EBEEF5;
  $border-fourth: #F2F6FC;
  
  $content-bg-color: #fff;
  
  .news-comment-container {
         padding: 0 10px;
         box-sizing: border-box;
         .comment {
           display: flex;
           flex-direction: column;
           padding: 10px;
           border-bottom: 1px solid $border-fourth;
           .info {
             display: flex;
             align-items: center;
             .avatar {
               border-radius: 50%;
             }
             .right {
               display: flex;
               flex-direction: column;
               margin-left: 10px;
               .name {
                 font-size: 16px;
                 color: $text-main;
                 margin-bottom: 5px;
                 font-weight: 500;
               }
               .date {
                 font-size: 12px;
                 color: $text-minor;
               }
             }
           }
           .content {
             font-size: 16px;
             color: $text-main;
             line-height: 20px;
             padding: 10px 0;
           }
           .control {
             display: flex;
             align-items: center;
             font-size: 14px;
             color: $text-minor;
             .like {
               display: flex;
               align-items: center;
               margin-right: 20px;
               cursor: pointer;
               &.active, &:hover {
                 color: $color-main;
               }
               .iconfont {
                 font-size: 14px;
                 margin-right: 5px;
               }
             }
             .comment-reply {
               display: flex;
               align-items: center;
               cursor: pointer;
               &:hover {
                 color: $text-333;
               }
               .iconfont {
                 font-size: 16px;
                 margin-right: 5px;
               }
             }
        
           }
           .reply {
             margin: 10px 0;
             border-left: 2px solid $border-first;
             .item {
               margin: 0 10px;
               padding: 10px 0;
               border-bottom: 1px dashed $border-third;
               .reply-content {
                 display: flex;
                 align-items: center;
                 font-size: 14px;
                 color: $text-main;
                 .from-name {
                   color: $color-main;
                 }
                 .to-name {
                   color: $color-main;
                   margin-left: 5px;
                   margin-right: 5px;
                 }
               }
               .reply-bottom {
                 display: flex;
                 align-items: center;
                 margin-top: 6px;
                 font-size: 12px;
                 color: $text-minor;
                 .reply-text {
                   display: flex;
                   align-items: center;
                   margin-left: 10px;
                   cursor: pointer;
                   &:hover {
                     color: $text-333;
                   }
                   .icon-comment {
                     margin-right: 5px;
                   }
                 }
               }
             }
             .write-reply {
               display: flex;
               align-items: center;
               font-size: 14px;
               color: $text-minor;
               padding: 10px;
               cursor: pointer;
               &:hover {
                 color: $text-main;
               }
               .el-icon-edit {
                 margin-right: 5px;
               }
             }
             .fade-enter-active, fade-leave-active {
               transition: opacity 0.5s;
             }
             .fade-enter, .fade-leave-to {
               opacity: 0;
             }
             .input-wrapper {
               padding: 10px;
               .gray-bg-input, .el-input__inner {
                 /*background-color: #67C23A;*/
               }
               .btn-control {
                 display: flex;
                 justify-content: flex-end;
                 align-items: center;
                 padding-top: 10px;
                 .cancel {
                   font-size: 16px;
                   color: $text-normal;
                   margin-right: 20px;
                   cursor: pointer;
                   &:hover {
                     color: $text-333;
                   }
                 }
                 .confirm {
                   font-size: 16px;
                 }
               }
             }
           }
         }
       }
</style>