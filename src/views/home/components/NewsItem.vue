/**
* 首页新闻Item列表
* @file: NewsItem.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018/12/1 22:15
*/
<template>
  <div class="NewsItem-container">
    <div class="news-header">
      <h5>为你推荐</h5>
    </div>
    <div v-for="(item,index) in data"
         :key="item.id"
         class="new-item">
      <div class="new-title">{{item.title}}</div>
      <div class="new-content">{{item.content}}</div>
      <div class="new-author">
        <a>{{item.author}}</a>
      </div>
      <div class="new-time">{{item.time}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsItem',
    props: {

    },
    mixins: [],
    components: {},
    data() {
      return {
        data:[
          {
            id:1,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:2,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:3,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:4,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:5,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:6,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:7,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
          },
          {
            id:8,
            title:'学长考研资料便宜出啦~',
            content:'考研结束，学长所用的考研资料便宜出，还附赠学长自己所做的考研笔记，觉得物超所值，准备考研的学弟学妹们还在等什么，和我联系吧！',
            time:'2019.3.20',
            author:'groot'
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

<style lang="scss" scoped>
     .NewsItem-container{
       .news-header{
         border-bottom: 1px solid #ddd;
         h5{
           margin: 10px 0;
           height: 20px;
           line-height: 20px;
           font-size: 16px;
         }
       }
       .new-item{
         margin-top: 15px;
         border-bottom: 1px solid #f6f6f6;
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
         .new-content{
           color: #888;
           font-size: 13px;
           margin: 5px 0;
           display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 2;
           overflow: hidden;
           line-height: 1.5;
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
     }
</style>
