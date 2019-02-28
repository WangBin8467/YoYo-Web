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
    <div class="news-page">
      <el-pagination
              background
              @current-change="handleCurrentChange"
              :page-size="filterForm.pageSize"
              layout="total, prev, pager, next, jumper"
              :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: 'NewsItem',
    props: {

    },
    mixins: [],
    components: {},
    data() {
      return {
        data:[],
        filterForm:{
          sort:-1,
          page:1,
          pageSize:7,
          type:-1
        },
        totalCount:0
      };
    },
    computed: {},
    created() {
    },
    mounted() {
      this.getNewsList();
    },
    methods: {
      toNewsDetail(id){
        this.$router.push({path:`news/id/${id}`});
      },
      getNewsList(){
        axios.get('api/news/getNewsList',{...this.filterForm}).then(res=>{
          this.data=res.data.result.data;
          this.totalCount=res.data.result.count;
        })
      },
      handleCurrentChange(val){
        this.filterForm.page=val;
        this.getNewsList();
      }
    },
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
           max-height: 60px;
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
       .news-page{
         margin: 30px 0;
         text-align: center;
       }
     }
</style>
