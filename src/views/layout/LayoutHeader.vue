/**
* 模板头部
* @file: LayoutHeader.vue
* @author: Groot/grootgeek12@gmail.com
* Date: 2018-12-27 21:50
*/
<template>
  <div class="LayoutHeader-container">
    <!--首页导航 start-->
    <div class="nav-top">
      <div class="home-top"></div>
      <div class="home-header-container">
        <div class="home-header">
          <div class="header-title">
            <div class="header-logo">
              <img src="../../assets/home/yoyo-logo.png">
            </div>
            <div class="header-nav">
              <ul class="nav-ul">
                <li class="li-item first">首页</li>
                <li class="li-item">问答</li>
                <li class="li-item">专栏</li>
                <li class="li-item">讲堂</li>
                <li class="li-item">发现</li>
              </ul>
            </div>
          </div>
          <div class="header-search">
            <el-input v-model="searchValue"
                      placeholder="请输入内容"
                      size="medium"
                      clearable>
              <el-button slot="append"
                         icon="el-icon-search"
                         @click="search"></el-button>
            </el-input>
          </div>
          <div class="header-user">
            <div class="user-login" @click="openDialog('login')">
              立即登录
            </div>
            <div class="user-register" @click="openDialog('register')">
              免费注册
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--首页导航 end-->
  
    <!--介绍transiton start-->
    <transition name="el-zoom-in-top">
      <div class="home-svg" v-if="!isLogin&&showSvg">
        <div class="svg-info">
          <div class="info-title">
            在 YoYo，转手闲置、淘换宝贝
          </div>
          <div class="info-content">
            每一天，我们都在促成师大校园内小伙伴们闲置物品的相互交易，并为他们在校内社交、问题求助上提供帮助。
          </div>
        </div>
        <div class="svg-user">
          <div class="register user" @click="openDialog('register')">
            免费注册
          </div>
          <div class="login user" @click="openDialog('login')">
            立即登录
          </div>
        </div>
        <div class="close" @click="showSvg=false">
          x
        </div>
      </div>
    </transition>
    <!--介绍transiton end-->
  
    <!--登录注册弹窗 start-->
    <div class="user-dialog">
      <el-dialog :visible.sync="showDialog"
                 :title="activeTab==='login'?'用户登录':'用户注册'"
                 width=600px
                 center>
        <el-tabs v-model="activeTab">
          <el-tab-pane label="登录" name="login" class="login">
            <el-form label-position="left"
                     :model="loginForm"
                     :rules="loginRules"
                     ref="loginForm"
                     style="margin-top: 20px">
              <el-form-item prop="name">
                <el-input v-model="loginForm.name"
                          placeholder="请输入账户名">
                  <template slot="prepend"><i class="fa fa-user"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="loginForm.password"
                          placeholder="请输入密码">
                  <template slot="prepend"><i class="fa fa-lock"></i> </template>
                </el-input>
              </el-form-item>
              <div class="tips">
                未注册账号？
                <span style="color: orangered;cursor: pointer"
                      @click="activeTab='register'">立即注册</span>
              </div>
              <div class="form-btn">
                <el-button @click="closeDialog"
                           type="danger">取消</el-button>
                <el-button type="primary"
                           @click="login">登录</el-button>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form  label-position="left"
                      :model="registerForm"
                      :rules="registerRules"
                      ref="registerForm"
                      style="margin-top: 20px"
                      label-width="80px">
              <el-form-item prop="name" label="用户名">
                <el-input v-model="registerForm.name"
                          placeholder="请输入用户名">
                </el-input>
              </el-form-item>
              <el-form-item  prop="password" label="密码">
                <el-input type="password"
                          v-model="registerForm.password"
                          placeholder="请输入密码 不少于6位字符">
                </el-input>
              </el-form-item>
              <el-form-item  label="确认密码" prop="checkpassword">
                <el-input type="password"
                          v-model="registerForm.checkpassword"
                          placeholder="请再次输入密码">
                </el-input>
              </el-form-item>
              <el-form-item prop="sex" label="性别">
                <el-radio v-model="registerForm.sex" :label="0">男</el-radio>
                <el-radio v-model="registerForm.sex" :label="1">女</el-radio>
              </el-form-item>
              <el-form-item prop="degree" label="年级">
                <el-select v-model="registerForm.degree">
                  <el-option
                          v-for="item in degreeOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="简介">
                <el-input type="textarea"
                          v-model="registerForm.remark"
                          placeholder="向大家介绍一下自己吧~">
                </el-input>
              </el-form-item>
              <div class="form-btn">
                <el-button @click="closeDialog"
                           type="danger">取消</el-button>
                <el-button type="primary"
                           @click="register">注册</el-button>
              </div>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
    </div>
    <!--登录注册弹窗 end-->
  </div>
</template>

