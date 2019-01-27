/**
* news 详情
* @file: newsDetail.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018-12-27 21:44
*/
<template>
  <div class="newsDetail-container">
    <div class="news-main">
      <div class="news-title">
        {{newsData.title}}
      </div>
      <div class="news-info">
        <span class="info-createTime">{{newsData.createTime}}</span>
        <span class="info-author">{{newsData.author}}</span>
      </div>
      <div class="news-content">
        <p v-html="newsData.content"></p>
      </div>
    </div>
    <div class="news-comment">
      <div class="comment-input">
        <transition name="fade">
          <div class="input-wrapper">
            <el-input class="gray-bg-input"
                      v-model="commentValue"
                      type="textarea"
                      :rows="3"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
            <div class="btn-control">
                  <span class="cancel"
                        @click="commentValue=''">重置</span>
              <el-button class="btn"
                         type="success"
                         round
                         @click="submitComment">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
      <div class="comment-main">
        <NewsComment :comments="commentData"></NewsComment>
      </div>
    </div>
    <div class="news-author">
      <el-card shadow="always">
        <div class="author-sup"></div>
       <div class="author-name">
         <div>
           <span>{{authorData.name}}&nbsp;</span>
           <span>
             <i v-if="authorData.sex===0"
                class="fa fa-mars boyIcon"></i>
             <i v-else
                class="fa fa-mercury girlIcon"></i>
           </span>&nbsp;&nbsp;
           <span class="author-degree">{{authorData.degree}}</span>
         </div>
         <span><i class="fa fa-heart-o focus"></i></span>
       </div>
       <div class="author-info">
         <span v-if="authorData.remark.length>0">{{authorData.remark}}</span>
         <span v-else>这个人什么也没留下~</span>
       </div>
      </el-card>
    </div>
    <div class="side-nav">
      <ul>
        <li class="nav-item"><i class="fa fa-comment-o"></i></li>
        <li class="nav-item"><i class="fa fa-thumbs-o-up"></i></li>
        <li class="nav-item"><i class="el-icon-arrow-up"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NewsComment from 'src/views/news/_components/news-comment';
  import axios from 'axios';
  
  export default {
    name: 'newsDetail',
    props: {},
    mixins: [],
    components: {
      NewsComment
    },
    data() {
      return {
        newsData:{},
        commentValue:'',
        commentData: [
          {
            id: 'comment0001', //主键id
            date: '2018-07-05 08:30',  //评论时间
            ownerId: 'talents100020', //文章的id
            fromId: 'errhefe232213',  //评论者id
            fromName: '犀利的评论家',   //评论者昵称
            fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
            likeNum: 3, //点赞人数
            content: '非常靠谱的程序员',  //评论内容
            reply: [  //回复，或子评论
              {
                id: '34523244545',  //主键id
                commentId: 'comment0001',  //父评论id，即父亲的id
                fromId: 'observer223432',  //评论者id
                fromName: '夕阳红',  //评论者昵称
                fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
                toId: 'errhefe232213',  //被评论者id
                toName: '犀利的评论家',  //被评论者昵称
                toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
                content: '赞同，很靠谱，水平很高',  //评论内容
                date: '2018-07-05 08:35'   //评论时间
              },
              {
                id: '34523244545',
                commentId: 'comment0001',
                fromId: 'observer567422',
                fromName: '清晨一缕阳光',
                fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
                toId: 'observer223432',
                toName: '夕阳红',
                toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
                content: '大神一个！',
                date: '2018-07-05 08:50'
              }
            ]
          },
          {
            id: 'comment0002',
            date: '2018-07-05 08:30',
            ownerId: 'talents100020',
            fromId: 'errhefe232213',
            fromName: '毒蛇郭德纲',
            fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
            likeNum: 0,
            content: '从没见过这么优秀的人',
            reply: []
          }
        ],
        authorData:{
          name:'Groot',
          degree:'大三',
          sex:0,
          remark:'',
        }
      };
    },
    computed: {},
    created() {
    },
    mounted() {
      this.getNewsInfo();
    },
    methods: {
      submitComment(){
        console.clear();
        console.log(this.commentValue);
      },
      getNewsInfo(){
        axios.post('/api/news/getNewsInfo',{_id:this.$route.params.id}).then(res=>{
          this.newsData=res.data.result.news;
        })
      }
    },
  };
</script>

<style lang="scss" scoped>
     .newsDetail-container{
       width: 750px;
       margin: 0 auto;
       padding: 10px 0;
       position: relative;
       .news-main{
         margin: 20px 0;
         .news-title{
           font-size: 22px;
           font-weight: bold;
         }
         .news-info{
           padding: 10px;
           font-size: 14px;
           color: lightgray;
           display: flex;
           flex-direction: row;
           .info-author{
             color:  #409eff;
             cursor: pointer;
             margin-left: 30px;
             text-decoration-line: underline;
           }
           .info-createTime{
             font-size: 14px;
             color: #9f9f9f;
             display: inline-block;
             margin: 0 15px;
           }
         }
         .news-content{
           padding: 0 20px;
           margin-top: 20px;
           line-height: 1.5;
           width: 80%;
           color: darkslategray;
         }
       }
       .news-comment{
         margin-top: 40px;
         padding: 0 15px;
         .comment-input{
           width: 80%;
           padding-bottom: 30px;
           border-bottom: 1px solid #d2d2d2;
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
                 color: #606266;
                 margin-right: 20px;
                 cursor: pointer;
                 &:hover {
                   color: #333;
                 }
               }
               .confirm {
                 font-size: 16px;
               }
             }
           }
         }
         .comment-main{
           margin: 40px 0;
         }
       }
       .news-author{
         position: absolute;
         top:40px;
         right: -260px;
         width: 260px;
         height: 320px;
         background-color: white;
         .author-sup{
           position: absolute;
           left: 0;
           top: 0;
           width: 40px;
           height: 40px;
           background: linear-gradient(135deg, #1996ff 50%, transparent 50%);
           text-align: right;
         }
        .author-name{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
          color: #4e4e4e;
          .boyIcon{
            font-size: 18px;
            color: #409EFF;
          }
          .girlIcon{
            font-size: 18px;
            color: #ff90b7;
          }
          .focus{
            color: #F56C6C;
            font-size: 18px;
            cursor: pointer;
          }
          .focus:hover{
            color: red;
          }
          .author-degree{
            background-color:#E6A23C;
            border-radius: 4px;
            text-align: center;
            padding: 2px 5px;
            color: white;
            font-size: 12px;
          }
        }
         .author-info{
           padding: 30px 5px 0;
           color: #919191;
         }
       }
       .side-nav{
         position: fixed;
         top: 260px;
         left: 25%;
         ul{
           list-style: none;
           padding: 0;
           li{
             cursor: pointer;
             width: 40px;
             height: 40px;
             line-height: 40px;
             text-align: center;
             box-shadow: 0 2px 4px 0 rgba(0,0,0,.21);
             border-radius: 20px;
             margin: 10px 0;
             background-color: white;
             i{
               font-size: 20px;
               color: lightgray;
             }
           }
           li:hover{
             background-color: #409EFF;
             i{
               color: white;
             }
           }
         }
       }
     }
</style>

<style lang="scss">
  .newsDetail-container {
    .news-comment{
      .el-textarea{
        .el-textarea__inner{
          min-height: 75px !important;
        }
      }
    }
  }
</style>