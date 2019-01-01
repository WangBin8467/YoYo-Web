import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
  user:{
    name:'',
    mobile: '',
    sex:0,
    age:'',
    degree:1,
    remark:''
  }
})