import Vue from 'vue'
import Router from 'vue-router'


import Home from './../views/home/Home'
import NewsItem from 'src/views/home/components/NewsItem';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'NewsItem',
          name: 'NewsItem',
          component: NewsItem,
          meta: {
            title: '为你推荐',
            activeName:'NewsItem'
          },
        }
      ]
    },
  ]
})
