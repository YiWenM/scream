import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import headnav from '../components/headnav'
import recommend from '../components/recommend'
import furniture from '../components/furniture'
import actives from '../components/active'
import home from '../components/home'
import category from '../components/category'
import login from '../components/login'
import news from '../components/news'
import myself from '../components/myself'

export default new Router({
  routes: [
     {
     	path:'/page/index',
     	component:headnav,
     	children:[
            {
            	path:'/recommend',
            	component:recommend
            },
            {
            	path:'/furniture',
            	component:furniture
            },
            {
            	path:'/active',
            	component:actives
            },
            {
            	path:'/home',
            	component:home
            }
     	 ]
      },
      {
    	path:'/pages/category',
    	component:category
       },
       {
    	path:'/cart',
    	component:login
       },
       {
    	path:'/news',
    	component:news
       },
       {
    	path:'/myself',
    	component:myself
       },

      {
      path:"*",
      redirect:"/page/index"
    }
  ]
})
