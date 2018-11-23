<template>
  <div  v-infinite-scroll="loadMore"infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  	 <ul class="headnav" v-if="search.length">
      <li v-for ="data,index in desc"  :class="current===index?'active':''"  @click="sorts(index)">{{data}}</li> 
     </ul>
     <div v-if="search.length===0" class="nothing">这个真没有,看看我们为你推荐的商品吧！</div>
      <ul class="headnav" v-if="search.length===0">
        <li>尖叫好物</li> 
      </ul>
     <ul v-if="search.length" class="products">
        <li v-for="data in search" class="list" @click="detail(data.productId)">
            <div>
              <img :src="data.productImg" alt="">
            </div>
            <p class="text">{{data.productTitle}}</p>
            <p>￥{{data.sellPrice}}</p>
            <p class="text">{{data.prizeOrSlogan}}</p>
        </li>
     </ul>
     <ul v-if="search2.length" class="products">
        <li v-for="data in search2" class="list" @click="detail(data.productId)">
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
  name : 'detail',
  data(){
  	return {
      current:0,
      desc:['上新','销量','价格']
  	}
  },

  mounted(){
     
  },
  computed:{
    search(){  
      return this.$store.state.search;;
    },
    search2(){  
      return this.$store.state.search2;;
    }
  },
  methods:{
    sorts(data){
        if (data===0) {
           this.current =0
         this.$store.commit('change','onShelfTime')
          this.$store.dispatch('change')  
        }
        else if(data===1){
          this.$store.commit('change','sales')
           this.$store.dispatch('change')
          this.current =1
        }else{
          this.$store.commit('change','price')
           this.$store.dispatch('change')
          this.current =2
        } 
    },
    detail(data){
      this.$router.push(`/detail/`+data);
    },
    loadMore(){
      this.$store.dispatch('paths');
    }
  },
  beforeDestroy(){
   this.$store.commit('put',false);
  },
  components:{
    'indicator':Indicator,
    'infiniteScroll':InfiniteScroll
  }
}
</script>

<style scoped lang="scss">
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
    .active{
       border-bottom: 2px solid #000;
       color: #000;
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
   height: .7rem;
   background:  #f5f5f5;
   text-align: center;
   font-size: .16rem;
   line-height: .7rem;
   color:#ccc;
 }
</style>