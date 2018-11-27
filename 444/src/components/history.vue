<template>
<div>
  <div>
    <div class="hot">
      <p>热门搜索</p>
      <span v-for ="data in dataList" @click="getdata(data)">{{data}}</span>
    </div>
    <div class="done">
      <div>
        <p>历史搜索 <span @click="deldata()" class="del">清空</span></p>
        <span v-for ="data in $store.state.doneList" @click="getdata(data)">{{data}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name:'history',
   data(){
   	return{
   		dataList:['尖叫设计','暖手宝','沙发','被子','餐具','床上用品'],
   	}
   },
   methods:{
   	getdata(data){
       this.connent = data;
       this.$store.commit('done',data);
       this.$store.commit('keyword',window.encodeURIComponent(data));
      axios.get(`/product/search?keyword=${window.encodeURIComponent(data)}&sort=onShelfTime&order=desc&currentPage=1&_=${new Date().getTime()}`  ).then(res=>{
         if (res.data.data.products.length ===0) {
           axios.get(`/recommend/search?_=${new Date().getTime()}`).then(res=>{
             console.log(res.data.data)
              this.$store.commit('search2',res.data.data);
           })
         }else{
           this.$store.commit('search',res.data.data.products); 

         }
           this.$router.push('/view/search')    
      })
   	},
   	deldata(){
   		 this.$store.commit('delDone',[])
      }
   	
   },
   computed:{
   	changes(){
   		return this.$store.state.doneList;
   	}
   }
}
</script>

<style scoped lang="scss">
   .hot,.done{
   	margin-top: .2rem;
   	padding-left: .1rem;
   	 p{
   	 	 overflow: hidden;
	     color: #808080;
	     margin-bottom: 0.1rem;
   	 }
   	 span{
   	 	font-size: 0.12rem;
 	    color: #000;
 	    display: inline-block;
 	    text-align: center;
 	    padding: 0.1rem 0.2rem;
 	    background-color: #F5F5F5;
 	    margin: 0.15rem; 
   	 }
	   span.del{
	   	float: right;
	   	right: 1rem;
	   	top: -.1rem;
	   	border-radius:.1rem;
	   	margin: 0;
	   }

   }

</style>