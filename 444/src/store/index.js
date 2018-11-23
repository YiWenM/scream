import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swiper from 'swiper';
import  'swiper/dist/css/swiper.min.css';
Vue.use(Vuex) 
const store = new Vuex.Store({
	state:{
		detailTitle: "商品详情",
		detailId :'',
    barList:[],
    homeList:[],
    homeList2:[],
    funitureList:[],
    funitureList2:[],
    activeList:[],
    activeList2:[],
    isShow:true,
    search:[],
    shows:true
	},
	actions:{
	    bar(store,payload){
          axios.get('/v2/page?pageId=1&tabId=1&_=1542764925216').then(res=>{
        var barList = res.data.data.modules.splice(1,10);
        store.commit('bars', barList);

        })
      },
      otherList(store,payload){
	        axios.get('/v2/page?pageId=1&tabId=1&_=1542764925216').then(res=>{
	 	    var otherList = res.data.data.modules.splice(payload,10);
	 	    store.commit('otherList', otherList);

	 	    })
	    },
      bars(store,payload){
          axios.get('/v2/page?pageId=1&tabId=10005&_=1542846034581').then(res=>{
          var lists = res.data.data.modules.splice(3);
          var barLists = res.data.data.modules.splice(1,2);
           store.commit('homeList', lists);
           store.commit('homebar', barLists);


        })
      },
      funiture(store,payload){
          axios.get('/v2/page?pageId=1&tabId=10006&_=1542861845237').then(res=>{
          var lists = res.data.data.modules.splice(3);
          var barLists = res.data.data.modules.splice(1,2);
           store.commit('funitureList', lists);
           store.commit('funiturebar', barLists);


        })
      },
      activeList(store,payload){
          axios.get('/v2/page?pageId=1&tabId=10010&_=1542864437566').then(res=>{
          var lists = res.data.data.modules.splice(2);
          var barLists = res.data.data.modules.splice(1);
           store.commit('activeList', lists);
           store.commit('activebar', barLists);


        })
      }
	},

    mutations:{
		detailId(state,payload){
			state.detailId = payload;
		},
   	 	bars(state,payload){
            state.barList=payload;
            var mySwiper = new Swiper ('.swiper-container', {
               slidesPerView: 3,
               slidesPerGroup: 3,
               pagination: {
                 el: '.swiper-pagination',
               },
                autoplay: {
                   delay: 2500,
                   disableOnInteraction: false,
                },
                
            })  
        },
        otherList(state,payload){
           state.barList=[...state.barList,...payload]; 
        },
        homebar(state,payload){
            state.homeList = payload;
        },
        homeList(state,payload){
            state.homeList2 = payload;
        },
        funiturebar(state,payload){
            state.funitureList = payload;
        },
        funitureList(state,payload){
            state.funitureList2 = payload;
        },
        activebar(state,payload){
            state.activeList = payload;
        },
         activeList(state,payload){
            state.activeList2 = payload;
        },
        put(state,payload){
          state.isShow = payload;
        },
        search(state,payload){
          state.search = payload;
        },
        shows(state,payload){
          state.shows = payload;
        }
    }
})


export default store;