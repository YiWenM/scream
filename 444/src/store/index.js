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
		
    },
    mutations:{
		detailId(state,payload){
			state.detailId = payload;
		}
    }

})


export default store;