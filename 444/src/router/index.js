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
import sortdetail from '../components/sortdetail'
import sofa from '../components/sofa'
import chair from '../components/chair'
import table from '../components/table'
import cupboard from '../components/cupboard'
import inputconnect from '../components/inputconnect'
import search from '../components/search'
import things from '../components/things'
import history from '../components/history'

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
        path:'/detail/:id',
        component:detail
     },
     {
        path:'/sortdetail',
        component:sortdetail,
        children:[
            {
              path : 'sofa',
              component : sofa
            },
            {
              path : 'chair',
              component : chair
            },
            {
              path : 'cupboard',
              component : cupboard
            },
            {
              path : 'table',
              component : table
            }
         ]
       },
 	     {
        path:'/view',
        component:inputconnect,
        children:[
             {
              path:'search',
              component:search
             },
              {
              path:'/',
              component:history
             }
         ]
      }, 
       {
         path:"/more/:id",
         component:things
      } ,   
      {
        path:"*",
        redirect:"/page/index"
     }    
    ]
   })

