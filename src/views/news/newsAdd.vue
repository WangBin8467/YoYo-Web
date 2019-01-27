/**
* 发帖
* @file: newsAdd.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2019-01-22 22:08
*/
<template>
  <div class="newsAdd-container">
    <el-form ref="form"
             :model="form"
             :rules="rules"
             label-width="80px">
      <el-form-item label="标题" prop="name">
        <el-input v-model="form.name"
                  placeholder="请输入标题..."></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.type">
          <el-option :value="1" label="闲置交易"></el-option>
          <el-option :value="2" label="毕业贩卖"></el-option>
          <el-option :value="3" label="寻物启事"></el-option>
          <el-option :value="4" label="树洞角落"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容"  prop="content">
        <quillEditor v-model="form.content"
                     ref="myQuillEditor"
                     :options="editorOption"
                     @blur="onEditorBlur($event)"
                     @focus="onEditorFocus($event)"
                     @change="onEditorChange($event)">
        </quillEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">立即发布</el-button>
        <el-button @click="reset">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import { mapState } from 'vuex'
  import axios from 'axios';
  
  export default {
    name: 'newsAdd',
    props: {},
    mixins: [],
    components: {
      quillEditor
    },
    data() {
      return {
        content:'',
        editorOption:{},
        rules:{
          name: [
            { required: true, message: '请输入标题', trigger: 'blur' },
          ],
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ],
        },
        form:{
          name:'',
          type:1,
          content:''
        }
      };
    },
    computed: {
      ...mapState(['user','isLogin']),
    },
    created() {
    },
    mounted() {
    },
    methods: {
      onEditorBlur(val) {//失去焦点事件
        // console.clear();
        // console.log(val);
      },
      onEditorFocus(val) {//获得焦点事件
        // console.clear();
        // console.log(val);
      },
      onEditorChange(val) {//内容改变事件
        // console.clear();
        // console.log(val);
        // console.log(this.form.content);
      },
      onSubmit(){
        if(this.form.name.length&&this.form.content.length){
          if (this.isLogin){
            axios.post('api/news/addNews',{
              ...this.form,
              userID:this.user._id,
              author:this.user.name,
            }).then(res=>{
              if(res.data.code===200){
                this.$message({
                  type:'success',
                  message:'发布成功!'
                })
                this.form={};
              }else{
                this.$message.error(res.data.msg)
              }
            })
          }else{
            this.$store.commit('handleDialog',true)
          }
        
        }else{
          this.$message.error('请正确输入内容！');
        }
      },
      reset(){
        this.form={}
      }
    }
  };
</script>

<style lang="scss" scoped>
     .newsAdd-container{
       padding: 20px 0;
       width: 970px;
       margin: 0 auto;
     }
</style>

<style lang="scss">
  .newsAdd-container{
    .ql-toolbar{
      span{
        line-height: 24px;
      }
    }
    .ql-container{
      min-height: 240px;
      overflow-y: scroll;
    }
  }
</style>