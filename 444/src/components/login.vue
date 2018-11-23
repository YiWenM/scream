<template>
  <div>
  <div id="titles"></div>
  	<h2>购物车</h2>
	<nav>
		<p>您的购物车还是空的</p>
		<span>看看收藏</span>
		<span>去逛逛</span>
	</nav>
	<div class="recommend">- 为你推荐 - </div>
	<ul v-infinite-scroll="loadMore"
  		infinite-scroll-disabled="loading"
  		infinite-scroll-immediate-check="false"
  		infinite-scroll-distance="0">
		<li v-for="data,index in datalist" @click="handleClick(data.productId,index)" :key="data.productId">
			<img :src="data.productImg" alt="">
			<p>{{data.productTitle}}</p>
			<p>￥<span>{{data.originalPrice}}</span></p>
			<p>{{data.prizeOrSlogan}}</p>
		</li>
	</ul>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name:'cart',
  data(){
  	return {
  		datalist:[],
  		nextlist:[],
  		loading:false,
  		current:1
  	}
  },
  mounted(){
  
	axios.get(`/recommend/cart?currentPage=${this.current}&_=1542777146544`).then(res=>{

		this.datalist = res.data.data;
		console.log(this.datalist)
		//把信息带到详情页：
		this.$store.commit("detailinfo",this.datalist);

	}).catch(error=>{
		console.log(error);
	})
	
  },
  methods:{
  	handleClick(id,index){
  		this.$router.push('/detail/'+id);
  		this.$store.commit("detailindex",index);
  		console.log(index);
  	},
  	loadMore(){
  		// console.log("到底了");
		this.current++;
		axios.get(`/recommend/cart?currentPage=${this.current}&_=1542777146544`).then(res=>{

			this.datalist = [...this.datalist,...res.data.data]
			console.log(res.data.data)
			
		}).catch(error=>{
			console.log(error);
		})
  	}
  }
}
</script>

<style scoped lang="scss">
	/**{
		border-box:box-sizing;
	}*/
	span{
		display:inline-block;
	}
	h2{
		font-size: .16rem;
		/*font-weight: 100;*/
		text-align: center;
		line-height: .4rem;
	}
	nav{
		padding-top: .1rem;
		padding-bottom: .1rem;
		text-align: center;
		background: #eee;
		span{
		width:1rem;
		height:.35rem;
		line-height: .35rem;
		background: #fff100;
		margin-left: .2rem;
		margin-top: .1rem;
		}
	}
	.recommend{
		text-align: center;
		font-size: .18rem;
		line-height: .6rem;
	}

	ul{
		border-top: 1px solid #ccc;
		clear:both;	
		overflow: hidden;
		li:nth-of-type(2n){
			border-left:  1px solid #ccc;
		}

		li{
			float:left;
			width:50%;
			height:3.5rem;
			padding:.2rem;
			border-bottom: 1px solid #ccc;
			
			img{
				width:100%;
				height:1.8rem;
				margin-bottom: .2rem;
			}
			p{
				color:#aaa;
				span{
					color:black;
				}
			}
		}
	}

</style>
