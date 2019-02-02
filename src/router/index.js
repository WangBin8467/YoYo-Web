import Vue from 'vue'
import Router from 'vue-router'

import Home from './../views/home/Home';

import NewsItem from 'src/views/home/components/NewsItem';
import NewsDetail from 'src/views/news/newsDetail';
import NewsAdd from 'src/views/news/newsAdd';

import UserCenter from 'src/views/user/user-center';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/',
          name:'NewsItem',
          component:NewsItem,
        },
      ]
    },
    {
      path: '/News/id/:id',
      name: 'NewsDetail',
      component: NewsDetail,
    },
    {
      path: '/News/add',
      name: 'NewsAdd',
      component: NewsAdd,
    },
    {
      path: '/user/home',
      name: 'UserCenter',
      component: UserCenter,
    },
    {
      path: '*',
      redirect:{name:'Home'}
    },
  ]
})
