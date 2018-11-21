import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import headnav from '../components/headnav'
import category from '../components/category'
import login from '../components/login'
import news from '../components/news'
import myself from '../components/myself'

export default new Router({
  routes: [
     {
     	path:'/page/index',
     	component:headnav
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
