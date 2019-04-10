import Vue from 'vue';
import Router from 'vue-router';

import Home from './../views/home/Home';

import NewsItem from 'src/views/home/components/NewsItem';
import NewsDetail from 'src/views/news/newsDetail';
import NewsAdd from 'src/views/news/newsAdd';

import UserCenter from 'src/views/user/user-center';

import adminHome from 'src/views/admin/adminHome';
import adminLogin from 'src/views/admin/admin-login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: { name: 'NewsItem' },
      children: [
        {
          path: 'News',
          name: 'NewsItem',
          component: NewsItem,
          props: true,
        },
        {
          path: 'Trading',
          name: 'NewsItem',
          component: NewsItem,
          props: true,
        },
        {
          path: 'Graduation',
          name: 'NewsItem',
          component: NewsItem,
          props: true,
        },
        {
          path: 'Find',
          name: 'NewsItem',
          component: NewsItem,
          props: true,
        },
        {
          path: 'Corner',
          name: 'NewsItem',
          component: NewsItem,
          props: true,
        },
      ],
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
      path: '/admin/home',
      name: 'adminHome',
      component: adminHome,
    },
    {
      path: '/admin/home/login',
      name: 'adminLogin',
      component: adminLogin,
    },
    {
      path: '*',
      redirect: { name: 'Home' },
    },
  ],
});
