import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import headnav from '../components/headnav'
import category from '../components/category'
import login from '../components/login'
import news from '../components/news'
import myself from '../components/myself'
import detail from '../components/detail'
import cart from '../components/cart'
import inputconnect from '../components/inputconnect'
import search from '../components/search'

export default new Router({
  routes: [
     {
     	path:'/page/index',
     	component:headnav,
      },
     {
        path:'/view',
         component:inputconnect,
         children:[
             {
              path:'search',
              component:search
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
      path:'/detail/:id',
      component:detail
      },
      {
      path:"*",
      redirect:"/page/index"
    }
  ]
})
