<template>
  <div  v-infinite-scroll="loadMore"infinite-scroll-disabled="loading"
  infinite-scroll-distance="10" >
  	      <div class="nothing">
  	      	<img src="../assets/1.jpg" alt="">
  	      </div>
  	      <ul  class="products">
  	         <li v-for="data in lists" class="list" @click="detail(data.productId)">
  	             <div>
  	               <img :src="data.productImg" alt="">
  	             </div>
  	             <p class="text">{{data.productTitle}}</p>
  	             <p>￥{{data.sellPrice}}</p>
  	             <p class="text">{{data.prizeOrSlogan}}</p>
  	         </li>
  	      </ul>
  </div>
</template>

<script>
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from "axios"
export default {
  name:'things',
  data(){
  	return{
  		list:[],
  		page:1,
  		loading:false
  	}
  },
 /* mounted(){
  	axios.get(`/pages/productGroup/${this.$route.params.id}/products?pageNumbe=${this.page}&_=${new Date().getTime()}`).then(res=>{
  		this.list = res.data.data.products
  	})
  } ,*/
  // https://m.wowdsgn.com/pages/productGroup/10013/products?pageNumber=3&_=1543041775186
  methods:{
  	loadMore(){
       axios.get(`/pages/productGroup/${this.$route.params.id}/products?pageNumber=${this.page}&_=${new Date().getTime()}`).then(res=>{
        this.page++
       	if (res.data.length===0) {
       		this.loading =true;
       	}
  		   this.list =[...this.list,...res.data.data.products] 
  	  })
    },
    detail(data){
    	this.$router.push('/detail/'+data);
    }
  },
  computed:{
    lists(){
      return this.list
    }
  },
  beforeDestroy(){
    this.$store.commit("put",true);
  }
}
</script>

<style scoped  lang="scss">
  .headnav{
    display: flex;
     li{
      flex: 1;
      text-align: center;
      height: .5rem;
      line-height: .5rem;
      border-bottom: 1px solid #f5f5f5;
      color: #808080;
     }
  }
  .products{
   width: 100%;
   overflow: hidden;
   li:nth-of-type(2n+1){
    border-right: 1px solid #f5f5f5;
   }
   .list{
     height: 2.8rem;
     padding: 0 .1rem;
     border-bottom: 1px solid #f5f5f5;
     float: left;
     width: 50%;
     img{
       width: 100%;
       height: 2rem;
     }
     p{
       font-size: .12rem;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
       width: 1.5rem;
     }
     .text{
       color: #808080;
     }
   }
  }
  .nothing{
    height: 2.2rem;
    img{
    	display: block;
    	height:100%;
    	width: 100%;
    }
  }
</style>
