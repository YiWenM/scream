<template>
  <div>
  	<h2>购物车</h2>
	<nav>
		<p>您的购物车还是空的</p>
		<span>看看收藏</span>
		<span>去逛逛</span>
	</nav>
	<div class="recommend">- 为你推荐 - </div>
	<ul>
		<li v-for="data in datalist" @click="handleClick(data.productId)" :key="data.productId">
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
  		nextlist:[]
  	}
  },
  mounted(){
  
	axios.get("/recommend/cart?currentPage=1&_=1542777146544").then(res=>{
		this.datalist = res.data.data;
	}).catch(error=>{
		console.log(error);
	})
	
  },
  methods:{
  	handleClick(id){
  		this.$router.push('/detail/'+id);
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

		li:nth-of-type(2n){
			border-left:  1px solid #ccc;
		}

		li{
			float:left;
			width:50%;
			height:3rem;
			padding:.2rem;
			border-bottom: 1px solid #ccc;
			
			img{
				width:50%;
				height:1rem;
				margin-left: .3rem;
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
