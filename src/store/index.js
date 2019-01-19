import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    user:{
      name:'',
      mobile: '',
      sex:'',
      age:'',
      degree:'',
      remark:''
    },
  },
  mutations: {
    //更新用户信息
    userLogin(state, user) {
      state.user = user;
    },
  }
})

export default store;