import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex) 
const store = new Vuex.Store({
	state:{
		detailTitle: "商品详情",
		detailId :''
	},
	actions:{
	    bar(store,payload){
	        axios.get('/v2/page?pageId=1&tabId=1&_=1542764925216').then(res=>{
	 	    var barList = res.data.data.modules.splice(1);
	 	    store.commit('bars', barList);

	 	    })
	    }
	},

    mutations:{
		detailId(state,payload){
			state.detailId = payload;
		},
   	 	bars(state,payload){
            console.log(payload)
            state.barList = payload;
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
        }
    }
})


export default store;