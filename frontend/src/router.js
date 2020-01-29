import Vue from 'vue'
import Router from 'vue-router'

import Home                 from   './views/Home.vue'
import FactoryMethod        from  './views/FactoryMethod.vue'
import AbstractFactory      from './views/AbstractFactory.vue'
import UnderConstruction    from './views/UnderConstruction.vue'

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
  },
  {
    path: '/abstract-factory',
    component: AbstractFactory
  },
  /* 
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
  {
    path:'*',
    component: UnderConstruction
  }
]
})

export default router; 