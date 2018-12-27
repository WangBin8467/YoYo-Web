import Vue from 'vue'
import Router from 'vue-router'

import BaseLayout from 'src/views/layout/BaseLayout';

import Home from './../views/home/Home'
import NewsItem from 'src/views/home/components/NewsItem';

import newsDetail from 'src/views/news/newsDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseLayout',
      component: BaseLayout,
      // children: [
      //   {
      //     path: '/NewsItem',
      //     name: 'NewsItem',
      //     component: NewsItem,
      //     meta: {
      //       title: '为你推荐',
      //       activeName:'NewsItem'
      //     },
      //   }
      // ]
    },
    {
      path: '/news/id/:id',
      name: 'newsDetail',
      component: newsDetail,
    },
  ]
})
