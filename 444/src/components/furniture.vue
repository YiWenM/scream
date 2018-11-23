<template>
  <div class="main">
  	<swipe class="my-swipe">
  	  <swipe-item class="slide1 imgs" v-for="data in imgList" :key="data.id">
  	  	<img :src="data.bannerImgSrc" alt="">
  	  </swipe-item>
  	</swipe>
  	 <div v-for="data in $store.state.funitureList"class="bars">
	  	 	 <p class="words" v-if="data.moduleName">{{data.moduleName}}</p>
	  	 	  <p class="woord" v-if="data.moduleDescription">{{data.moduleDescription}}</p>
  	        <div  v-if="data.moduleContent.banners&& data.moduleContent.banners.length===1" >
	  	      <img v-if="data.moduleContent.banners[0]" :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
  	        </div>
  	     <div v-if="data.moduleContent.products">
  	     <ul  v-if=" data.moduleContent.products.length<6">
  	     	<li v-for="pros,index in data.moduleContent.products"v-if="index<3">
	  	     	<img :src="pros.productImg" alt="">
	  	     	<p>{{pros.productName}}</p>
	  	     	<p>￥{{pros.sellPrice}}</p>
  	     	</li>
  	     </ul>
  	     	<div v-if=" data.moduleContent.products.length>6" >
  	     		<div class="swiper-container">
  	     		    <div class="swiper-wrapper">
  	     		      <div class="swiper-slide" v-for="pros in data.moduleContent.products" :key="pros.id">
     		        	 <img :src="pros.productImg" alt="">
	  	     	          <p >{{pros.productName}}</p>
	  	     	          <p >￥{{pros.sellPrice}}</p>
  	     		      </div>
  	     		    </div>
  	     		  </div>  
     		      <p class="all">查看全部<i class="iconfont ">&#xe603;</i></p> 
  	     	   </div>
  	        </div>
  	 </div>
  	  <div v-for="data in $store.state.funitureList2" class="homeList2">
  	  	<div class="homeList"v-if="data.moduleContent.banners&& data.moduleContent.banners.length===3">
	  	 <p v-if="data.moduleName">{{data.moduleName}}</p>
	  	 <div v-if="data.moduleDescription" class="desc">{{data.moduleDescription}}</div>
	        <div  v-if="data.moduleContent.banners&& data.moduleContent.banners.length===3">
	  	      <img v-for="datas in data.moduleContent.banners" :src="datas.bannerImgSrc" alt="" class="imgs">
	        </div>
        </div>
  	  </div>
  	  <div v-for="data in $store.state.funitureList2" class="homeList2" v-if=" data.moduleContent.products">
  	  	 <p v-if="data.moduleName">{{data.moduleName}}</p>
  	  	 <div v-if="data.moduleDescription" class="desc">{{data.moduleDescription}}</div>
  	     <div class="bar">
  	     	<div v-for="pros,index in data.moduleContent.products" v-if=" data.moduleContent.products &&index<6" class="bar2">
	  	     	<img :src="pros.productImg" alt="">
	  	     	<div class="text">{{pros.productName}}</div>
	  	     	<div class="text">￥{{pros.sellPrice}}</div>
  	     	</div>
  	      <p class="all"><span>查看全部</span><i class="iconfont ">&#xe603;</i></p> 
  	     </div>
  	  </div>
  	 <br>
  	 <br>
  	 <br>
  	 <br>
  </div>
</template>

<script>
 import { Indicator } from 'mint-ui';
 import Swiper from 'swiper';
 import axios from 'axios';
 import { Spinner } from 'mint-ui';
 require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
 import  'swiper/dist/css/swiper.min.css';
export default {
  name:'recommend',
  data(){
  	return{
  		imgList:[]
  	}

  },
  	components: {
    'swipe': Swipe,
    'swipe-item':SwipeItem,
    'spinner':Spinner,
    'indicator':Indicator
  },
  mounted(){
  	this.$store.dispatch('funiture','/v2/page?pageId=1&tabId=10006&_=1542861845237');
  	this.$store.dispatch('funiture','/v2/page?pageId=1&tabId=10006&_=1542861845237');
  	Indicator.open('Loading...');
  	Indicator.open({
  	  text: 'Loading...',
  	  spinnerType: 'fading-circle'
  	});
  	    axios.get('/v2/page?pageId=1&tabId=10006&_=1542861845237').then(res=>{
 	      this.imgList = res.data.data.modules[0].moduleContent.banners;
	  	    this.$nextTick(()=>{
				var mySwiper = new Swiper ('.swiper-container', {
				    loop: true,
				    pagination: {
				      el: '.swiper-pagination',
				     }
				  })     
	  	    })

 	    })
 	    Promise.all([axios.get('/v2/page?pageId=1&tabId=10006&_=1542861845237')]).then(res=>{
 	    	Indicator.close();
 	    })
  }
}
</script>

<style scoped lang="scss">
.main{
	background: #F5F5F5;
}
  .imgs{
  	background: white;
  	width:3.75rem;
  	height:2.5rem;
  	img{
  		width:100%;
  	    height:2.5rem;
  	}
  }
  .bars{
  	background: white;
   	margin-top: .1rem;
   	padding-top: .2rem;
   	p{
   		text-align: center;
   	}
   	.words{
   		font-size: .2rem;
   		font-weight: bold;
   	}
   	.woord{
   		font-size: .12rem;
   		color: #ccc;
   	}
  	  img{
  	  	padding: .2rem;
  	 	width: 100%;
  	 	height: 2.5rem;
  	 }
  }
  ul{
  	width: 100%;
    display: flex;
    margin-bottom: .2rem;
    li{
    	flex: 1;
    	padding:.05rem;
    	img{
    		width: 100%;
    		height:1rem!important;
    	}
	 
	}
}
 .all{
 	padding: 0;
 	margin: 0;
 	span{
 	display: inline-block;
 	margin-top: .2rem;
 	font-size: .12rem;
 	padding-top: .1rem;
 	}

 }
 .swiper-slide{
 	width: 1.3rem!important;
 	height:1.7rem;
 	padding: 0;
 	margin: 0;
 	img{
		width: 100%;
		height:1rem!important;
    	}
    p{
    	margin: 0!important;
    }

 }
 .my-swipe {
   height: 200px;
   color: #fff;
   font-size: 30px;
   text-align: center;
 }

 .slide1 {
   background-color: #0089dc;
   color: #fff;
 }

 .fix{
 	position: fixed;
 	top: 50%;
 	left: 50%;
 }
 .homeList2{
 	margin-top:.1rem;
 	overflow: hidden;
    p{
    	font-size: .18rem;
    	text-align: center;
    	width: 100%;
    	padding: .3rem 0;
    	background: white;
    }
 	
 }
 .homeList{
 	width: 100%;
 	background: white;
 	clear: both;
 	text-align: center;
 	.imgs{
 		padding-bottom: .2rem;
 		margin-top: .2rem;
        margin-right: .1rem;
 		background: white;
 		width: 30%;
 		height:1.3rem;
 	}
 }
 .bar{
 	width: 100%;
 	background: white;
 	overflow: hidden;
 	.bar2{
 		float: left;
		width:50%; 
		height: 3rem;
		border: 1px solid #f5f5f5;
		img{
			display: block;
			width: 100%;
			height: 2rem;
		}
		.text{
			text-align: left;
			padding-left: .1rem;
			margin-bottom: .1rem;
			font-size: .14rem;
			height: .28rem;

		}

 	}
 	
 }
.desc{
	font-size: .12rem;
    color:#ccc;
    height: .3rem; 
    background: white;
    text-align: center;
}
</style>