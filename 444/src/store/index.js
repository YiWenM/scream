import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swiper from 'swiper';
import  'swiper/dist/css/swiper.min.css';
Vue.use(Vuex) 
const store = new Vuex.Store({
	state:{
		detailTitle: "商品详情",
		detailId :[],
     detailinfo:[],
		 barList:[],
	    homeList:[],
	    homeList2:[],
	    funitureList:[],
	    funitureList2:[],
	    activeList:[],
	    activeList2:[],
	    isShow:true,
	    search:[],
	    shows:true,	
      search2:[],
      current:1,
      keyword:'',
      change:'onShelfTime',
      doneList:[],
      category:[],
      category2 :[],
      categorylist1 : ["柜架","灯具","用餐","烹饪","纺织品","家饰","书桌","卫浴","时尚生活"]
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
      },
      paths(store,payload){
        store.state.current++
        axios.get(`/product/search?keyword=${store.state.keyword}&sort=${store.state.change}&order=desc&currentPage=${store.state.current}&_=${new Date().getTime()}`).then(res=>{
           store.commit('search1', res.data.data.products);

        })
      },
      change(store,payload){
        axios.get(`/product/search?keyword=${store.state.keyword}&sort=${store.state.change}&order=desc&currentPage=1&_=${new Date().getTime()}`).then(res=>{
                    store.commit('search',res.data.data.products); 
           })
      }
	},

    mutations:{
		detailId(state,payload){
			state.detailId = payload;
		},
    detailinfo(state,payload){
        state.detailinfo = payload;
    },
    detailindex(state,payload){
        state.detailindex = payload;
    },
   	 	bars(state,payload){
      /*  console.log(  payload)*/
            state.barList=payload;
            var mySwiper = new Swiper ('.swiper', {
                slidesPerView: 3,
                slidesPerGroup : 1,
                loop:false,
                //slidesPerGroup: 3,
                pagination: {
                el: '.swiper-pagination',
                clickable: true
                }
                
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
        },
        search2(state,payload){
          state.search2 = payload;
        },
        del(state,payload){
          state.search2 = payload;
          state.search = payload;
        },
        search1(state,payload){
          state.search=[...state.search,...payload];
        },
        keyword(state,payload){
           state.keyword = payload;
        },
        change(state,payload){
          state.change = payload;
        },
        delDone(state,payload){
          state.doneList = payload;
        },
        done(state,payload){
          state.doneList.push(payload) ;
        },
      categoryIndex(state,payload){
          state.category = payload;
      },
      categoryIndex2(state,payload){
          state.category2 = payload;
      }
    }
})


export default store;