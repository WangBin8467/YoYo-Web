import Vue from 'vue'
import Router from 'vue-router'

import Home from './../views/home/Home';

import NewsItem from 'src/views/home/components/NewsItem';
import NewsDetail from 'src/views/news/newsDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'News',
          name:'NewsItem',
          component:NewsItem,
          meta:{
            title:'为你推荐'
          }
        },
      ]
    },
    {
      path: '/News/id/:id',
      name: 'NewsDetail',
      component: NewsDetail,
    },
    {
      path: '*',
      redirect:{name:'Home'}
    },
  ]
})
