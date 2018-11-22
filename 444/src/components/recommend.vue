<template>
  <div class="main">
  	<swipe class="my-swipe">
  	  <swipe-item class="slide1 imgs" v-for="data in imgList" :key="data.id">
  	  	<img :src="data.bannerImgSrc" alt="">
  	  </swipe-item>
  	</swipe>
  	 <div v-for="data in $store.state.barList"class="bars">
	  	 	 <p class="words" v-if="data.moduleName">{{data.moduleName}}</p>
	  	 	  <p class="woord" v-if="data.moduleDescription">{{data.moduleDescription}}</p>
  	        <div  v-if="data.moduleContent.banners" >
	  	      <img v-if="data.moduleContent.banners[0]" :src="data.moduleContent.banners[0].bannerImgSrc" alt="">
  	        </div>
  	     <div v-if="data.moduleContent.products">
  	     <ul>
  	     	<li v-for="pros in data.moduleContent.products" v-if=" data.moduleContent.products.length<4">
	  	     	<img :src="pros.productImg" alt="">
	  	     	<p>{{pros.productName}}</p>
	  	     	<p>￥{{pros.sellPrice}}</p>
  	     	</li>
  	     </ul>
  	     	<div v-if=" data.moduleContent.products.length>4" >
  	     		<div class="swiper-container swiper" style="margin:0px;padding:0px">
  	     		    <div class="swiper-wrapper">
  	     		      <div class="swiper-slide" v-for="pros in data.moduleContent.products" :key="pros.id">
     		        	 <img :src="pros.productImg" alt="">
	  	     	          <p >{{pros.productName}}</p>
	  	     	          <p >￥{{pros.sellPrice}}</p>
  	     		      </div>
  	     		    </div>
  	     		  </div>  
     		      <p class="all" @click="handleClick()">查看全部<i class="iconfont ">&#xe603;</i></p> 
  	     	   </div>
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
  		imgList:[],
  		barList:[]
    }
  },
  methods : {
    handleClick(){

    }
  },
  components: {
    'swipe': Swipe,
    'swipe-item':SwipeItem,
    'spinner':Spinner,
    'indicator':Indicator
  },
  mounted(){
  	this.$store.dispatch('bar','/v2/page?pageId=1&tabId=1&_=1542764925216');
  	Indicator.open('Loading...');
  	Indicator.open({
  	  text: 'Loading...',
  	  spinnerType: 'fading-circle'
  	});
  	    axios.get('/v2/page?pageId=1&tabId=1&_=1542764925216').then(res=>{
 	      this.imgList = res.data.data.modules[0].moduleContent.banners;
 	      console.log(res.data.data)
	  	    this.$nextTick(()=>{
				var mySwiper = new Swiper ('.swiper-container', {
				    loop: true,
				    pagination: {
				      el: '.swiper-pagination',
				     }
				  })     
	  	    })

 	    })
 	    Promise.all([axios.get('/v2/page?pageId=1&tabId=1&_=1542764925216')]).then(res=>{
 	    	Indicator.close();
 	    })
  },
  /*methods:{
  	handelClick(){
  		this.$router.push('#')
  	}
  }*/
  
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
   	margin-top: .2rem;
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
    margin-bottom: .5rem;
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
 	padding-bottom: .3rem;
 	margin-top: .5rem;

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
</style>