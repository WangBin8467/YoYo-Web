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
      redirect: { name: 'NewsItem' },
      children:[
        {
          path:'News',
          name:'NewsItem',
          component:NewsItem,
          props: true,
        },
        {
          path:'Trading',
          name:'NewsItem',
          component:NewsAdd,
          props: true,
        },
        {
          path:'Graduation',
          name:'NewsItem',
          component:NewsDetail,
          props: true,
        },
        {
          path:'Find',
          name:'NewsItem',
          component:UserCenter,
          props: true,
        },
        {
          path:'Corner',
          name:'NewsItem',
          component:UserCenter,
          props: true,
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
      path: '/user/home/:type',
      name: 'UserCenter',
      component: UserCenter,
    },
    {
      path: '*',
      redirect:{name:'Home'}
    },
  ]
})
