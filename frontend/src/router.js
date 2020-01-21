import Vue from 'vue'
import Router from 'vue-router'

import Home                 from   './views/Home.vue'
import FactoryMethod        from  './views/FactoryMethod.vue'

/*import Home from    './views/Home.vue'
import Article from     './views/Article.vue';
import CreateArticle from './views/CreateArticle.vue' */

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [{
    path: '/',
    name: '/',
    component: Home,
    props: true
  },
  {
    path: '/factory-method',
    name: 'factoryMethod',
    component: FactoryMethod
  }
  /* , {
    path: '/signup',
    component: Signup
  },
   
  {
    path: '/articles/create',
    component: CreateArticle,
    props: true
  },
  {
    path: '/article/:id',
    component: Article,
    props: true
  }, */
]
})

export default router; 