<script>
  
  export default {
    name: 'LayoutHeader',
    props: {},
    mixins: [],
    components: {},
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === ''||value.length <6) {
          callback(new Error('密码不得小于6位字符'));
        } else {
          if (this.registerForm.password !== '') {
            this.$refs.registerForm.validateField('checkpassword');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        searchValue: '',
        isLogin: false,
        showSvg: true,
        showDialog: false,
        activeTab: 'login',
        loginForm:{
          name:'',
          password:''
        },
        loginRules:{
          name:{
            required: true, message: '请输入账户名', trigger: 'blur'
          },
          password:{
            required: true, message: '请输入密码', trigger: 'blur'
          }
        },
        registerForm:{
          name:'',
          password:'',
          checkpassword:'',
          sex:0,
          age:'',
          degree:1,
          remark:''
        },
        registerRules:{
          name:{
            required: true, message: '请输入账户名', trigger: 'blur'
          },
          password:{
            required: true, validator: validatePass, trigger: 'blur'
          },
          checkpassword:{
            required: true, validator: validatePass2, trigger: 'blur'
          },
          sex:{
            required: true,  message: '请选择性别', trigger: 'blur'
          },
          degree:{
            required: true, message: '请输入账户名', trigger: 'blur'
          },
        },
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
      };
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {
      openDialog(type) {
        this.showDialog = true;
        if (type === 'register') {
          this.activeTab = 'register';
        } else {
          this.activeTab = 'login';
        }
      },
      validateForm() {
        let pass = true;
        if(!this.$refs){
          pass=false;
        }
        if (!pass) {
          this.$message.error('信息输入错误!');
        }
        return pass;
      },
      login(){
        let pass=this.validateForm();
        if(pass){

        }
      },
      register(){
        let pass=this.validateForm();
        if(pass){

        }

      },
      closeDialog(){
        this.showDialog=false;
        this.loginForm={};
        this.registerForm={};
      },
      search: _.debounce(function () {
        console.clear();
        console.log(this.searchValue)
      },300),
    },
  };
</script>

<style lang="scss" scoped>
     .LayoutHeader-container{
       .nav-top {
         position: fixed;
         top: 0;
         z-index: 999;
         background-color: white;
         width: 100%;
         .home-top {
           height: 3px;
           background-color: #409eff;
         }
         .home-header-container {
           box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
           .home-header {
             height: 64px;
             line-height: 64px;
             width: 1140px;
             margin: 0 auto;
             display: flex;
             justify-content: space-between;
             .header-title {
               display: flex;
               flex-direction: row;
               .header-logo {
                 width: 150px;
                 height: 100%;
                 margin-top: -75px;
                 margin-right: 60px;
                 cursor: pointer;
               }
               .header-nav {
                 height: 100%;
                 line-height: 64px;
                 margin-left: 20px;
                 ul {
                   margin: 0;
                   list-style: none;
                   padding: 0;
                 }
                 .nav-ul {
                   .li-item {
                     display: inline-block;
                     padding: 0 10px;
                     color: #757575;
                     font-size: 16px;
                     cursor: pointer;
                   }
                   .first {
                     color: #409eff;
                     font-weight: bold;
                   }
                 }
               }
             }
             .header-search {
          
             }
             .header-user {
               display: flex;
               flex-direction: row;
               align-items: center;
               .user-login {
                 color: #409eff;
                 font-size: 14px;
                 cursor: pointer;
               }
               .user-register {
                 cursor: pointer;
                 height: 30px;
                 line-height: 30px;
                 background-color: #409eff;
                 margin-left: 20px;
                 color: #fff;
                 border-color: #008151;
                 padding: 0 13px;
                 font-size: 14px;
                 border-radius: 4px;
               }
               .user-login:hover{
                 color: #167fea;
               }
               .user-register:hover{
                 background-color: #167fea;
               }
             }
           }
         }
       }
       .home-svg {
         margin-top: 64px;
         background-color: #409eff;
         height: 188px;
         position: relative;
         background-image: url("../../assets/home/banner-bg.svg");
         display: flex;
         justify-content: space-between;
         padding: 0 15%;
         .svg-info {
           max-width: 970px;
           margin: 40px 0 0 0;
           .info-title {
             padding-bottom: 20px;
             font-size: 30px;
             color: #fff;
           }
           .info-content {
             font-size: 18px;
             color: #fff;
             width: 80%;
           }
         }
         .svg-user {
           display: flex;
           flex-direction: row;
           height: 40px;
           margin: auto 0;
           .user {
             padding: 10px 16px;
             font-size: 18px;
             line-height: 1.33;
             border-radius: 6px;
             cursor: pointer;
             box-sizing: border-box;
             min-width: 106px;
           }
           .register {
             color: #409eff;
             background-color: white;
        
           }
           .login {
             margin-left: 20px;
             border: 1px solid white;
             color: white;
           }
           .register:hover{
             background-color: lightgray;
           }
           .login:hover{
             background-color: #2e78c1;
           }
         }
         .close {
           width: 20px;
           height: 20px;
           border-radius: 10px;
           position: absolute;
           text-align: center;
           line-height: 18px;
           top: 15px;
           right: 15px;
           cursor: pointer;
           background-color: #2e78c1;
           color: rgba(255, 255, 255, 0.25);
         }
       }
       .user-dialog {
         .tips{
           text-align: right;
           margin-top: -10px;
           margin-right: 10px;
           font-size: 12px;
         }
         .form-btn{
           margin-top: 20px;
           display: flex;
           justify-content: space-around;
         }
       }
     }
</style>

<style lang="scss">
  .Home-container {
    .header-search {
      .el-input-group {
        width: 80% !important;
      }
    }
    .el-dialog__body{
      padding: 25px 90px 30px !important;
      .login{
        .el-form-item__error{
          left: 15% !important;
        }
      }
      
    }
  }
</style>