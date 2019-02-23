import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    user:{
      _id:'',
      name:'',
      mobile: '',
      sex:'',
      age:'',
      degree:'',
      remark:''
    },
    isLogin:false,
    showUserDialog:false
  },
  mutations: {
    //更新用户信息
    userLogin(state, user) {
      _.assign(state.user,user)
      if(user._id){
        state.isLogin=true;
      }else{
        state.isLogin=false;
      }
    },
    handleDialog(state,val){
      state.showUserDialog=val;
      console.clear();
      console.log(state);
    }
  }
})

export default store;